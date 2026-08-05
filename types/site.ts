export type SocialLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  name: string;
  role: string;
  specialization: string[];
  tagline: string;
  about: string;
  email: string;
  cvUrl: string;
  diplomaUrl: string;
  telegramHandle: string;
  url: string;
  socials: {
    github: string;
    linkedin?: string;
    telegram: string;
  };
  /** Feature flags — включайте разделы без удаления кода */
  features: {
    articles: boolean;
    /** Сколько проектов показывать на главной; null = все */
    projectsVisible: number | null;
  };
  nav: NavItem[];
};
