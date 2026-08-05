export type ArchitectureGroups = {
  frontend?: string[];
  backend?: string[];
  ml?: string[];
  database?: string[];
  infrastructure?: string[];
};

export type ProjectResult = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  role: string;
  problem: string;
  solutionSteps: string[];
  architecture?: ArchitectureGroups;
  technologies: string[];
  implementation: string[];
  challenges?: string[];
  results: ProjectResult[];
  conclusions?: string[];
  coverImage: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};
