import type { ReactNode } from 'react';
import { Divider } from '@/app/[locale]/decoration/divider';
import { LogoIcon } from '@/app/[locale]/decoration/logo-icon';
import { StripedOverlay } from '@/app/[locale]/decoration/overlay-stripes';
import { Spotlight } from '@/app/[locale]/decoration/spotlight';
import { tw } from '@/helper/tw';
import { Footer } from './footer';
import { NavBar } from './nav-bar';

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative text-white text-opacity-80 text-lg h-fit">
      <Spotlight
        className={tw(
          'top-[-3%]',
          'sm:top-[-5%]',
          'lg:top-[-8%]',
          'sm:translate-y-[-50%]',
          'md:translate-y-[-55%]',
          'xl:translate-y-[-60%]',
        )}
      />

      <Spotlight className={tw('top-[70%]', 'left-[-10%]')} />

      <div className="flex justify-end absolute bottom-0 right-0">
        <LogoIcon
          className={tw(
            'fill-[#111B2B]',
            'w-[40vw]',
            'h-[50vw]',
            '-mt-[35vw]',
            'opacity-40',
          )}
        />
      </div>

      <StripedOverlay />

      <div
        className={tw(
          'prose prose-invert',
          'prose-md',
          'md:prose-xl',
          'max-w-full',
        )}
      >
        <NavBar />
        {children}
        <Footer />
      </div>
    </div>
  );
}

export const SectionDivider = () => {
  return (
    <Divider orientation="vertical" className="h-12 mx-auto my-[3.75rem]" />
  );
};
