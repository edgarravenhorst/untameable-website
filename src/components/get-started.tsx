'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { FaLinkedin } from 'react-icons/fa';
import { Title } from './content';
import { Section, SectionContainer } from './section';

type Props = {};

export const GetStarted = (props: Props) => {
  const { t } = useTranslation();
  return (
    <Section
      id='get-started'
      className='not-prose flex justify-center items-center min-h-[80vh] py-0'
    >
      <SectionContainer className='gap-24'>
        <div className='flex flex-col gap-20 w-full max-w-[400px]'>
          <Image
            src='/edgar.png'
            alt='Edgar Ravenhorst'
            className='w-full h-auto aspect-square'
            width={384}
            height={384}
          />
          <div className='px-3'>
            <Title
              title={t('home:shortIntroduction.title')}
              variant='section'
              className='mb-6 leading-none'
            />
            <p className='leading-normal font-semibold '>
              {t('home:shortIntroduction.text')}
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-20 '>
          <div className='min-h-[400px] flex flex-col justify-center'>
            <Title title={t('home:getStarted.title')} variant='hero-sm' />
            <p className='font-semibold text-2xl w-2/3 leading-normal mt-6'>
              {t('home:getStarted.text')}
            </p>
          </div>
          <div>
            <Title
              title={t('home:contactUs.title')}
              variant='section'
              className=' mb-6 leading-none'
            />
            <div className='font-bold text-white flex flex-col gap-6'>
              <p className='leading-none'>
                {t('home:contactUs.callUs')}{' '}
                <Link href={'tel:+31627311410'} className='text-primary'>
                  +31 627 311 410
                </Link>
              </p>

              <p className='leading-none'>
                {t('home:contactUs.emailUs')}{' '}
                <Link
                  className='text-primary'
                  href={'mailto:info@untameable.io'}
                >
                  info@untameable.io
                </Link>
              </p>

              <p className='leading-none'>
                {t('home:contactUs.connectWithUs')}
              </p>

              <Link
                href='https://www.linkedin.com/company/untameable/'
                className='text-primary'
              >
                <FaLinkedin size={31.5} />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>
    </Section>
  );
};
