import { Card } from "../../../components/card";

export const AspectOverview = ({}) => {
  return (
    <div className="flex flex-wrap gap-2 ">
      <Card
        title="1: Unified Vision and Goals"
        href="/mindset/unified-vision-and-goals"
      >
        Ensure everyone understands the project&apos;s vision and goals. This
        shared understanding guides decisions and actions across the team.
      </Card>

      <Card
        title="2: Cross-Functional Collaboration"
        href="/mindset/cross-functional-collaboration"
      >
        Foster collaboration among all roles by encouraging open communication
        and teamwork. This approach leverages diverse expertise and perspectives
        to solve problems and innovate effectively.
      </Card>

      <Card
        title="3: MVP Driven: Start Small, Grow Big"
        href="/mindset/mvp-driven-start-small-grow-big"
      >
        Begin with a Minimum Viable Product (MVP) and scale up through iterative
        development. This approach allows for rapid deployment and user feedback
        while ensuring the product evolves robustly and sustainably.
      </Card>

      <Card
        title="4: Release or Disable Features Through Configuration"
        href="/mindset/release-or-disable-features-through-configuration"
      >
        Use feature toggles and configurations to release or disable features
        quickly. This approach allows for flexible adjustments without extensive
        code changes, enabling controlled rollouts and quick responses to
        feedback.
      </Card>

      <Card
        title="5: Continuous Integration and Continuous Delivery (CI/CD)"
        href="/mindset/continuous-integration-and-continuous-delivery"
      >
        Integrate and deliver code changes frequently with automated testing and
        deployment to ensure code quality and functionality. This approach
        promotes collaboration, reduces integration issues, and maintains a
        stable, deployable codebase.
      </Card>

      <Card
        title="6: Pragmatic Testing of Code"
        href="/mindset/pragmatic-testing-of-code"
      >
        Focus on tests that provide real value and insight. Identify critical
        paths and concentrate testing efforts on the most important areas to
        ensure high code quality and performance, avoiding over-testing.
      </Card>

      <Card
        title="7: Automate Repetitive and Complex Tasks"
        href="/mindset/automate-repetitive-and-complex-tasks"
      >
        Automate complex or repetitive tasks across the organization and for
        end-users to improve efficiency and free up time for more valuable work.
        This enhances productivity and ensures consistent execution.
      </Card>

      <Card
        title="8: Prioritize Needs of the End-User and (Future) Developer"
        href="/mindset/prioritize-needs-of-the-end-user-and-future-developer"
      >
        Prioritize both the end-user experience and future developer needs to
        ensure the product is user-friendly and maintainable. Involve users in
        design, maintain clear documentation, and follow best practices for code
        maintainability.
      </Card>

      <Card
        title="9: Concise and Accessible Documentation"
        href="/mindset/concise-and-accessible-documentation"
      >
        Maintain concise and accessible documentation to provide an overview of
        the software, its components, and critical business logic. This supports
        effective use and development without consuming excessive time.
      </Card>

      <Card
        title="10: Continuous Feedback and Improvement"
        href="/mindset/continuous-feedback-and-improvement"
      >
        Foster a culture of continuous feedback and improvement. Regularly
        collect feedback from all stakeholders to refine processes and products,
        ensuring the development process is always evolving and adapting.
      </Card>
    </div>
  );
};
