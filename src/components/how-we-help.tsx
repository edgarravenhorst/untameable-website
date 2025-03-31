'use client';
import { useTranslation } from 'react-i18next';
import { Card, Title } from './content';
import { Section, SectionContainer } from './section';

type Props = {};

export const HowWeHelp = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Section>
      <SectionContainer className='flex-col'>
        <Title
          title={t('home:howWeCanHelpYou')}
          variant='section'
          className='mx-auto'
        />

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
          <Card>
            <Title
              title={t('home:webAndPlatformDevelopment.title')}
              variant='widget'
            />
            <p>{t('home:webAndPlatformDevelopment.text')}</p>
          </Card>
          <Card>
            <Title
              title={t('home:processOptimization.title')}
              variant='widget'
            />
            <p>{t('home:processOptimization.text')}</p>
          </Card>
          <Card>
            <Title
              title={t('home:iotAndOptimization.title')}
              variant='widget'
            />
            <p>{t('home:iotAndOptimization.text')}</p>
          </Card>
          <Card>
            <Title
              title={t('home:strategicInnovation.title')}
              variant='widget'
            />
            <p>{t('home:strategicInnovation.text')}</p>
          </Card>
          <div className='col-span-2 flex justify-center'>
            <Card className='w-1/2'>
              <Title
                title={t('home:1-on-1Coaching&Support.title')}
                variant='widget'
              />
              <p>{t('home:1-on-1Coaching&Support.text')}</p>
            </Card>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
