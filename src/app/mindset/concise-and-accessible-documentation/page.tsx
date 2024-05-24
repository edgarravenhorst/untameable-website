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
      subtitle='9. Concise and Accessible Documentation'
      date='2024-05-24'
      by='Edgar Ravenhorst'
    >
      <p className='lead md:!text-2xl text-center !mb-24 !mt-0'>
        Maintain concise and accessible documentation to provide an overview of
        the software, its components, and critical business logic. This approach
        ensures that product owners, managers, and team members have access to
        essential information, supporting effective use and development without
        consuming excessive time.
      </p>

      <p>
        Clear documentation is essential for understanding the overall picture
        of the software, including its purpose, components, and key business
        logic. It aids in onboarding, development, and maintenance. While
        detailed information for specific tasks can be included in user stories
        or other documents, general documentation provides a foundational
        understanding without becoming overly time-consuming.
      </p>

      <h4>Key Principles</h4>
      <p>
        Document the overall architecture and purpose of the software, including
        its main components and how they interact. Ensure critical business
        logic is clearly described. Provide essential information for onboarding
        new team members. Use standardized formats and templates for clarity and
        efficiency. Focus on high-level documentation while referencing detailed
        documents like user stories for specific tasks.
      </p>
      <h4>Benefits</h4>
      <p>
        Clear documentation improves communication and knowledge sharing among
        product owners, managers, and team members. Done well, it reduces
        onboarding time for new developers and helps users understand the
        software’s capabilities and structure. Comprehensive documentation of
        business logic ensures that critical information is preserved and easily
        accessible, aiding in troubleshooting and maintenance.
      </p>
      <h4>Implementation Strategies</h4>
      <p>
        Create high-level documentation that covers the software’s architecture,
        main components, and their interactions. Focus on concise descriptions
        that provide essential information without overwhelming detail. Include
        descriptions of critical business logic and its implementation. Provide
        onboarding guides that help new team members quickly understand the
        software and their role. Use documentation tools and platforms like
        Confluence, Notion, or GitHub Wiki to create and maintain this
        documentation. Reference detailed documents, such as user stories, for
        specific tasks and detailed information. Schedule regular, brief review
        sessions to keep high-level documentation current without overwhelming
        product owners, managers, and team members. Leverage AI tools to assist
        in writing and maintaining documentation, ensuring consistency and
        quality in writing style, grammar, and clarity.
      </p>
      <h4>Examples</h4>
      <p>
        A development team maintains a high-level architectural diagram in
        Confluence, along with concise descriptions of the main components and
        their interactions. They include sections detailing the critical
        business logic and provide links to user stories for specific
        implementations. The onboarding guide includes an overview of the
        software, key processes, and links to further resources, helping new
        developers quickly get up to speed. Regular, short documentation review
        sessions ensure the information stays accurate and relevant without
        being overly time-consuming.
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
