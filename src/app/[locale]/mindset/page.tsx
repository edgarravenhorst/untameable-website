import type { Metadata } from 'next';
import { Blog } from '../../../components/blog';
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../translations-provider';
import { AspectOverview } from './aspect-overview';

const i18nNamespaces = ['mindset', 'common'];

type MindsetProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: MindsetProps): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `${t('title')} - ${t('subtitle')}`,
    description: t('mainPage.purpose.text'),
    openGraph: {
      title: `${t('title')} - ${t('subtitle')}`,
      description: t('mainPage.purpose.text'),
      type: 'website',
      url: 'https://untameable.io/mindset',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function Mindset(props: MindsetProps) {
  const params = await props.params;
  const { locale } = params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Blog
        title={t('title')}
        subtitle={t('subtitle')}
        date={t('date')}
        by={t('author')}
      >
        <div className="whitespace-pre-line">
          <h2 className="mt-0">{t('mainPage.purpose.heading')}</h2>
          <p className="whitespace-pre-line">{t('mainPage.purpose.text')}</p>
        </div>

        <div className="whitespace-pre-line">
          <h2>{t('mainPage.methodologies.heading')}</h2>
          <p className="whitespace-pre-line">
            {t('mainPage.methodologies.text')}
          </p>
        </div>

        <div className="whitespace-pre-line">
          <h2>{t('mainPage.aspects.heading')}</h2>
          <p className="whitespace-pre-line">{t('mainPage.aspects.text')}</p>
        </div>

        <AspectOverview />
      </Blog>
    </TranslationsProvider>
  );
}
