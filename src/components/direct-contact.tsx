import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const PHONE_HREF = 'tel:+31627311410';
const PHONE_LABEL = '+31 627 311 410';
const EMAIL = 'info@untameable.io';
const LINKEDIN = 'https://www.linkedin.com/company/untameable/';

export function DirectContact({
  callLabel,
  emailLabel,
  linkedinLabel,
}: {
  callLabel: string;
  emailLabel: string;
  linkedinLabel: string;
}) {
  return (
    <div className="font-bold text-white flex flex-col gap-6">
      <p className="leading-none m-0">
        {callLabel}{' '}
        <Link href={PHONE_HREF} className="text-primary no-underline">
          {PHONE_LABEL}
        </Link>
      </p>

      <p className="leading-none m-0">
        {emailLabel}{' '}
        <Link href={`mailto:${EMAIL}`} className="text-primary no-underline">
          {EMAIL}
        </Link>
      </p>

      <p className="leading-none m-0">{linkedinLabel}</p>

      <Link
        href={LINKEDIN}
        className="text-primary no-underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={31.5} />
      </Link>
    </div>
  );
}
