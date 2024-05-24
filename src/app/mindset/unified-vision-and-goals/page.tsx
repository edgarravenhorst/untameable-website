import { Metadata } from 'next';
import Link from 'next/link';
import { Blog } from '../../components/blog';
import { AspectOverview } from '../aspect-overview';

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
      subtitle='1. Unified Vision and Goals'
      date='2024-05-24'
      by='Edgar Ravenhorst'
    >
      <p className='lead md:!text-2xl text-center !mb-24 !mt-0'>
        Ensure everyone understands the project’s vision and goals. This shared
        understanding guides decisions and actions across the team.
      </p>

      <p>
        A unified vision and clear goals are essential for guiding the team’s
        decisions and actions. When everyone understands and aligns with the
        project’s objectives, the team can work more efficiently and cohesively.
      </p>

      <h4>Key Principles</h4>
      <p>
        Define a clear mission statement that articulates the project’s purpose
        and direction. Set specific, measurable, achievable, relevant, and
        time-bound (SMART) goals to keep the team focused and motivated.
        Regularly hold alignment sessions to ensure everyone stays on the same
        page and adapts to any changes in the vision or goals.
      </p>
      <h4>Benefits</h4>
      <p>
        A unified vision and clear goals provide direction and purpose, ensuring
        all team members work towards the same objectives. This alignment boosts
        motivation, enhances collaboration, and improves decision-making,
        leading to more efficient and effective project execution.
      </p>
      <h4>Implementation Strategies</h4>
      <p>
        Clearly communicate the mission statement and project goals to all team
        members. Use alignment sessions to keep everyone informed and engaged.
        Regularly review and update goals based on project progress and
        feedback.
      </p>
      <h4>Examples</h4>
      <p>
        A successful project team starts each sprint with a meeting to review
        the mission statement and goals, ensuring everyone is aligned. They also
        hold weekly alignment sessions to discuss progress, address challenges,
        and adjust Goals as needed. A unified vision and clear goals are the
        foundation of effective teamwork. By ensuring everyone understands and
        aligns with the project’s objectives, the team can work more efficiently
        and cohesively, ultimately leading to project success.
      </p>
      <p>--</p>
      <h3>Read about other Aspects of the Untameable Mindset:</h3>
      <p>
        This page is part of a series on{' '}
        <Link href='/mindset'>The Untameable Mindset</Link>. Explore the other
        aspects to learn more about the principles that guide our development
        practices and behaviors.
        <br />
        <br />
      </p>

      <AspectOverview />
    </Blog>
  );
}
