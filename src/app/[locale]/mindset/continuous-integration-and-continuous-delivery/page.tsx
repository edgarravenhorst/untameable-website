import type { Metadata } from 'next';
import Link from 'next/link';
import { Blog } from '../../../../components/blog';
import initTranslations from '../../../../i18n';
import TranslationsProvider from '../../../../translations-provider';
import type { MindsetAspect } from '../aspect';
import { AspectOverview } from '../aspect-overview';

const i18nNamespaces = ['mindset', 'common'];

type MindsetProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: MindsetProps): Promise<Metadata> {
  const params = await props.params;
  const { locale } = params;
  const { t } = await initTranslations(locale, i18nNamespaces);

  return {
    title: `Untameable Mindset - ${t('aspects.continuousIntegrationAndDelivery.title')}`,
    description: t('aspects.continuousIntegrationAndDelivery.lead'),
    openGraph: {
      title: `Untameable Mindset - ${t('aspects.continuousIntegrationAndDelivery.title')}`,
      description: t('aspects.continuousIntegrationAndDelivery.lead'),
      type: 'website',
      url: 'https://untameable.io/mindset/continuous-integration-and-continuous-delivery',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function Mindset(props: MindsetProps) {
  const params = await props.params;
  const { locale } = params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const aspect = t('aspects.continuousIntegrationAndDelivery', {
    returnObjects: true,
  }) as MindsetAspect;

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <Blog
        title={t('title')}
        subtitle={`${aspect.number}. ${aspect.title}`}
        date={t('date')}
        by={t('author')}
      >
        <p className="lead md:text-2xl! text-center mb-24! mt-0!">
          {aspect.lead}
        </p>

        <p>{aspect.description}</p>

        <h4>{aspect.keyPrinciples.heading}</h4>
        <p>{aspect.keyPrinciples.text}</p>
        <h4>{aspect.benefits.heading}</h4>
        <p>{aspect.benefits.text}</p>
        <h4>{aspect.implementation.heading}</h4>
        <p>{aspect.implementation.text}</p>
        <h4>{aspect.examples.heading}</h4>
        <p>{aspect.examples.text}</p>
        <p>--</p>
        <h3>{t('common.readOtherAspects')}</h3>
        <p>
          {t('common.partOfSeries')} <Link href="/mindset">{t('title')}</Link>.{' '}
          {t('common.exploreOtherAspects')}
          <br />
          <br />
        </p>

        <AspectOverview />
      </Blog>
    </TranslationsProvider>
  );
}
