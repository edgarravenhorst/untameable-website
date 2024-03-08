import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FullScreenContainer } from './components/fullscreen-container';
import { Headline } from './components/headline';
import { Box } from './components/helpers';
import { Logo } from './components/logo';
import { TLDR } from './components/tldr';
import { Divider } from './decoration/divider';
import { LogoIcon } from './decoration/logo-icon';
import { OverlayStripes } from './decoration/overlay-stripes';
import { Spotlight } from './decoration/spotlight';
import { twStyled } from './helper/tw-styled';

export const metadata: Metadata = {
  title: 'Untameable - User & Developer experiences',
  description:
    'Build great Developer and User Experiences for digital products',
  openGraph: {
    title: 'Untameable - User & Developer experiences',
    description:
      'Build great Developer and User Experiences for digital products',
    type: 'website',
    url: 'https://untameable.io',
    locale: 'en_US',
  },
};

export default function Home() {
  return (
    <main className='relative text-white text-opacity-80 text-lg'>
      <Spotlight
        className={[
          'top-0',
          'lg:top-[-8%]',
          'translate-y-[-50%]',
          'sm:translate-y-[-50%]',
          'lg:translate-y-[-50%]',
          'xl:translate-y-[-60%]',
        ]}
      />

      <Spotlight className={['top-[35%]', 'left-[75vw]', 'sm:hidden']} />
      <Spotlight className={['top-[70%]', 'left-[-10%]']} />

      <LogoIcon
        className={[
          'absolute',
          'w-[50%]',
          'left-[50%]',
          'translate-x-[-50%]',
          'translate-y-[-10%]',
        ]}
      />

      <OverlayStripes />
      <FullScreenContainer>
        <Logo className='w-[40vw]' />
        <Headline primary={'Have digital,'} secondary={'work for you'} />
        <div className='pb-8 text-center'>
          <h2 className='text-white text-1xl md:text-xl font-extrabold gutterBottom'>
            Build great Developer and User Experiences for online applicatons.
          </h2>
          <TLDR>Software Development</TLDR>
        </div>
      </FullScreenContainer>
      <Box
        className={[
          'relative',
          'flex',
          'flex-col',
          'items-center',
          'text-center',
          'gap-24',
          '-mt-16',
          'p-8',
        ]}
      >
        <Divider orientation='vertical' className={'h-10'} />
        <Box className={'max-w-screen-lg'}>
          <Title3>Reliable partner</Title3>
          <p className='gutterBottom'>
            A reliable partner that is focused on developing and improving your
            software. Knowledge, time and effort will be provided to support you
            in developing great user and developer experiences. Ideas are
            rapidly advanced into functional prototypes, ensuring swift
            realization of innovative concepts.
          </p>
          <TLDR>Reliable partner for software development</TLDR>
        </Box>

        <Divider orientation='vertical' className={'h-10'} />

        <Box
          className={[
            'flex',
            'flex-col',
            'gap-10',
            'items-center',
            'justify-center',
            'md:flex-row',
            'max-w-screen-lg',
          ]}
        >
          <Image
            src='/edgar.png'
            alt='Edgar Ravenhorst'
            width={400}
            height={400}
            className='w-[66%] sm:w-[40%] h-full max-w-400'
          />
          <Box className={['md:text-left']}>
            <Title3>About Untameable.</Title3>
            <p className='gutterBottom'>
              Meet Edgar Ravenhorst a.k.a. me—a full-stack web developer
              characterized by its warm approachability, big hearth, funny nose
              and a great deal of experience, ready to face the tough challenges
              head-on. Untameable is about ensuring you have a pleasant and fun
              time doing things you generally don&apos;t like to do.
            </p>
            <TLDR>
              Develop software to make things more pleasant to work with
            </TLDR>
          </Box>
        </Box>

        <Divider orientation='vertical' className={'h-10'} />

        <Box className={'max-w-screen-lg'}>
          <Title3>Mission</Title3>
          <p className='paragraph'>
            The mission is simple: <br />
            <strong className='text-white text-opacity-100'>
              Improve user and developer experiences.
            </strong>
          </p>
          <p className='gutterBottom'>
            The goal is to make digital products more pleasant to work with by
            improving the user and developer experience. This can be achieved by
            focusing on the user interface, user experience, and the developer
            experience.
          </p>
          <p className='paragraph'>
            Why DX? Improving developer experience can lead to better-designed,
            more efficient, and higher-quality products, which can positively
            impact user experience. When developers have access to user-friendly
            tools, clear documentation, and efficient workflows, they are better
            equipped to create products that meet user needs and expectations.
          </p>

          <p className='gutterBottom'>
            The aim is to simplify and enrich lives through intuitive digital
            solutions
          </p>
          <TLDR>
            Develop software to make things more pleasant to work with
          </TLDR>
        </Box>

        {/* <Divider orientation='vertical' className={'h-10'} /> */}
        <Box className={'max-w-screen-lg h-10 hidden md:block'} />

        <Box className={'max-w-screen-md'}>
          <Headline primary='Coffee time!' className={'mb-16'} />

          <p className={'mb-16'}>
            Got questions or interested in exploring a partnership?
            <br className='hidden sm:block' /> Reach out and let&apos;s discover
            how to become Untameable
          </p>

          <h4 className='text-white font-bold gutterBottom'>
            Give a call: <Link href={'tel:+31627311410'}>+31 627 311 410</Link>
          </h4>
          <h4 className='text-white font-bold gutterBottom'>
            Send an email:{' '}
            <Link href={'mailto:info@untameable.io'}>info@untameable.io</Link>
          </h4>
          <h4 className='text-white font-bold gutterBottom'>
            <span className='inline-block gutterBottom'>
              Connect on social media:
            </span>
            <br />
            <Link href={'https://www.linkedin.com/company/untameable'}>
              LinkedIn
            </Link>
          </h4>
        </Box>
      </Box>
      <Box className={'flex justify-end'}>
        <LogoIcon
          className={'fill-[#0A0E14] w-[40vw] h-[50vw] -mt-[35vw] opacity-40'}
        />
      </Box>
    </main>
  );
}

const Title3 = twStyled('h3')(
  'text-white',
  'text-2xl',
  'md:text-4xl',
  'font-extrabold',
  'mb-8'
);
