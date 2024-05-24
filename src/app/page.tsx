import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FullScreenContainer } from './components/fullscreen-container';
import { Headline } from './components/headline';
import { Logo } from './components/logo';
import { Divider } from './decoration/divider';
import { LogoIcon } from './decoration/logo-icon';
import { StripedOverlay } from './decoration/overlay-stripes';
import { Spotlight } from './decoration/spotlight';
import { tw } from './helper/tw';

export const metadata: Metadata = {
  title: 'Untameable - Elevate user & developer experiences',
  description:
    'A reliable partner for elevating user and developer experiences in software application development.',
  openGraph: {
    title: 'Untameable - Elevate user & developer experiences',
    description:
      'A reliable partner for elevating user and developer experiences in software application development.',
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
          <Headline
            primary={'Have digital,'}
            secondary={'work for you'}
            className={tw(
              'max-w-lg',
              'max-w-[500px]',
              'md:max-w-[600px]',
              'lg:max-w-[800px]',
              'xl:max-w-[1100px]'
            )}
          />

          <div className='text-center pb-8'>
            <h2 className='!text-lg md:!text-xl text-balance'>
              Elevating user and developer experiences in software application
              development.
            </h2>
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
            <h2 className='!mt-0'>Clear vision on Software Development</h2>
            <p>
              Learn about the Untameable Mindset, our approach to fast,
              efficient, and high-quality software development for developers,
              product owners, designers, and managers. Discover how we align
              every team member to turn ideas into reality quickly and
              effectively.
            </p>

            <Link
              href='/mindset'
              className='inline-block no-underline bg-[--color-primary] text-[--background] font-bold py-1 px-4 rounded'
            >
              Read The Untameable Mindset
            </Link>
          </div>
          <Divider orientation='vertical' className={'h-10'} />
          <div className={'max-w-screen-lg'}>
            <h2 className='!mt-0'>Reliable partner</h2>
            <p>
              A reliable partner that is focused on software development.
              Knowledge, time and effort is provided to develop software that
              works for your end-user. Untameable is an extension of your team
              to make sure that software is developed in a way that is agile,
              maintainable and scalable.
            </p>
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
              (UI), user experience (UX), and the developer experience (DX).
            </p>
            <p className='paragraph'>
              Why DX? Improving developer experience can lead to
              better-designed, more efficient, and higher-quality products,
              which can positively impact user experience. When developers have
              access to user-friendly tools, clear documentation, and efficient
              workflows, they are better equipped to create products that meet
              user needs and expectations.
            </p>

            <Link href='/mindset/prioritize-needs-of-the-end-user-and-future-developer/'>
              Read more about the importance of User and Developer Experience
            </Link>
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
