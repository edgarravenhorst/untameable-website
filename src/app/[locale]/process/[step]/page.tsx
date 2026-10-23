import { notFound, redirect } from 'next/navigation';
import { localePath } from '@/helper/locale-path';
import { isProcessStep, processSteps } from '../steps';

type ProcessStepRedirectProps = {
  params: Promise<{ locale: string; step: string }>;
};

export function generateStaticParams() {
  return processSteps.map((step) => ({ step }));
}

export const dynamicParams = false;

export default async function ProcessStepRedirect(
  props: ProcessStepRedirectProps,
) {
  const { locale, step } = await props.params;

  if (!isProcessStep(step)) {
    notFound();
  }

  redirect(`${localePath(locale, '/process')}#${step}`);
}
