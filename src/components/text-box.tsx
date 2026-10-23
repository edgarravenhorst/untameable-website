import type React from 'react';
import { tw } from '@/helper/tw';

type TextBoxProps = {
  title: string;
  text: string;
  className?: string;
};

export const TextBox: React.FC<TextBoxProps> = ({ title, text, className }) => {
  return (
    <article
      className={tw('w-full', 'p-6', 'flex', 'flex-col', className)}
      style={{ backgroundColor: 'rgba(46, 70, 111, 0.1)' }}
    >
      <h2
        className={tw(
          'not-prose',
          'text-lg',
          'text-primary',
          'text-center',
          'xl:text-left',
        )}
      >
        {title}
      </h2>
      <p className="not-prose text-base md:text-xl font-normal text-center xl:text-left ">
        {text}
      </p>
    </article>
  );
};
