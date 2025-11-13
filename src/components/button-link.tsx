import { tw } from '@/helper/tw';
import Link from 'next/link';
import React from 'react';

type ButtonLinkProps = {
  url: string;
  text: string;
  className?: string;
};

export const ButtonLink: React.FC<ButtonLinkProps> = ({
  url,
  text,
  className,
}) => {
  return (
    <Link
      href={url}
      className={tw(
        'btn-arrow',
        'no-underline',
        'bg-[--color-primary]',
        'text-[--background]',
        'font-bold',
        'py-2',
        className
      )}
    >
      <span>{text}</span>
    </Link>
  );
};
