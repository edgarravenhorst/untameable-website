'use client';

import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

const services = [
  'solutionArchitecture',
  'forwardDeployed',
  'softwareEngineering',
] as const;

export const Offerings = () => {
  const { t } = useTranslation();

  return (
    <Section>
      <SectionContainer className="max-md:px-6 flex-col">
        <Title
          title={t('home:servicesTitle')}
          variant="section"
          className="mx-auto"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service}>
              <Title title={t(`home:${service}.title`)} variant="widget-sm" />
              <p className="font-semibold m-0">{t(`home:${service}.text`)}</p>
            </Card>
          ))}
        </div>
      </SectionContainer>
    </Section>
  );
};
