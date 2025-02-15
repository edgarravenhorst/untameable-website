import { Metadata } from 'next';
import Link from 'next/link';
import { Blog } from '../../components/blog';
import { AspectOverview } from '../aspect-overview';

export const metadata: Metadata = {
  title: 'Untameable Mindset - Continuous Integration and Continuous Delivery',
  description:
    'Integrate and deliver code changes frequently with automated testing and deployment to ensure code quality and functionality. This approach promotes collaboration, reduces integration issues, and maintains a stable, deployable codebase.',
  openGraph: {
    title:
      'Untameable Mindset - Continuous Integration and Continuous Delivery',
    description:
      'Integrate and deliver code changes frequently with automated testing and deployment to ensure code quality and functionality. This approach promotes collaboration, reduces integration issues, and maintains a stable, deployable codebase.',
    type: 'website',
    url: 'https://untameable.io/mindset/continuous-integration-and-continuous-delivery',
    locale: 'en_US',
  },
};

export default function Mindset() {
  return (
    <Blog
      title='The Untameable Mindset'
      subtitle='5. Continuous Integration and Continuous Delivery  
      (CI/CD)'
      date='2024-05-24'
      by='Edgar Ravenhorst'
    >
      <p className='lead md:!text-2xl text-center !mb-24 !mt-0'>
        Integrate and deliver code changes frequently with automated testing and
        deployment to ensure code quality and functionality. This approach
        promotes collaboration, reduces integration issues, and maintains a
        stable, deployable codebase.
      </p>

      <p>
        Continuous Integration (CI) and Continuous Delivery (CD) are development
        practices where team members integrate their code changes into a shared
        repository frequently, and those changes are automatically tested and
        deployed. CI focuses on integrating and testing code regularly, while CD
        ensures that code changes are automatically prepared for release to
        production. Together, CI/CD aims to improve software quality and speed
        up the delivery process.
      </p>

      <h4>Key Principles</h4>
      <p>
        Commit code changes frequently to a shared repository. Use automated
        tests to verify each integration, ensuring that new changes do not break
        existing functionality. Maintain a comprehensive suite of tests that run
        automatically with each integration. Implement automated deployment
        pipelines to deliver changes to production quickly and reliably.
      </p>
      <h4>Benefits</h4>
      <p>
        CI/CD helps catch bugs and issues early, reducing the cost and effort
        required to fix them. It ensures that the codebase is always in a
        deployable state, allowing for more frequent releases and updates. CI/CD
        promotes better collaboration among team members, as it encourages
        regular code integration and testing. It also improves overall software
        quality by ensuring that code changes are continuously validated and
        deployed through automated processes.
      </p>
      <h4>Implementation Strategies</h4>
      <p>
        Set up a CI/CD server, such as Jenkins, GitLab CI, or CircleCI, to
        automate the integration, testing, and deployment processes. Ensure that
        all code changes are committed to a shared repository frequently.
        Develop and maintain a comprehensive suite of automated tests that cover
        various aspects of the application, including unit tests, integration
        tests, and end-to-end tests. Implement automated deployment pipelines to
        deliver changes to production quickly and reliably. Monitor the CI/CD
        process to ensure it remains fast and reliable, providing quick feedback
        to developers. Encourage a culture of regular and frequent code commits
        among team members.
      </p>
      <h4>Examples</h4>
      <p>
        A development team uses Jenkins to automate their CI/CD process, running
        tests and deploying code on every commit. This ensures that any issues
        are caught and addressed early, and changes are quickly delivered to
        production. Another example is a company using GitLab CI to manage their
        CI/CD pipeline, integrating and deploying code changes multiple times a
        day. This practice helps them maintain a stable and reliable codebase,
        allowing for frequent releases and updates.
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
