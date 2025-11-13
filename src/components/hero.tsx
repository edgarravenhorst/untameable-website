'use client';
import { LogoIcon } from '@/app/[locale]/decoration/logo-icon';
import { tw } from '@/helper/tw';
import { useTranslation } from 'react-i18next';
import { ButtonLink } from './button-link';
import { Section, SectionContainer } from './section';

type Props = {};

export const Hero = (props: Props) => {
  const { t } = useTranslation();

  return (
    <Section className='not-prose max-sm:py-[20vw]'>
      <div
        className={tw(
          'flex',
          'items-center justify-center',
          'min-h-svh',
          'py-12',
          '-mb-[60px]',
          'lg:-mb-[145px]'
        )}
      >
        <SectionContainer>
          <LogoIcon
            className={tw(
              'absolute right-0 bottom-[-10%] w-[45%] h-auto z-[0] opacity-40',
              'max-md:w-[50%]'
            )}
          />

          <div className='relative z-10 pl-6 max-md:pl-0'>
            <h1
              className={tw(
                'text-white',
                'text-[5rem]',
                'max-xl:text-[clamp(2.8rem,6vw,10rem)]',
                'leading-[1.1]',
                'font-extrabold'
              )}
            >
              {t('home:title')}
            </h1>

            <h2 className='text-lg md:text-xl lg:text-[1.625rem] md:leading-10 py-12 font-semibold md:max-w-[75%]'>
              {t('home:subtitle')}
            </h2>

            <div className='flex max-sm:flex-col max-sm:gap-4'>
              <ButtonLink
                url='/mindset'
                text={t('home:discoverOurMindset')}
                className='bg-[#EB9A00] max-sm:ml-auto'
              />
              {/* <ButtonLink url='/cases' text={t('home:readExampleCases')} /> */}
              <ButtonLink
                url='#get-started'
                text={t('home:connectWithUs')}
                className='  max-sm:ml-auto'
              />
            </div>
          </div>
        </SectionContainer>
      </div>
    </Section>
  );
};
