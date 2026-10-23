'use client';

import { useTranslation } from 'react-i18next';
import { tw } from '@/helper/tw';
import { Section, SectionContainer } from './section';

export const MissionStatement = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer
        className={tw('flex-col text-center leading-tight', 'max-md:px-0')}
      >
        <h2 className={tw('font-extrabold text-white text-3xl', 'md:text-4xl')}>
          {t('home:trulyHelpPeople')}
        </h2>

        <p
          className={tw('text-xl font-semibold leading-normal', 'md:text-2xl')}
        >
          {t('home:byRemovingObstacles.firstPart')}
          <br className="max-md:hidden" />
          {t('home:byRemovingObstacles.secondPart')}
        </p>
      </SectionContainer>
    </Section>
  );
};
