'use client';
import { useTranslation } from 'react-i18next';
import { Section, SectionContainer } from './section';

const principles = ['simple', 'together', 'practice'] as const;

export const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full py-12 md:py-16">
      <Section>
        <SectionContainer className="flex-col">
          <div className="grid w-full items-start gap-8 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-16">
            <div className="max-w-sm">
              <h2 className="m-0 text-4xl font-extrabold leading-none text-white">
                {t('home:philosophy.title')}
              </h2>
              <p className="m-0 mt-4 text-base font-medium leading-relaxed text-white/70">
                {t('home:philosophy.intro')}
              </p>
            </div>

            <ol className="m-0 list-none p-0">
              {principles.map((principle, index) => (
                <li
                  key={principle}
                  className={
                    index === 0
                      ? 'm-0 pb-5'
                      : 'm-0 border-t border-white/15 py-5'
                  }
                >
                  <p className="m-0 text-sm font-semibold tracking-wide text-white/55">
                    {t(`home:philosophy.${principle}.number`)}
                  </p>
                  <h3 className="m-0 mt-1 text-lg font-extrabold leading-tight text-primary">
                    {t(`home:philosophy.${principle}.title`)}
                  </h3>
                  <p className="m-0 mt-2 text-sm font-medium leading-relaxed text-white/70">
                    {t(`home:philosophy.${principle}.text`)}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
};
