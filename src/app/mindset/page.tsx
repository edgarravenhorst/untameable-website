import { BlogApprover } from '@/app/components/blog-approval';
import { Headline } from '@/app/components/headline';
import { Logo } from '@/app/components/logo';
import { TLDR } from '@/app/components/tldr';
import { LogoIcon } from '@/app/decoration/logo-icon';
import { StripedOverlay } from '@/app/decoration/overlay-stripes';
import { Spotlight } from '@/app/decoration/spotlight';
import { tw } from '@/app/helper/tw';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

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

export default function BlogItem() {
  return (
    <main
      className={tw('relative', 'text-white', 'text-opacity-80', 'text-lg')}
    >
      <Spotlight
        className={tw(
          'top-[5%]',
          'lg:top-[-8%]',
          'translate-y-[-50%]',
          'sm:translate-y-[-50%]',
          'lg:translate-y-[-50%]',
          'xl:translate-y-[-60%]',
          'lg:hidden'
        )}
      />

      <Spotlight
        followMouse
        className={tw(
          'top-[5%]',
          'lg:top-[-8%]',
          'opacity-50',
          'hidden',
          'lg:block'
        )}
      />

      <LogoIcon
        className={tw(
          'absolute',
          'w-[50%]',
          'left-[50%]',
          'translate-x-[-50%]',
          'translate-y-[-10%]',
          'opacity-80'
        )}
      />

      <StripedOverlay />
      <div
        className={tw(
          'relative',
          'max-w-full',
          'flex',
          'flex-col',
          'items-center',
          'min-h-svh',
          'p-10'
        )}
      >
        <Logo />
        <article
          className={tw(
            'relative',
            'prose prose-invert prose-md md:prose-lg',
            'max-w-screen-lg'
          )}
        >
          <div className={tw('pt-[12vw] pb-[5vw]', 'max-w-screen-lg')}>
            <Headline
              className={tw(
                'text-[6vw]',
                'md:text-5xl',
                'lg:text-6xl',
                'xl:text-7xl',
                'whitespace-normal',
                'text-center',
                'text-balance'
              )}
              primary={
                <>
                  <span className='whitespace-nowrap'>
                    The Untameable mindset
                    <br /> for fast results
                    <br /> that are build to last
                  </span>
                </>
              }
            />

            <div className='p-12 flex justify-center items-center gap-10'>
              <p className=' text-center'>May 21, 2024</p>
              <div className='flex items-center gap-3'>
                <div className='rounded-full'>
                  <Image
                    src='/edgar.png'
                    alt='Avatar Edgar Ravenhorst'
                    width={45}
                    height={45}
                  />
                </div>
                <p className='leading-none'>
                  written by: <strong>Edgar Ravenhorst</strong>
                </p>
              </div>
            </div>

            <BlogApprover blogId={'8d436b4a-d3a6-4934-b93f-56e88a00b878'} />
          </div>

          <div className=' max-w-screen-md mx-auto'>
            <p>
              The Untameable Mindset is a development philosophy that drives our
              approach to building web applications. It&apos;s about agility,
              control, and practicality. Here&apos;s how we implement this
              mindset in our projects.
            </p>

            <TLDR>
              <p>This is a quick overview of the Untameable Mindset:</p>

              <ol>
                <li>Start small (MVP) and scale up as needed.</li>
                <li>Aim to get functional, user-ready features out quickly.</li>
                <li>Control through configuration rather than code</li>
                <li>Ensure code reviews don&apos;t become showstopper</li>
                <li>
                  Only write tests for critical parts of the application or
                  manual test cases that are time-consuming to test
                </li>
                <li>Automate repetitive tasks and focus on high-value work</li>
                <li>Ensure a stable, reliable, and secure environment for</li>
                <li>
                  Meet the clients needs and expectations, but push back to
                  ensure a successful project
                </li>
              </ol>
            </TLDR>

            <h3>What is Developer Experience (DX)</h3>
            <p>
              For people who write software, DX is about making the work for
              developers easier and more enjoyable. DX is similar to User
              Experience (UX), but it focuses on the experience of developers
              rather than end users. It&apos;s about improving the process
              creating software, so developers can get in their{' '}
              <Link
                target='_blank'
                href='https://en.wikipedia.org/wiki/Flow_(psychology)'
              >
                flow
              </Link>{' '}
              where they will be more productive or creative and deliver
              higher-quality products.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
