'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { localePath } from '@/helper/locale-path';
import { tw } from '@/helper/tw';
import { ButtonLink } from './button-link';
import { Title } from './content';
import { DirectContact } from './direct-contact';
import { Section, SectionContainer } from './section';

export const GetStarted = () => {
  const { t, i18n } = useTranslation();
  return (
    <Section className="not-prose flex justify-center items-center min-h-[80vh] py-0">
      <SectionContainer className={tw('gap-24', 'max-md:gap-0 max-md:px-0')}>
        <div
          className={tw(
            'flex flex-col gap-20 w-full max-w-[400px]',
            'max-md:gap-[2rem] max-md:mx-auto',
          )}
        >
          <Image
            src="/edgar.png"
            alt="Edgar Ravenhorst"
            className="w-full h-auto aspect-square max-sm:w-[66vw] mx-auto"
            width={384}
            height={384}
          />
          <div className="px-3">
            <Title
              title={t('home:shortIntroduction.title')}
              variant="section"
              className="mb-6 leading-none"
            />
            <p className="leading-normal font-semibold ">
              {t('home:shortIntroduction.text')}
            </p>
          </div>
        </div>

        <div
          id="get-started"
          className={tw('flex flex-col gap-20', 'max-md:gap-0')}
        >
          <div className="min-h-[400px] max-sm:min-h-[300px] flex flex-col justify-center">
            <Title title={t('home:getStarted.title')} variant="hero-sm" />
            <p
              className={tw(
                'font-semibold text-2xl w-2/3 leading-normal mt-6',
                'max-md:w-full max-md:text-[1.3rem]',
              )}
            >
              {t('home:getStarted.text')}
            </p>
            <ButtonLink
              url={localePath(i18n.language, '/free-audit')}
              text={t('home:freeAudit')}
              className="mt-8 self-start"
            />
          </div>
          <div>
            <DirectContact
              callLabel={t('common:callMe')}
              emailLabel={t('common:emailMe')}
              linkedinLabel={t('common:linkedin')}
            />
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
