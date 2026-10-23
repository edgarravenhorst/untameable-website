'use client';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { localePath } from '@/helper/locale-path';
import { tw } from '@/helper/tw';
import { ButtonLink } from './button-link';
import { Title } from './content';
import { DirectContact } from './direct-contact';
import { Section, SectionContainer } from './section';

export const About = () => {
  const { t } = useTranslation();
  const paragraphs = t('home:about.paragraphs', {
    returnObjects: true,
  }) as string[];

  return (
    <div id="about" className="scroll-mt-40 w-full">
      <Section className="not-prose flex justify-center items-center">
        <SectionContainer
          className={tw('gap-16 items-center max-lg:flex-col', 'max-md:px-0')}
        >
          <Image
            src="/edgar.png"
            alt="Edgar Ravenhorst"
            className="w-full h-auto aspect-square max-w-[400px] max-sm:w-[66vw] mx-auto"
            width={384}
            height={384}
          />
          <div className="flex flex-col gap-4 min-w-0">
            <h2 className="text-white text-4xl md:text-5xl font-extrabold m-0 leading-none">
              {t('home:about.title')}
            </h2>
            {paragraphs.map((paragraph) => (
              <p key={paragraph} className="leading-normal font-semibold m-0">
                {paragraph}
              </p>
            ))}
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
};

export const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className="scroll-mt-40 w-full">
      <Section className="not-prose flex justify-center items-center">
        <SectionContainer className="max-md:px-0 flex-col gap-10">
          <div className="flex flex-col gap-6 max-w-3xl">
            <Title title={t('home:contact.title')} variant="hero-sm" />
            <p
              className={tw(
                'font-semibold text-2xl leading-normal m-0',
                'max-md:text-[1.3rem]',
              )}
            >
              {t('home:contact.text')}
            </p>
            <ButtonLink
              url={localePath(i18n.language, '/free-audit')}
              text={t('home:contact.cta')}
              className="self-start"
            />
          </div>
          <DirectContact
            callLabel={t('common:callMe')}
            emailLabel={t('common:emailMe')}
            linkedinLabel={t('common:linkedin')}
          />
        </SectionContainer>
      </Section>
    </div>
  );
};
