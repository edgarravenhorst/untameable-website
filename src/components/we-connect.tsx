'use client';
import {
  faArrowsToDot,
  faChartLine,
  faLightbulb,
} from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

type Props = {};

export const WeConnect = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className='flex-col'>
        <Title
          title={t('home:weConnectWith')}
          variant='section'
          className='mx-auto'
        />

        <div className='grid xl:grid-cols-3 gap-6'>
          <Card className='flex flex-col gap-6'>
            <div className='flex gap-6 items-center'>
              <FontAwesomeIcon
                icon={faChartLine}
                className='text-4xl md:text-6xl text-white'
              />
              <Title
                preTitle={t('home:growthAndEfficiency.subtitle')}
                title={t('home:growthAndEfficiency.title')}
                variant='widget-sm'
                className='mt-2'
              />
            </div>
            <p className='font-semibold'>
              {t('home:growthAndEfficiency.text')}
            </p>
          </Card>

          <Card className='flex flex-col gap-6'>
            <div className='flex gap-6 items-center'>
              <FontAwesomeIcon
                icon={faLightbulb}
                className='text-4xl md:text-6xl text-white'
              />
              <Title
                preTitle={t('home:innovativeIdeas.subtitle')}
                title={t('home:innovativeIdeas.title')}
                variant='widget-sm'
                className='mt-2'
              />
            </div>
            <p className='font-semibold'>{t('home:innovativeIdeas.text')} </p>
          </Card>

          <Card className='flex flex-col gap-6'>
            <div className='flex gap-6 items-center'>
              <FontAwesomeIcon
                icon={faArrowsToDot}
                className='text-4xl md:text-6xl text-white'
              />
              <Title
                preTitle={t('home:focusAndBalance.subtitle')}
                title={t('home:focusAndBalance.title')}
                variant='widget-sm'
                className='mt-2'
              />
            </div>
            <p className='font-semibold'>{t('home:focusAndBalance.text')}</p>
          </Card>
        </div>
      </SectionContainer>
    </Section>
  );
};
