import type { ExperienceItem } from "@/types/experience";
import { siteConfig } from "@/data/site";

export const experienceItems: ExperienceItem[] = [
  {
    period: "2025 — настоящее время",
    title: "Data Acquisition · ML Engineer",
    description: [
      "Разрабатываю и внедряю ML-решения: компьютерное зрение, LLM и RAG. Занимаюсь обучением моделей, оптимизацией и интеграцией в рабочие сервисы.",
    ],
  },
  {
    period: "2025",
    title: "ML Engineer (стажер)",
    description: [
      "Производственная практика.",
      "Работа с ML-задачами, подготовкой данных и разработкой моделей.",
    ],
  },
  {
    period: "2021 — 2026",
    title: "Университет ИТМО",
    description: [
      "Факультет прикладной информатики. Программа «Интеллектуальные системы в гуманитарной сфере».",
    ],
    link: {
      label: "Цифровой диплом",
      href: siteConfig.diplomaUrl,
    },
  },
];
