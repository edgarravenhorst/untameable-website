import type { Metadata } from 'next';
import { ProcessOnePager } from '@/components/process-one-pager';
import { SiteFrame } from '@/components/site-frame';
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../translations-provider';

const i18nNamespaces = ['process', 'common'];

type ProcessPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: ProcessPageProps,
): Promise<Metadata> {
  const { locale } = await props.params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const title = `${t('process:page.title')} - Untameable`;
  const description = t('process:page.metaDescription');
  const prefix = locale === 'nl' ? '' : `/${locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://untameable.io${prefix}/process`,
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function ProcessPage(props: ProcessPageProps) {
  const { locale } = await props.params;
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <SiteFrame>
        <ProcessOnePager />
      </SiteFrame>
    </TranslationsProvider>
  );
}
