'use client';

import { useTranslation } from 'react-i18next';
import { tw } from '@/helper/tw';
import { Section, SectionContainer } from './section';

const steps = ['understand', 'design', 'build', 'improve'] as const;

export const ProcessOverview = () => {
  const { t } = useTranslation();

  return (
    <div id="approach" className="scroll-mt-40 w-full py-16 md:py-20">
      <Section>
        <SectionContainer className="flex-col gap-8">
          <div className="max-w-xl">
            <h2 className="m-0 text-4xl font-extrabold leading-none text-white">
              {t('home:approach.title')}
            </h2>
            <p className="m-0 mt-3 text-lg font-medium text-white/70">
              {t('home:approach.intro')}
            </p>
          </div>

          <ol className="m-0 grid list-none grid-cols-1 gap-0 p-0 lg:grid-cols-4 lg:gap-8">
            {steps.map((step, index) => (
              <li
                key={step}
                className={tw(
                  'relative m-0 border-l border-primary/40 py-1 pl-5',
                  'lg:border-l-0 lg:py-0 lg:pl-0',
                )}
              >
                <div className="relative mb-3 h-6 lg:mb-4">
                  <p className="m-0 text-base font-semibold leading-none tracking-wide text-white/75">
                    {t(`home:approach.${step}.number`)}
                  </p>
                  {index < steps.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="absolute top-1/2 left-[2.6rem] hidden h-px w-[calc(100%-1.4rem)] -translate-y-1/2 bg-primary lg:block"
                    />
                  )}
                </div>
                <h3 className="m-0 mt-3 text-xl font-extrabold leading-tight text-primary">
                  {t(`home:approach.${step}.title`)}
                </h3>
                <p className="m-0 mt-2 text-lg font-medium leading-relaxed text-white/70">
                  {t(`home:approach.${step}.text`)}
                </p>
              </li>
            ))}
          </ol>
        </SectionContainer>
      </Section>
    </div>
  );
};
