'use client';

import { useTranslation } from 'react-i18next';
import { tw } from '@/helper/tw';
import { Section, SectionContainer } from './section';

const services = [
  'solutionArchitecture',
  'forwardDeployed',
  'softwareEngineering',
] as const;

export const Offerings = () => {
  const { t } = useTranslation();

  return (
    <div id="services" className="scroll-mt-40 w-full py-16 md:py-20">
      <Section>
        <SectionContainer className="flex-col gap-8">
          <div className="max-w-xl">
            <h2 className="m-0 text-4xl font-extrabold leading-none text-white">
              {t('home:servicesTitle')}
            </h2>
            <p className="m-0 mt-3 text-lg font-medium text-white/70">
              {t('home:servicesIntro')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service}
                className={tw(
                  'py-6 md:px-8 md:py-1',
                  index === 0 && 'pt-0 md:pl-0',
                  index === services.length - 1 && 'md:pr-0',
                  index > 0 &&
                    'border-t border-white/15 md:border-t-0 md:border-l',
                )}
              >
                <h3 className="m-0 text-xl font-extrabold leading-tight text-primary">
                  {t(`home:${service}.title`)}
                </h3>
                <p className="m-0 mt-3 text-lg font-medium leading-relaxed text-white/70">
                  {t(`home:${service}.text`)}
                </p>
              </div>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
};
