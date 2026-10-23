'use client';

import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

const steps = ['understand', 'design', 'build', 'improve'] as const;

export const ProcessOverview = () => {
  const { t } = useTranslation();

  return (
    <div id="approach" className="scroll-mt-40 w-full">
      <Section>
        <SectionContainer className="max-md:px-6 flex-col">
          <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold m-0 leading-none">
              {t('home:approach.title')}
            </h2>
            <p className="font-semibold m-0">{t('home:approach.intro')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {steps.map((step) => (
              <Card key={step} className="h-full">
                <Title
                  preTitle={t(`home:approach.${step}.number`)}
                  title={t(`home:approach.${step}.title`)}
                  variant="widget-sm"
                />
                <p className="font-semibold m-0">
                  {t(`home:approach.${step}.text`)}
                </p>
              </Card>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
};
