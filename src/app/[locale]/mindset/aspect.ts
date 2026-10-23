type MindsetAspectSection = {
  heading: string;
  text: string;
};

export type MindsetAspect = {
  number: string;
  title: string;
  lead: string;
  description: string;
  keyPrinciples: MindsetAspectSection;
  benefits: MindsetAspectSection;
  implementation: MindsetAspectSection;
  examples: MindsetAspectSection;
};

export type MindsetExperience = MindsetAspectSection & {
  keyPrinciples: MindsetAspectSection;
  benefits: MindsetAspectSection;
  implementation: MindsetAspectSection;
  implementationExtended: MindsetAspectSection;
  examples: MindsetAspectSection;
};

export type MindsetPriorities = {
  number: string;
  title: string;
  lead: string;
  description: string;
  userExperience: MindsetExperience;
  developerExperience: MindsetExperience;
};
