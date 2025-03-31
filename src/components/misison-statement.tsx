'use client';

import { useTranslation } from 'react-i18next';
import { Section, SectionContainer } from './section';
import { tw } from '@/helper/tw';

export const MissionStatement = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className={tw('flex-col py-[10vh] text-center leading-tight', 'max-md:py-0 max-md:px-0')}>
        <h2 className={tw('font-extrabold text-white text-[3.125rem]', 'max-md:text-[2.8rem]')}>	
          {t('home:trulyHelpPeople')}
        </h2>

        <p className={tw('text-[1.625rem] font-semibold leading-normal', 'max-md:text-[1.3rem]')}>
          {t('home:byRemovingObstacles.firstPart')}
          <br className='max-md:hidden' />
          {t('home:byRemovingObstacles.secondPart')}
        </p>
      </SectionContainer>
    </Section>
  );
};
