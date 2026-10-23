export const processSteps = [
  'audit',
  'proof',
  'implement',
  'finetune',
] as const;

export type ProcessStepId = (typeof processSteps)[number];

export function isProcessStep(value: string): value is ProcessStepId {
  return (processSteps as readonly string[]).includes(value);
}
