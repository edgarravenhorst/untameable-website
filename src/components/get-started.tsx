'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';
import { localePath } from '@/helper/locale-path';
import { ButtonLink } from './button-link';
import { Section, SectionContainer } from './section';

const PHONE_HREF = 'tel:+31627311410';
const PHONE_LABEL = '+31 627 311 410';
const EMAIL = 'info@untameable.io';
const LINKEDIN = 'https://www.linkedin.com/company/untameable/';

export const Contact = () => {
  const { t, i18n } = useTranslation();

  return (
    <div id="contact" className="scroll-mt-40 w-full py-16 md:py-24 lg:py-32 xl:py-40">
      <Section>
        <SectionContainer className="flex-col">
          <div className="grid w-full items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-x-16">
            <div className="flex flex-col gap-5 lg:gap-8">
              <h2 className="m-0 text-4xl font-extrabold leading-none text-white lg:text-[clamp(3.25rem,5.5vw,5rem)] lg:leading-[1.1]">
                {t('home:contact.title')}
              </h2>
              <p className="m-0 max-w-lg text-base font-medium leading-relaxed text-white/70 lg:text-[1.625rem] lg:font-semibold lg:leading-snug lg:text-white/90">
                {t('home:contact.text')}
              </p>
              <ButtonLink
                url={localePath(i18n.language, '/free-audit')}
                text={t('home:contact.cta')}
                className="mt-2 self-start lg:mt-4"
              />
            </div>

            <div
              className="flex min-w-0 items-start gap-6 lg:items-center lg:gap-10 lg:border-l lg:border-white/15 lg:pl-14"
            >
              <Image
                src="/edgar.png"
                alt="Edgar Ravenhorst"
                className="aspect-square w-24 shrink-0 rounded-full object-cover md:w-36 lg:w-52"
                width={208}
                height={208}
              />
              <div>
                <p className="m-0 text-lg font-bold leading-tight text-white lg:text-2xl">
                  {t('home:about.name')}
                </p>
                <p className="m-0 mt-1 text-sm font-medium leading-snug text-white/55 lg:text-base lg:text-pretty">
                  {t('home:about.role')}
                </p>
                <div className="mt-5 flex flex-col gap-2.5 text-sm font-semibold lg:mt-6 lg:gap-3 lg:text-base">
                  <Link
                    href={PHONE_HREF}
                    className="inline-flex items-center gap-2.5 text-white/90 no-underline"
                  >
                    <FiPhone
                      className="shrink-0 text-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    {PHONE_LABEL}
                  </Link>
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2.5 text-white/90 no-underline"
                  >
                    <FiMail
                      className="shrink-0 text-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    {EMAIL}
                  </Link>
                  <Link
                    href={LINKEDIN}
                    className="inline-flex items-center gap-2.5 text-white/90 no-underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin
                      className="shrink-0 text-primary"
                      size={16}
                      aria-hidden="true"
                    />
                    {t('common:linkedin')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>
    </div>
  );
};
