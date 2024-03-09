import { Headline } from '@/app/components/headline';
import { Logo } from '@/app/components/logo';
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
          'xl:translate-y-[-60%]'
        )}
      />

      <Spotlight
        followMouse
        className={tw('opacity-50', 'hidden', 'lg:block')}
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
            'prose prose-invert prose-xl',
            'max-w-screen-xl'
          )}
        >
          <div className='py-[15vh]'>
            <Headline
              className={tw('xl:text-6xl', 'whitespace-normal', 'text-center')}
              primary='What is Developer Experience and why it matters?'
            />
          </div>

          <h1>Blog Item</h1>
          <h2>Heading 2</h2>
          <h3>Heading 3</h3>
          <h4>Heading 4</h4>
          <h5>Heading 5</h5>
          <h6>Heading 6</h6>
          <p>Paragraph</p>
        </article>
      </div>
    </main>
  );
}
