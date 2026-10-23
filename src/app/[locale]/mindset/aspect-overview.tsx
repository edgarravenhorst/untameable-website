'use client';

import { useTranslation } from 'react-i18next';
import { Card } from '../../../components/card';

export const AspectOverview = () => {
  const { t } = useTranslation('mindset');

  return (
    <div className="flex flex-wrap gap-2 ">
      <Card
        title={t('overview.unifiedVisionAndGoals.title')}
        href="/mindset/unified-vision-and-goals"
      >
        {t('overview.unifiedVisionAndGoals.description')}
      </Card>

      <Card
        title={t('overview.crossFunctionalCollaboration.title')}
        href="/mindset/cross-functional-collaboration"
      >
        {t('overview.crossFunctionalCollaboration.description')}
      </Card>

      <Card
        title={t('overview.mvpDriven.title')}
        href="/mindset/mvp-driven-start-small-grow-big"
      >
        {t('overview.mvpDriven.description')}
      </Card>

      <Card
        title={t('overview.releaseOrDisableFeatures.title')}
        href="/mindset/release-or-disable-features-through-configuration"
      >
        {t('overview.releaseOrDisableFeatures.description')}
      </Card>

      <Card
        title={t('overview.continuousIntegrationAndDelivery.title')}
        href="/mindset/continuous-integration-and-continuous-delivery"
      >
        {t('overview.continuousIntegrationAndDelivery.description')}
      </Card>

      <Card
        title={t('overview.pragmaticTesting.title')}
        href="/mindset/pragmatic-testing-of-code"
      >
        {t('overview.pragmaticTesting.description')}
      </Card>

      <Card
        title={t('overview.automateRepetitiveTasks.title')}
        href="/mindset/automate-repetitive-and-complex-tasks"
      >
        {t('overview.automateRepetitiveTasks.description')}
      </Card>

      <Card
        title={t('overview.prioritizeUserAndDeveloper.title')}
        href="/mindset/prioritize-needs-of-the-end-user-and-future-developer"
      >
        {t('overview.prioritizeUserAndDeveloper.description')}
      </Card>

      <Card
        title={t('overview.conciseDocumentation.title')}
        href="/mindset/concise-and-accessible-documentation"
      >
        {t('overview.conciseDocumentation.description')}
      </Card>

      <Card
        title={t('overview.continuousFeedback.title')}
        href="/mindset/continuous-feedback-and-improvement"
      >
        {t('overview.continuousFeedback.description')}
      </Card>
    </div>
  );
};
