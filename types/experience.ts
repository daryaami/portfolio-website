export type ExperienceItem = {
  period: string;
  title: string;
  description: string[];
  highlights?: string[];
  link?: {
    label: string;
    href: string;
  };
};
