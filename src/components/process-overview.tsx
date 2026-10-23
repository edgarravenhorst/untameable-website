'use client';

import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { processSteps } from '@/app/[locale]/process/steps';
import { localePath } from '@/helper/locale-path';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

export const ProcessOverview = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="process" className="scroll-mt-28 w-full">
      <Section>
        <SectionContainer className="max-md:px-6 flex-col">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold m-0 leading-none">
              {t('home:process.title')}
            </h2>
            <p className="font-semibold m-0">{t('home:process.intro')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {processSteps.map((step) => (
              <Link
                key={step}
                href={localePath(i18n.language, `/process#${step}`)}
                className="no-underline text-current hover:text-current"
              >
                <Card className="h-full">
                  <Title
                    title={t(`home:process.${step}.title`)}
                    variant="widget-sm"
                  />
                  <p className="font-semibold m-0">
                    {t(`home:process.${step}.text`)}
                  </p>
                  <span className="text-primary font-bold mt-auto">
                    {t('home:process.readStep')}
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <p className="font-semibold text-center m-0 max-w-3xl mx-auto">
            {t('home:process.loop')}
          </p>
        </SectionContainer>
      </Section>
    </div>
  );
};
