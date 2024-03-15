import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FullScreenContainer } from './components/fullscreen-container';
import { Headline } from './components/headline';
import { Logo } from './components/logo';
import { TLDR } from './components/tldr';
import { Divider } from './decoration/divider';
import { LogoIcon } from './decoration/logo-icon';
import { StripedOverlay } from './decoration/overlay-stripes';
import { Spotlight } from './decoration/spotlight';
import { tw } from './helper/tw';

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
        className={tw(
          'top-[5%]',
          'lg:top-[-8%]',
          'translate-y-[-50%]',
          'sm:translate-y-[-50%]',
          'lg:translate-y-[-50%]',
          'xl:translate-y-[-60%]'
        )}
      />

      <Spotlight className={tw('top-[35%]', 'left-[75vw]', 'sm:hidden')} />
      <Spotlight className={tw('top-[70%]', 'left-[-10%]')} />

      <Spotlight
        followMouse
        className={tw('opacity-50', 'hidden', 'lg:block')}
      />

      <LogoIcon
        className={tw(
          'absolute',
          'w-[50%]',
          'left-[50%]',
          'translate-x-[-50%]',
          'translate-y-[-10%]'
        )}
      />

      <StripedOverlay />
      <article
        className={tw(
          'prose prose-invert',
          'prose-md',
          'md:prose-xl',
          'max-w-full'
        )}
      >
        <FullScreenContainer>
          <Logo className='w-[40vw]' />
          <Headline primary={'Have digital,'} secondary={'work for you'} />
          <div className='text-center pb-8'>
            <h2 className='!text-lg md:!text-xl text-balance'>
              Elevating user and developer experiences in software application
              development.
            </h2>
            <TLDR className='!mb-0'>Software Development</TLDR>
          </div>
        </FullScreenContainer>
        <div
          className={tw(
            'relative',
            'flex',
            'flex-col',
            'items-center',
            'text-center',
            'gap-24',
            '-mt-16',
            'p-8'
          )}
        >
          <Divider orientation='vertical' className={'h-10'} />
          <div className={'max-w-screen-lg'}>
            <h2 className='!mt-0'>Reliable partner</h2>
            <p>
              A reliable partner that is focused on developing and improving
              your software. Knowledge, time and effort will be provided to
              support you in developing great user and developer experiences.
              Ideas are rapidly advanced into functional prototypes, ensuring
              swift realization of innovative concepts.
            </p>
            <TLDR className='!mb-0'>
              Reliable partner for software development
            </TLDR>
          </div>

          <Divider orientation='vertical' className={'h-10'} />

          <div
            className={tw(
              'flex',
              'flex-col',
              'gap-10',
              'items-center',
              'justify-center',
              'md:flex-row',
              'max-w-screen-lg'
            )}
          >
            <Image
              src='/edgar.png'
              alt='Edgar Ravenhorst'
              width={400}
              height={400}
              className={tw(
                'w-[66%]',
                'sm:w-[40%]',
                'h-full',
                'max-w-400',
                'not-prose'
              )}
            />
            <div className={tw('md:text-left')}>
              <h2 className='!mt-0'>About Untameable.</h2>
              <p>
                Meet Edgar Ravenhorst a.k.a. me—a full-stack web developer
                characterized by its warm approachability, big hearth, funny
                nose and a great deal of experience, ready to face the tough
                challenges head-on. Untameable is about ensuring you have a
                pleasant and fun time doing things you generally don&apos;t like
                to do.
              </p>
              <TLDR className='!mb-0'>
                Develop software to make things more pleasant to work with
              </TLDR>
            </div>
          </div>

          <Divider orientation='vertical' className={'h-10'} />

          <div className={'max-w-screen-lg'}>
            <h2 className='!mt-0'>Mission</h2>
            <p className='paragraph'>
              The mission is simple: <br />
              <strong>Improve user and developer experiences.</strong>
            </p>
            <p>
              The goal is to develop digital products that are more pleasant to
              work with. This can be achieved by focusing on the user interface{' '}
              <strong>(UI)</strong>, user experience <strong>(UX)</strong>, and
              the developer experience <strong>(DX)</strong>.
            </p>
            <p className='paragraph'>
              Why DX? Improving developer experience can lead to
              better-designed, more efficient, and higher-quality products,
              which can positively impact user experience. When developers have
              access to user-friendly tools, clear documentation, and efficient
              workflows, they are better equipped to create products that meet
              user needs and expectations.
            </p>
            <TLDR className='!mb-0'>
              Develop software that is pleasant to work with for both users and
              developers.
            </TLDR>
          </div>

          {/* <Divider orientation='vertical' className={'h-10'} /> */}
          <div
            className={tw('max-w-screen-lg', 'h-10', 'hidden', 'md:block')}
          />

          <div className={'max-w-screen-lg'}>
            <Headline primary='Coffee time!' className={'mb-16'} />

            <p className={'mb-16'}>
              Got questions or interested in exploring a partnership?{' '}
              <br className='hidden sm:block' />
              Reach out and let&apos;s discover how to become Untameable
            </p>

            <h4>
              Give a call:{' '}
              <Link href={'tel:+31627311410'}>+31 627 311 410</Link>
            </h4>
            <h4>
              Send an email:{' '}
              <Link href={'mailto:info@untameable.io'}>info@untameable.io</Link>
            </h4>
            <h4>
              <span className='inline-block gutterBottom'>
                Connect on social media:
              </span>
              <br />
              <Link href={'https://www.linkedin.com/company/untameable'}>
                LinkedIn
              </Link>
            </h4>
          </div>
        </div>
      </article>

      <div className={'flex justify-end'}>
        <LogoIcon
          className={tw(
            'fill-[#0A0E14]',
            'w-[40vw]',
            'h-[50vw]',
            '-mt-[35vw]',
            'opacity-40'
          )}
        />
      </div>
    </main>
  );
}
