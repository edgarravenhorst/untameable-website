import type { ComponentProps } from 'react';
import { tw } from '@/helper/tw';

export type TLDRProps = ComponentProps<'p'>;

export const TLDR: React.FC<TLDRProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p {...props} className={tw('text-primary', 'italic', className)}>
      <strong className="text-inherit">TL;DR</strong> - {children}
    </p>
  );
};
