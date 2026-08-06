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

export type ProjectFigure = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectDecision = {
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  /** Компактная строка для карточки: вклад → результат */
  cardHighlight: string;
  /** Опциональная метрика для карточки (только реальные цифры) */
  cardMetric?: ProjectResult;
  role: string;
  problem: string;
  solutionSteps: string[];
  architecture?: ArchitectureGroups;
  technologies: string[];
  /** Инженерные решения: заголовок + смысл */
  decisions: ProjectDecision[];
  /** @deprecated страница больше не рендерит списки; данные сохранены как источник */
  implementation?: string[];
  challenges?: string[];
  results: ProjectResult[];
  /** Графики / скрины к блоку «Результаты» */
  resultFigures?: ProjectFigure[];
  /** Выводы — рендерятся как абзацы */
  conclusions?: string[];
  coverImage: string;
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
};
