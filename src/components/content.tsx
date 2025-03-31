import { tw } from '@/helper/tw';
import React, { ComponentProps, PropsWithChildren } from 'react';

type TitleProps = PropsWithChildren<{
  preTitle?: string;
  title: string;
  variant?:
    | 'hero'
    | 'hero-sm'
    | 'statement'
    | 'section'
    | 'widget'
    | 'widget-sm';
  className?: string;
}>;

export const Title: React.FC<TitleProps> = ({
  preTitle,
  title,
  variant = 'section',
  className,
}) => {
  switch (variant) {
    case 'hero':
      return (
        <h1
          className={tw(
            'text-white',
            'text-[7.4rem]',
            'max-xl:text-[clamp(3rem,6vw,7.4rem)]',
            'leading-none',
            'font-extrabold',
            'mb-2',
            className
          )}
        >
          {preTitle && <small className='text-white'>{preTitle} </small>}
          {title}
        </h1>
      );
    case 'hero-sm':
      return (
        <h2
          className={tw(
            'text-white',
            'text-[6rem]',
            'max-xl:text-[clamp(2.8rem,6vw,8rem)]',
            'leading-none',
            'font-extrabold',
            'mb-2',
            className
          )}
        >
          {preTitle && <small className='text-white'>{preTitle} </small>}
          {title}
        </h2>
      );
    case 'statement':
      return (
        <h2 className={tw('text-2xl font-extrabold', className)}>
          {preTitle && <small className='text-white'>{preTitle} </small>}
          {title}
        </h2>
      );
    case 'section':
      return (
        <h2
          className={tw('text-[1.625rem] font-extrabold text-white', className)}
        >
          {preTitle && <small className='text-white'>{preTitle} </small>}
          {title}
        </h2>
      );
    case 'widget':
      return (
        <h3
          className={tw(
            'text-[1.625rem] font-extrabold text-[--color-primary] leading-tight max-md:text-[1.375rem]',
            className
          )}
        >
          {preTitle && (
            <>
              <small className='text-white text-sm'>{preTitle} </small>
              <br />
            </>
          )}
          {title}
        </h3>
      );

    case 'widget-sm':
      return (
        <h3
          className={tw(
            'text-[1.375rem] font-extrabold text-[--color-primary]  leading-tight',
            className
          )}
        >
          {preTitle && (
            <>
              <small className='text-white text-sm'>{preTitle} </small>
              <br />
            </>
          )}
          {title}
        </h3>
      );
  }
};

type CardProps = ComponentProps<'div'>;

export const Card: React.FC<CardProps> = ({ className, children }) => {
  return (
    <div
      className={tw('w-full', 'p-6', 'flex', 'flex-col gap-3', className)}
      style={{ backgroundColor: 'rgba(46, 70, 111, 0.1)' }}
    >
      {children}
    </div>
  );
};
