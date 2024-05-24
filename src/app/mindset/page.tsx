import { Metadata } from 'next';
import { Blog } from '../components/blog';
import { AspectOverview } from './aspect-overview';

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

export default function Mindset() {
  return (
    <Blog
      title='The Untameable Mindset'
      subtitle='for software development'
      date='2024-05-24'
      by='Edgar Ravenhorst'
    >
      <h2 className='mt-0'>Purpose</h2>
      <p>
        The Untameable Mindset aligns all team members—including developers,
        product owners, clients, designers, and other stakeholders—around a
        shared philosophy and adaptable principles. This mindset guides behavior
        and decision-making to develop high-quality, secure, stable, and
        controllable web applications. By fostering a common culture and
        emphasizing flexibility, the Untameable Mindset ensures collaborative
        and efficient work to meet user and developer needs, leading to project
        success.
      </p>
      <h2>Methodologies</h2>
      <p>
        The Untameable Mindset combines key principles from Agile, Lean, DevOps,
        and User-Centered Design (UCD) to create a fast, flexible, and
        user-focused approach. Agile&apos;s iterative development and continuous
        feedback align with our focus on MVP-driven growth and constant
        improvement. Lean&apos;s emphasis on delivering value and eliminating
        waste supports our pragmatic testing and automation strategies. DevOps
        practices, like continuous integration and deployment, ensure rapid,
        reliable releases and maintainable code. UCD&apos;s principles of
        understanding user needs and designing intuitive interfaces are central
        to prioritizing both user and developer experiences. This blend fosters
        a collaborative, efficient, and innovative development environment.
      </p>
      <h2>Aspects of the Untameable Mindset</h2>
      <p>
        The Untameable Mindset comprises several aspects that guide development
        practices and behaviors. These aspects emphasize collaboration,
        flexibility, efficiency, and user-focused development to create
        high-quality, maintainable products that meet user and developer needs.
        By following these aspects, teams can align their work, make informed
        decisions, and deliver successful projects.
        <br />
        <br />
      </p>

      <AspectOverview />
    </Blog>
  );
}
