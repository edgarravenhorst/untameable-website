'use client';
import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

const principles = ['simple', 'together', 'practice'] as const;

export const Services = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className="max-md:px-6 flex-col">
        <div className="flex flex-col gap-4 text-center max-w-3xl mx-auto">
          <h2 className="text-white text-4xl md:text-5xl font-extrabold m-0 leading-none">
            {t('home:philosophy.title')}
          </h2>
          <p className="font-semibold m-0">{t('home:philosophy.intro')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((principle) => (
            <Card key={principle}>
              <Title
                preTitle={t(`home:philosophy.${principle}.number`)}
                title={t(`home:philosophy.${principle}.title`)}
                variant="widget-sm"
              />
              <p className="font-semibold m-0">
                {t(`home:philosophy.${principle}.text`)}
              </p>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
};
