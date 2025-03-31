import { Divider } from '@/app/[locale]/decoration/divider';
import { LogoIcon } from '@/app/[locale]/decoration/logo-icon';
import { StripedOverlay } from '@/app/[locale]/decoration/overlay-stripes';
import { Spotlight } from '@/app/[locale]/decoration/spotlight';
import { Footer } from '@/components/footer';
import { MissionStatement } from '@/components/misison-statement';
import { tw } from '@/helper/tw';
import { Metadata } from 'next';
import { GetStarted } from '../../components/get-started';
import { Hero } from '../../components/hero';
import { HowWeHelp } from '../../components/how-we-help';
import { NavBar } from '../../components/nav-bar';
import { Services } from '../../components/services';
import { WeConnect } from '../../components/we-connect';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../translations-provider';

export const metadata: Metadata = {
  title: 'Untameable - Elevate user & developer experiences',
  description:
    'A reliable partner for elevating user and developer experiences in software application development.',
  openGraph: {
    title: 'Untameable - Elevate user & developer experiences',
    description:
      'A reliable partner for elevating user and developer experiences in software application development.',
    type: 'website',
    url: 'https://untameable.io',
    locale: 'en_US',
  },
};

type HomeProps = {
  params: Promise<{ locale: string }>;
};

// Translation files to consider for this page
const i18nNamespaces = ['home', 'common'];

export default async function Home(props: HomeProps) {
  const params = await props.params;

  const { locale } = params;

  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <div className='relative text-white text-opacity-80 text-lg h-fit'>
        <Spotlight
          className={tw(
            'top-[5%]',
            'lg:top-[-8%]',
            'translate-y-[-50%]',
            'sm:translate-y-[-50%]',
            'lg:translate-y-[-50%]',
            'xl:translate-y-[-60%]'
          )}
        />

        <Spotlight className={tw('top-[35%]', 'left-[75vw]', 'sm:hidden')} />
        <Spotlight className={tw('top-[70%]', 'left-[-10%]')} />

        <Spotlight
          followMouse
          className={tw('opacity-50', 'hidden', 'lg:block')}
        />

        <div className={'flex justify-end absolute bottom-0 right-0'}>
          <LogoIcon
            className={tw(
              'fill-[#0A0E14]',
              'w-[40vw]',
              'h-[50vw]',
              '-mt-[35vw]',
              'opacity-40'
            )}
          />
        </div>

        <StripedOverlay />

        <div
          className={tw(
            'prose prose-invert',
            'prose-md',
            'md:prose-xl',
            'max-w-full'
          )}
        >
          <header className='relative'>
            <NavBar />
            <Hero />
            <Services />
          </header>

          <main className={tw('p-8', 'md:p-16', 'pt-0', 'md:pt-0', 'relative', 'max-md:p-6')}>
            <SectionDivider />
            <HowWeHelp />
            <SectionDivider />
            <WeConnect />
            <SectionDivider />
            <MissionStatement />
            <SectionDivider />
            <GetStarted />
          </main>

          <Footer />
        </div>
      </div>
    </TranslationsProvider>
  );
}

const SectionDivider = () => {
  return (
    <Divider orientation='vertical' className={'h-12 mx-auto my-[3.75rem]'} />
  );
};
