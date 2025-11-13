'use client';
import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

type Props = {};

export const Services = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className='max-md:px-6 flex-col'>
        <Title
          title={t('home:weAimTo')}
          variant='section'
          className='mx-auto'
        />
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
          <Card>
            <Title title={t('home:whatWorks.title')} variant='widget-sm' />
            <p className='font-semibold'>{t('home:whatWorks.text')}</p>
          </Card>

          <Card>
            <Title title={t('home:weCollaborate.title')} variant='widget-sm' />
            <p className='font-semibold'>{t('home:weCollaborate.text')}</p>
          </Card>

          <Card>
            <Title title={t('home:weSolve.title')} variant='widget-sm' />
            <p className='font-semibold'>{t('home:weSolve.text')}</p>
          </Card>

          <Card>
            <Title title={t('home:weDeliver.title')} variant='widget-sm' />
            <p className='font-semibold'>{t('home:weDeliver.text')}</p>
          </Card>
        </div>
      </SectionContainer>
    </Section>
  );
};
