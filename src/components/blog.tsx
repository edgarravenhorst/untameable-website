import { LogoIcon } from '@/app/[locale]/decoration/logo-icon';
import { StripedOverlay } from '@/app/[locale]/decoration/overlay-stripes';
import { Spotlight } from '@/app/[locale]/decoration/spotlight';
import { tw } from '@/helper/tw';
import Image from 'next/image';
import { CoffeeTime } from './coffee';
import { Headline } from './headline';
import { Logo } from './logo';

type BlogProps = React.PropsWithChildren<{
  title: string;
  subtitle: string;
  date: string;
  by: string;
}>;

export function Blog({ children, title, subtitle, date, by }: BlogProps) {
  return (
    <main
      className={tw(
        'relative',
        'text-white',
        'text-opacity-80',
        'text-lg',
        'pb-20'
      )}
    >
      <Spotlight
        followMouse
        className={tw(
          'top-[5%]',
          'lg:top-[-8%]',
          'opacity-50',
          'hidden',
          'lg:block'
        )}
      />

      <LogoIcon
        className={tw(
          'absolute',
          'w-[50%]',
          'left-[50%]',
          'translate-x-[-50%]',
          'translate-y-[-10%]',
          'opacity-80'
        )}
      />

      <StripedOverlay />
      <div
        className={tw(
          'relative',
          'max-w-full',
          'flex',
          'flex-col',
          'items-center',
          'min-h-svh',
          'p-10'
        )}
      >
        <Logo />
        <article
          className={tw(
            'flex',
            'flex-col',
            'relative',
            'prose prose-invert prose-md md:prose-lg',
            'max-w-screen-xl',
            'gap-20'
          )}
        >
          <div className={tw('!mt-32', 'pt-[7vw]')}>
            <Headline
              className={tw(
                'text-[6vw]',
                'sm:text-[5vw]',
                'md:text-5xl',
                'lg:text-6xl',
                'xl:text-7xl',
                'whitespace-normal',
                'text-center',
                'text-balance',
                'text-wrap',
                'max-sm:!leading-[7vw]'
              )}
              noLines
              primary={
                <>
                  <span className='md:whitespace-nowrap'>{title}</span>
                  <br />
                  <span className='font-extralight md:whitespace-nowrap  text-[0.85em] sm:text-[0.66em]'>
                    {subtitle}
                  </span>
                </>
              }
            />

            <div className='pt-12 flex justify-center items-center gap-10'>
              <div className='flex items-center gap-3'>
                <div className='rounded-full'>
                  <Image
                    src='/edgar.png'
                    alt={'Avatar ' + by}
                    width={45}
                    height={45}
                  />
                </div>
                <p className='leading-none'>
                  Written by: <strong>{by}</strong>,{' '}
                  {new Date(date).toLocaleDateString('nl', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>

          <div className=' max-w-screen-lg mx-auto'>{children}</div>

          <div
            className={tw('max-w-screen-lg', 'h-10', 'hidden', 'md:block')}
          />
          <CoffeeTime />
        </article>
      </div>
    </main>
  );
}
