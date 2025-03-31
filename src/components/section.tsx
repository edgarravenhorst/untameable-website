import { tw } from '@/helper/tw';
import { ComponentProps } from 'react';

export const Section: React.FC<ComponentProps<'section'>> = ({
  children,
  ...props
}) => {
  return (
    <section
      className='flex flex-col justify-normal items-center not-prose'
      {...props}
    >
      {children}
    </section>
  );
};

export const SectionContainer: React.FC<
  ComponentProps<'div'> & {
    title?: string;
  }
> = ({ children, title, ...props }) => {
  return (
    <div
      {...props}
      className={tw(
        'relative flex flex-row gap-x-6 gap-y-6 max-w-[calc(1280px+4rem)] px-[clamp(1rem,6vw,2rem)]', 
        'max-md:flex-col',
        props.className
      )}
    >
      {children}
    </div>
  );
};
