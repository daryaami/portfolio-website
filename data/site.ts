import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  name: "Дарья Митряшкина",
  role: "ML Engineer",
  specialization: ["Computer Vision", "LLM", "RAG", "Deep Learning"],
  tagline:
    "Разрабатываю прикладные ML-системы: от обучения моделей до интеграции в программные решения.",
  about:
    "Разрабатываю системы компьютерного зрения, LLM-приложения и RAG-пайплайны. Работаю с полным циклом ML-разработки: подготовка данных, обучение моделей, оптимизация и интеграция ML-решений в прикладные системы.",
  email: "daryaami10@gmail.com",
  cvUrl: "/cv.pdf",
  diplomaUrl: "https://diploma.itmo.ru/docs/19C88D5BBD026D5CB5B12B46E3558EF9",
  telegramHandle: "@daryaamii",
  url: "https://portfolio-website-delta-puce-31.vercel.app",
  socials: {
    github: "https://github.com/daryaami",
    telegram: "https://t.me/daryaamii",
  },
  // Статьи спрятаны, пока нет реальных материалов. Включить: features.articles = true
  // и добавить пункт { label: "Статьи", href: "/#articles" } в nav.
  // Проекты: null = показывать все. Сейчас 5 готовых кейсов; antifraud скрыт.
  features: {
    articles: false,
    projectsVisible: 5,
  },
  nav: [
    { label: "Обо мне", href: "/#about" },
    { label: "Проекты", href: "/#projects" },
    { label: "Навыки", href: "/#skills" },
    { label: "Опыт", href: "/#experience" },
    { label: "Образование", href: "/#education" },
    { label: "Контакты", href: "/#contact" },
  ],
};
