'use client';

import { useTranslation } from 'react-i18next';
import { LogoIcon } from '@/app/[locale]/decoration/logo-icon';
import { localePath } from '@/helper/locale-path';
import { tw } from '@/helper/tw';
import { ButtonLink } from './button-link';
import { Section, SectionContainer } from './section';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <Section className="not-prose max-sm:py-[20vw] flex flex-col items-center">
      <div
        className={tw(
          'flex',
          'items-center justify-center',
          'min-h-svh',
          'py-12',
          '-mb-[60px]',
          'lg:-mb-[145px]',
        )}
      >
        <SectionContainer>
          <LogoIcon
            className={tw(
              'absolute right-0 bottom-[-10%] w-[45%] h-auto z-[0] opacity-40',
              'max-md:w-[50%]',
            )}
          />

          <div className="relative z-10 pl-6 max-md:pl-0">
            <h1
              className={tw(
                'text-white',
                'text-[5rem]',
                'max-xl:text-[clamp(2.8rem,6vw,10rem)]',
                'leading-[1.1]',
                'font-extrabold',
              )}
            >
              {t('home:title')}
            </h1>

            <div className="flex flex-col gap-4 text-lg md:text-xl lg:text-[1.625rem] md:leading-10 py-12 font-semibold md:max-w-[75%]">
              <p className="m-0">{t('home:subtitle')}</p>
              <p className="m-0">{t('home:goal')}</p>
            </div>

            <div className="flex max-sm:flex-col max-sm:gap-4">
              <ButtonLink
                url={localePath(i18n.language, '/#contact')}
                text={t('home:discussChallenge')}
              />
              <ButtonLink
                url={localePath(i18n.language, '/#approach')}
                text={t('home:howWeWork')}
                className="bg-[#EB9A00]"
              />
            </div>
          </div>
        </SectionContainer>
      </div>
    </Section>
  );
};
