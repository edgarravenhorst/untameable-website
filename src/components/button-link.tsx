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
        'no-underline',
        'bg-[--color-primary]',
        'text-[--background]',
        'font-bold',
        'py-2 px-6',
        className
      )}
      style={{
        clipPath: 'polygon(0% 0%, 93% 0%, 100% 50%, 93% 100%, 0% 100%)',
      }}
    >
      {text}
    </Link>
  );
};
