'use client';

import { useTranslation } from 'react-i18next';
import { processSteps } from '@/app/[locale]/process/steps';
import { localePath } from '@/helper/locale-path';
import { tw } from '@/helper/tw';
import { ButtonLink } from './button-link';
import { Card, Title } from './content';
import { DirectContact } from './direct-contact';

export function ProcessOnePager() {
  const { t, i18n } = useTranslation('process');

  return (
    <main
      className={tw(
        'not-prose',
        'relative',
        'px-[clamp(1rem,6vw,4rem)]',
        'pt-36',
        'pb-24',
        'max-w-[1100px]',
        'mx-auto',
        'flex',
        'flex-col',
        'gap-16',
      )}
    >
      <header className="flex flex-col gap-8">
        <div className="flex flex-col gap-6 max-w-3xl">
          <h1 className="text-white text-[clamp(2.8rem,6vw,5rem)] font-extrabold leading-none m-0">
            {t('page.title')}
          </h1>
          <p className="text-xl font-semibold m-0">{t('page.intro')}</p>
        </div>
        <nav className="flex flex-wrap items-center max-sm:flex-col max-sm:items-start">
          {processSteps.map((step) => (
            <ButtonLink
              key={step}
              url={`#${step}`}
              text={t(`steps.${step}.name`)}
            />
          ))}
        </nav>
      </header>

      {processSteps.map((step, index) => (
        <section
          key={step}
          id={step}
          className="scroll-mt-28 flex flex-col gap-6"
        >
          <div className="flex flex-col gap-4 max-w-3xl">
            <p className="font-extrabold text-primary m-0">
              {t('labels.stepOf', { current: index + 1 })}
            </p>
            <h2 className="text-white text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-none m-0">
              {t(`steps.${step}.name`)}
            </h2>
            <p className="text-xl font-semibold m-0">
              {t(`steps.${step}.promise`)}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <Title title={t('labels.whatHappens')} variant="widget" />
              <ul className="list-disc pl-5 flex flex-col gap-3 font-semibold text-[1.125rem] m-0">
                <li>{t(`steps.${step}.happens1`)}</li>
                <li>{t(`steps.${step}.happens2`)}</li>
                <li>{t(`steps.${step}.happens3`)}</li>
              </ul>
            </Card>
            <Card>
              <Title title={t('labels.youLeaveWith')} variant="widget" />
              <p className="font-semibold text-[1.125rem] m-0">
                {t(`steps.${step}.leaveWith`)}
              </p>
            </Card>
          </div>

          <p className="font-semibold m-0 max-w-3xl">
            {t(`steps.${step}.next`)}
          </p>
        </section>
      ))}

      <p className="font-semibold text-xl m-0 max-w-3xl">{t('page.loop')}</p>

      <div className="flex flex-col gap-8">
        <ButtonLink
          url={localePath(i18n.language, '/free-audit')}
          text={t('labels.freeAudit')}
          className="self-start"
        />
        <div>
          <Title
            title={t('labels.orReachMe')}
            variant="section"
            className="mb-6"
          />
          <DirectContact
            callLabel={t('common:callMe')}
            emailLabel={t('common:emailMe')}
            linkedinLabel={t('common:linkedin')}
          />
        </div>
      </div>
    </main>
  );
}
