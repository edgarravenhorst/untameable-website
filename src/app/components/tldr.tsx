import { PropsWithChildren } from 'react';

export const TLDR: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className='text-[_var(--color-primary)]  italic'>
      <strong>TL;DR</strong> - {children}
    </p>
  );
};
