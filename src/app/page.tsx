import { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Headline } from './components/headline';
import { Logo } from './components/logo';
import { LogoIcon } from './decoration/logo-icon';
import { OverlayStripes } from './decoration/overlay-stripes';
import { Spotlight } from './decoration/spotlight';
import { twStyled } from './helper/tw-styled';

export const metadata: Metadata = {
  title: 'Untameable - User & Developer experiences',
  description:
    'Build great Developer and User Experiences for digital products',
  openGraph: {
    title: 'Untameable - User & Developer experiences',
    description:
      'Build great Developer and User Experiences for digital products',
    type: 'website',
    url: 'https://untameable.io',
    locale: 'en_US',
  },
};

export default function Home() {
  return (
    <main>
      <Spotlight
        className={[
          'top-0',
          'translate-y-[-40%]',
          'sm:translate-y-[-50%]',
          'lg:translate-y-[-60%]',
        ]}
      />
      <HeaderBGIcon />
      <OverlayStripes />
      <FullScreenContainer>
        <Logo className='w-[40vw]' />
        <Headline primary={'Have digital,'} secondary={'work for you'} />
        <div className='pb-8 text-center'>
          <h3 className='text-white text-1xl md:text-2xl font-extrabold mb-3'>
            Build great Developer and User Experiences for digital products
          </h3>
          <TLDR>Software Development</TLDR>
        </div>
      </FullScreenContainer>
    </main>
  );
}

const HeaderBGIcon = twStyled(LogoIcon)(
  'absolute',
  'w-[50%]',
  'left-[50%]',
  'translate-x-[-50%]',
  'translate-y-[-10%]'
);

const FullScreenContainer = twStyled('div')(
  'relative',
  'p-8',
  'md:p-16',
  'flex',
  'w-[100%]',
  'h-[100vh]',
  'justify-between',
  'items-center',
  'flex-col'
);

const TLDR: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <p className='text-[_var(--color-primary)] text-center italic'>
      <strong>TL;DR</strong> - {children}
    </p>
  );
};
