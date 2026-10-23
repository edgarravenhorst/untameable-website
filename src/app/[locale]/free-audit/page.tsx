import type { Metadata } from 'next';
import { AuditForm } from '@/components/audit-form';
import { Title } from '@/components/content';
import { DirectContact } from '@/components/direct-contact';
import { SiteFrame } from '@/components/site-frame';
import { tw } from '@/helper/tw';
import initTranslations from '../../../i18n';
import TranslationsProvider from '../../../translations-provider';

const i18nNamespaces = ['process', 'common'];

type FreeAuditProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(
  props: FreeAuditProps,
): Promise<Metadata> {
  const { locale } = await props.params;
  const { t } = await initTranslations(locale, i18nNamespaces);
  const title = t('process:freeAudit.metaTitle');
  const description = t('process:freeAudit.metaDescription');
  const prefix = locale === 'nl' ? '' : `/${locale}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://untameable.io${prefix}/free-audit`,
      locale: locale === 'nl' ? 'nl_NL' : 'en_US',
    },
  };
}

export default async function FreeAuditPage(props: FreeAuditProps) {
  const { locale } = await props.params;
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      resources={resources}
      locale={locale}
      namespaces={i18nNamespaces}
    >
      <SiteFrame>
        <main
          className={tw(
            'not-prose',
            'relative',
            'px-[clamp(1rem,6vw,4rem)]',
            'pt-36',
            'pb-24',
            'max-w-[1100px]',
            'mx-auto',
            'grid',
            'md:grid-cols-2',
            'gap-16',
          )}
        >
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-white text-[clamp(2.8rem,6vw,4.5rem)] font-extrabold leading-none m-0">
                {t('process:freeAudit.title')}
              </h1>
              <p className="text-xl font-semibold m-0">
                {t('process:freeAudit.text')}
              </p>
            </div>
            <AuditForm />
          </div>

          <div className="flex flex-col justify-center gap-6">
            <Title title={t('process:labels.orReachMe')} variant="section" />
            <DirectContact
              callLabel={t('common:callMe')}
              emailLabel={t('common:emailMe')}
              linkedinLabel={t('common:linkedin')}
            />
          </div>
        </main>
      </SiteFrame>
    </TranslationsProvider>
  );
}
