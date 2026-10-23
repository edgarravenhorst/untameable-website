import type { Metadata } from 'next';
import { About, Contact } from '@/components/get-started';
import { Hero } from '@/components/hero';
import { Offerings } from '@/components/offerings';
import { ProcessOverview } from '@/components/process-overview';
import { Services } from '@/components/services';
import { SectionDivider, SiteFrame } from '@/components/site-frame';
import { tw } from '@/helper/tw';
import initTranslations from '../../i18n';
import TranslationsProvider from '../../translations-provider';

type HomeProps = {
  params: Promise<{ locale: string }>;
};

const i18nNamespaces = ['home', 'common'];

export async function generateMetadata(props: HomeProps): Promise<Metadata> {
  const { locale } = await props.params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const title = t('home:meta.title');
  const description = t('home:meta.description');
  const prefix = locale === 'nl' ? '' : `/${locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://untameable.io${prefix}`,
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function Home(props: HomeProps) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <SiteFrame>
        <header className="relative">
          <Hero />
        </header>

        <main
          className={tw(
            'p-8',
            'md:p-16',
            'pt-0',
            'md:pt-0',
            'relative',
            'max-md:p-6',
          )}
        >
          <ProcessOverview />
          <SectionDivider />
          <Offerings />
          <SectionDivider />
          <Services />
          <SectionDivider />
          <About />
          <SectionDivider />
          <Contact />
        </main>
      </SiteFrame>
    </TranslationsProvider>
  );
}
