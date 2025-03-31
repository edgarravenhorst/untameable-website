'use client';
import { Divider } from '@/app/[locale]/decoration/divider';
import { tw } from '@/helper/tw';
import Link from 'next/link';

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className={tw('relative')}>
      <div
        className={tw(
          'not-prose',
          'flex',
          'items-center',
          'justify-center',
          'text-sm',
          'relative',
          'p-9'
        )}
      >
        <Link href=''>Terms of service</Link>
        <Divider orientation='vertical' className='h-3 mx-2 border-white ' />
        <Link href=''>privacy policy</Link>
      </div>
    </footer>
  );
};
