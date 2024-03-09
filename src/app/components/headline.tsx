import { ComponentProps } from 'react';
import { tw } from '../helper/tw';

interface HeadlineProps extends ComponentProps<'h1'> {
  primary: string;
  secondary?: string;
}

export const Headline: React.FC<HeadlineProps> = ({
  primary,
  secondary,
  className,
}) => {
  return (
    <h1
      className={tw(
        'not-prose',
        'text-',
        'text-white',
        'flex',
        'flex-col',
        'max-w-lg',
        'max-w-[500px]',
        'md:max-w-[600px]',
        'lg:max-w-[800px]',
        'xl:max-w-[1100px]',
        'whitespace-nowrap',
        'text-[10vw]',
        'sm:text-6xl',
        'md:text-7xl',
        'lg:text-8xl',
        'xl:text-9xl',
        'leading-[1]',
        'font-extrabold',
        'justify-center',
        'w-[100%]',
        className
      )}
    >
      <span className='inline-flex flex-1 items-center gap-8'>
        {!secondary && <hr className='w-1/5 border-[_var(--color-primary)]' />}
        <span>{primary}</span>
        <hr className='w-1/5 border-[_var(--color-primary)]' />
      </span>

      {secondary && (
        <span className='inline-flex flex-1 items-center gap-8'>
          <hr className='w-1/5 border-[_var(--color-primary)]' />
          <span>{secondary}</span>
        </span>
      )}
    </h1>
  );
};
