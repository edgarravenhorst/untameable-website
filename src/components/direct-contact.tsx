import Link from 'next/link';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

const PHONE_HREF = 'tel:+31627311410';
const PHONE_LABEL = '+31 627 311 410';
const EMAIL = 'info@untameable.io';
const LINKEDIN = 'https://www.linkedin.com/company/untameable/';

export function DirectContact({
  callLabel,
  emailLabel,
  linkedinLabel,
  followLabel,
}: {
  callLabel: string;
  emailLabel: string;
  linkedinLabel: string;
  followLabel: string;
}) {
  const row =
    'flex items-start gap-3 text-primary no-underline [&_svg]:mt-0.5 [&_svg]:shrink-0';

  return (
    <div className="flex flex-col gap-5 md:min-w-64 md:border-l md:border-white/15 md:pl-10">
      <Link href={PHONE_HREF} className={row}>
        <FiPhone size={18} aria-hidden="true" />
        <span>
          <span className="block text-base font-semibold">{PHONE_LABEL}</span>
          <span className="mt-0.5 block text-sm font-medium text-white/55">
            {callLabel}
          </span>
        </span>
      </Link>

      <Link href={`mailto:${EMAIL}`} className={row}>
        <FiMail size={18} aria-hidden="true" />
        <span>
          <span className="block text-base font-semibold">{EMAIL}</span>
          <span className="mt-0.5 block text-sm font-medium text-white/55">
            {emailLabel}
          </span>
        </span>
      </Link>

      <Link
        href={LINKEDIN}
        className={row}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin size={18} aria-hidden="true" />
        <span>
          <span className="block text-base font-semibold">{linkedinLabel}</span>
          <span className="mt-0.5 block text-sm font-medium text-white/55">
            {followLabel}
          </span>
        </span>
      </Link>
    </div>
  );
}
