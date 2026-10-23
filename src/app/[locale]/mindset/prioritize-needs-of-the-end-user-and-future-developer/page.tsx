import type { Metadata } from 'next';
import Link from 'next/link';
import { Blog } from '../../../../components/blog';
import initTranslations from '../../../../i18n';
import TranslationsProvider from '../../../../translations-provider';
import type { MindsetPriorities } from '../aspect';
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
    title: `Untameable - ${t('aspects.prioritizeUserAndDeveloper.title')}`,
    description: t('aspects.prioritizeUserAndDeveloper.lead'),
    openGraph: {
      title: `Untameable - ${t('aspects.prioritizeUserAndDeveloper.title')}`,
      description: t('aspects.prioritizeUserAndDeveloper.lead'),
      type: 'website',
      url: 'https://untameable.io/mindset/prioritize-needs-of-the-end-user-and-future-developer',
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function Mindset(props: MindsetProps) {
  const params = await props.params;
  const { locale } = params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);
  const aspect = t('aspects.prioritizeUserAndDeveloper', {
    returnObjects: true,
  }) as MindsetPriorities;

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

        <h2>{aspect.userExperience.heading}</h2>
        <p>{aspect.userExperience.text}</p>

        <h4>{aspect.userExperience.keyPrinciples.heading}</h4>
        <p>{aspect.userExperience.keyPrinciples.text}</p>
        <h4>{aspect.userExperience.benefits.heading}</h4>
        <p>{aspect.userExperience.benefits.text}</p>
        <h4>{aspect.userExperience.implementation.heading}</h4>
        <p>{aspect.userExperience.implementation.text}</p>
        <h4>{aspect.userExperience.examples.heading}</h4>
        <p>{aspect.userExperience.examples.text}</p>

        <h2>{aspect.developerExperience.heading}</h2>
        <p>{aspect.developerExperience.text}</p>

        <h4>{aspect.developerExperience.keyPrinciples.heading}</h4>
        <p>{aspect.developerExperience.keyPrinciples.text}</p>
        <h4>{aspect.developerExperience.benefits.heading}</h4>
        <p>{aspect.developerExperience.benefits.text}</p>
        <h4>{aspect.developerExperience.implementation.heading}</h4>
        <p>{aspect.developerExperience.implementation.text}</p>
        <p>{aspect.developerExperience.implementationExtended.text}</p>
        <h4>{aspect.developerExperience.examples.heading}</h4>
        <p>{aspect.developerExperience.examples.text}</p>

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
