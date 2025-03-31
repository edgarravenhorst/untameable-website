'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionContainer } from './section';

export const MissionStatement = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className='flex-col py-[10vh] text-center leading-tight'>
        <h2 className='font-extrabold text-white text-[3.125rem]'>
          {t('home:trulyHelpPeople')}
        </h2>

        <p className='text-[1.625rem] font-semibold leading-normal'>
          {t('home:byRemovingObstacles.firstPart')}
          <br className='max-md:hidden' />
          {t('home:byRemovingObstacles.secondPart')}
        </p>
      </SectionContainer>
    </Section>
  );
};
