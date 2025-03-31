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
    <Section>
      <div
        className={tw(
          'flex',
          'items-center',
          'max-lg:pt-40',
          'py-56',
          'lg:min-h-dvh',
          'lg:-mb-[100px]',
          'max-md:pb-12',
          'max-md:pt-[125px]'
        )}
      >
        <SectionContainer className={tw('gap-x-20', 'max-md:px-6')}>
          <LogoIcon
            className={
              'absolute right-0 bottom-[8%] w-[55%] h-auto z-[0] opacity-40'
            }
          />

          <div className='relative z-10 pl-6 max-md:pl-0'>
            <h1
              className={tw(
                'text-white',
                'text-[7.4rem]',
                'max-xl:text-[clamp(2.8rem,6vw,7.4rem)]',
                'leading-none',
                'font-extrabold',
                'mb-2'
              )}
            >
              {t('home:title')}
            </h1>

            <p className='text-lg md:text-xl lg:text-[1.625rem] md:leading-10 py-5 xl:py-10 font-semibold'>
              {t('home:subtitle')}
            </p>
          </div>
          <div className='pr-6'>
            <div className='h-full  pb-10'>
              <div className='h-full flex flex-col justify-end  gap-5 min-w-[250px]'>
                <ButtonLink
                  url='/mindset'
                  text={t('home:discoverOurMindset')}
                />
                <ButtonLink
                  url='/cases'
                  text={t('home:readExampleCases')}
                  className={'translate-x-[15px]'}
                />
                <ButtonLink url='#contact-us' text={t('home:connectWithUs')} />
              </div>
            </div>
          </div>
        </SectionContainer>
      </div>
    </Section>
  );
};
