import { Headline } from '@/app/components/headline';
import { Logo } from '@/app/components/logo';
import { LogoIcon } from '@/app/decoration/logo-icon';
import { StripedOverlay } from '@/app/decoration/overlay-stripes';
import { Spotlight } from '@/app/decoration/spotlight';
import { tw } from '@/app/helper/tw';
import { Metadata } from 'next';

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
          <div className={tw('pt-[15vw] pb-[7vw]', 'max-w-screen-lg')}>
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
                    Developer Experience
                  </span>{' '}
                  and why it matters
                </>
              }
            />

            <div className='p-12 flex justify-center items-center gap-2'>
              <div className='rounded-full'>
                <svg
                  viewBox='0 0 512 512'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='var(--color-primary)'
                  width={40}
                  fillRule='evenodd'
                  clipRule='evenodd'
                  strokeLinejoin='round'
                  strokeMiterlimit='2'
                >
                  <path
                    d='M474.123 209.81c11.525-34.577 7.569-72.423-10.838-103.904-27.696-48.168-83.433-72.94-137.794-61.414a127.14 127.14 0 00-95.475-42.49c-55.564 0-104.936 35.781-122.139 88.593-35.781 7.397-66.574 29.76-84.637 61.414-27.868 48.167-21.503 108.72 15.826 150.007-11.525 34.578-7.569 72.424 10.838 103.733 27.696 48.34 83.433 73.111 137.966 61.585 24.084 27.18 58.833 42.835 95.303 42.663 55.564 0 104.936-35.782 122.139-88.594 35.782-7.397 66.574-29.76 84.465-61.413 28.04-48.168 21.676-108.722-15.654-150.008v-.172zm-39.567-87.218c11.01 19.267 15.139 41.803 11.354 63.65-.688-.516-2.064-1.204-2.924-1.72l-101.152-58.49a16.965 16.965 0 00-16.687 0L206.621 194.5v-50.232l97.883-56.597c45.587-26.32 103.732-10.666 130.052 34.921zm-227.935 104.42l49.888-28.9 49.887 28.9v57.63l-49.887 28.9-49.888-28.9v-57.63zm23.223-191.81c22.364 0 43.867 7.742 61.07 22.02-.688.344-2.064 1.204-3.097 1.72L186.666 117.26c-5.161 2.925-8.258 8.43-8.258 14.45v136.934l-43.523-25.116V130.333c0-52.64 42.491-95.13 95.131-95.302l-.172.172zM52.14 168.697c11.182-19.268 28.557-34.062 49.544-41.803V247.14c0 6.02 3.097 11.354 8.258 14.45l118.354 68.295-43.695 25.288-97.711-56.425c-45.415-26.32-61.07-84.465-34.75-130.052zm26.665 220.71c-11.182-19.095-15.139-41.802-11.354-63.65.688.516 2.064 1.204 2.924 1.72l101.152 58.49a16.965 16.965 0 0016.687 0l118.354-68.467v50.232l-97.883 56.425c-45.587 26.148-103.732 10.665-130.052-34.75h.172zm204.54 87.39c-22.192 0-43.867-7.741-60.898-22.02a62.439 62.439 0 003.097-1.72l101.152-58.317c5.16-2.924 8.429-8.43 8.257-14.45V243.527l43.523 25.116v113.022c0 52.64-42.663 95.303-95.131 95.303v-.172zM461.22 343.303c-11.182 19.267-28.729 34.061-49.544 41.63V264.687c0-6.021-3.097-11.526-8.257-14.45L284.893 181.77l43.523-25.116 97.883 56.424c45.587 26.32 61.07 84.466 34.75 130.053l.172.172z'
                    fill-rule='nonzero'
                  />
                </svg>
              </div>
              <p className='leading-none'>
                Written by: <strong>Chat GPT 4</strong>
              </p>
            </div>
          </div>

          <div className=' max-w-screen-md mx-auto'>
            <p className='lead text-white !mb-[7vw] text-center  italic'>
              In the ever-evolving landscape of technology, where the efficacy
              and speed of software development are paramount, the concept of
              Developer Experience (DX) has emerged as a critical factor in
              successful project execution. But what exactly is DX, and why does
              it hold such significance in the tech industry? Let&apos;s dive
              into the nuances of Developer Experience and uncover its
              importance.
            </p>

            <h3>Understanding Developer Experience (DX)</h3>
            <p>
              Developer Experience (DX) refers to the overall experience
              developers have while interacting with a software product or
              platform. It encompasses every aspect that can affect their
              satisfaction and productivity, including the ease of use,
              documentation quality, tooling, API design, and community support.
              In essence, DX is about making the life of developers easier,
              enabling them to be more efficient and effective in their work.
            </p>
            <h3>Key Components of DX</h3>

            <ul>
              <li>
                <p>
                  <strong>Ease of Setup:</strong>
                </p>
                <p>
                  Quick and straightforward setup processes allow developers to
                  start working on projects without unnecessary delays.
                </p>
              </li>
              <li>
                <p>
                  <strong>Quality Documentation:</strong>
                </p>
                <p>
                  Comprehensive, clear, and up-to-date documentation is crucial
                  for developers to understand and effectively use software
                  products.
                </p>
              </li>
              <li>
                <p>
                  <strong>API Design: </strong>
                </p>
                <p>
                  Intuitive and well-documented APIs are essential for
                  developers to easily interact with and build upon a platform.
                </p>
              </li>
              <li>
                <p>
                  <strong> Community Support: </strong>
                </p>
                <p>
                  A strong, active community can provide invaluable support,
                  resources, and networking opportunities for developers.
                </p>
              </li>
            </ul>

            <h3>Why Does DX Matter?</h3>
            <h4>For Developers</h4>
            <p>
              A positive DX can lead to increased productivity, as developers
              spend less time troubleshooting and more time focusing on creative
              solutions and innovation. It also boosts morale and job
              satisfaction, which are crucial for retaining top talent and
              fostering a collaborative and innovative work environment.
            </p>
            <h4>For Businesses</h4>
            <p>
              Investing in DX can have significant financial implications for
              businesses. By improving developer efficiency, companies can
              accelerate time-to-market for new features and products. Moreover,
              a strong DX can attract more developers to a platform, creating a
              larger ecosystem and driving innovation and growth.
            </p>
            <h4>For the Tech Industry</h4>
            <p>
              On a broader scale, DX plays a vital role in the advancement of
              the technology sector. By prioritizing the needs and experiences
              of developers, the industry can foster a more vibrant and
              competitive market, pushing the boundaries of what is possible
              with software.
            </p>
            <h3>Conclusion</h3>
            <p>
              Developer Experience is a multifaceted concept that directly
              impacts the efficiency, satisfaction, and retention of developers.
              By understanding and investing in DX, companies can not only
              improve their bottom line but also contribute to a more innovative
              and dynamic tech industry. As technology continues to advance at a
              rapid pace, the importance of DX will only grow, highlighting the
              need for a developer-centric approach in the design and
              development of software products.
            </p>
          </div>
        </article>
      </div>
    </main>
  );
}
