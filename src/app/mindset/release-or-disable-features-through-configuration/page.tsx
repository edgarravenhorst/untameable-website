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
      subtitle='4. Release or Disable Features Through Configuration'
      date='2024-05-24'
      by='Edgar Ravenhorst'
    >
      <p className='lead md:!text-2xl text-center !mb-24 !mt-0'>
        Use feature toggles and configurations to release or disable features
        quickly. This approach allows for flexible adjustments without extensive
        code changes, enabling controlled rollouts and quick responses to
        feedback.
      </p>

      <p>
        Feature toggles and configurations provide a way to manage feature
        visibility and availability dynamically. This method allows the team to
        enable or disable features quickly based on user feedback, business
        needs, or technical considerations, all without the need for extensive
        code changes or redeployment.
      </p>

      <h4>Key Principles</h4>
      <p>
        Implement feature toggles to control the release of new features and
        manage their availability. Use configuration files to adjust settings
        and features dynamically. Ensure that toggles and configurations are
        part of the development process, allowing for controlled rollouts, A/B
        testing, and quick disablement of problematic features.
      </p>
      <h4>Benefits</h4>
      <p>
        Using feature toggles and configurations provides flexibility and
        control over feature releases. It allows the team to respond swiftly to
        user feedback and business requirements. This approach reduces the risk
        of deploying new features and enables testing and experimentation
        without impacting the entire user base. Additionally, it minimizes
        downtime and enhances the ability to address critical issues promptly.
      </p>
      <h4>Implementation Strategies</h4>
      <p>
        Integrate feature toggles into the development workflow, allowing
        developers to enable or disable features as needed. Use configuration
        files to manage settings and feature states dynamically. Conduct regular
        reviews of active toggles and configurations to ensure they align with
        current project goals. Implement monitoring and logging to track feature
        performance and user feedback, enabling informed decisions about feature
        releases and adjustments.
      </p>
      <h4>Examples</h4>
      <p>
        A SaaS company uses feature toggles to release a new dashboard feature
        to a subset of users for beta testing. Based on the feedback, they make
        adjustments and gradually roll out the feature to all users. Another
        example is an e-commerce platform that uses configuration files to
        enable holiday-specific themes and promotions, allowing for quick
        updates without redeployment. If a critical issue arises, they can
        immediately disable the problematic feature, ensuring minimal disruption
        to users.
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
