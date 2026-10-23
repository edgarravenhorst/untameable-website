'use server';

export type AuditRequestState = {
  status: 'idle' | 'success' | 'error';
  error?: 'validation' | 'delivery';
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, key: string) {
  return String(formData.get(key) ?? '')
    .replace(/[\r\n]+/g, ' ')
    .trim();
}

export async function submitAuditRequest(
  _previous: AuditRequestState,
  formData: FormData,
): Promise<AuditRequestState> {
  if (field(formData, 'company_website')) {
    return { status: 'success' };
  }

  const name = field(formData, 'name');
  const company = field(formData, 'company');
  const email = field(formData, 'email');
  const message = String(formData.get('message') ?? '').trim();

  if (
    !name ||
    !company ||
    !email ||
    !message ||
    name.length > 200 ||
    company.length > 200 ||
    email.length > 200 ||
    message.length > 5000 ||
    !emailPattern.test(email)
  ) {
    return { status: 'error', error: 'validation' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.AUDIT_FROM_EMAIL;

  if (!apiKey || !from) {
    return { status: 'error', error: 'delivery' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: ['info@untameable.io'],
        reply_to: email,
        subject: `Verkennend gesprek: ${name} (${company})`,
        text: [
          `Name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          '',
          message,
        ].join('\n'),
      }),
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Audit request failed', response.status);
      return { status: 'error', error: 'delivery' };
    }
  } catch (error) {
    console.error('Audit request failed', error);
    return { status: 'error', error: 'delivery' };
  }

  return { status: 'success' };
}
