import type { EducationItem } from "@/types/education";

export const educationItems: EducationItem[] = [
  {
    kind: "program",
    organization: "Университет ИТМО",
    title: 'Повышение квалификации: «Методы анализа данных»',
    period: "2022–2023",
  },
  {
    kind: "course",
    organization: "Университет ИТМО",
    title: "Машинное обучение для анализа научных данных",
    period: "2024–2025",
  },
  {
    kind: "course",
    organization: "ВКонтакте",
    title: "Введение в современные рекомендательные системы",
    period: "2024–2025",
  },
  {
    kind: "course",
    organization: "Университет ИТМО",
    title: "Анализ естественного языка методами машинного обучения",
    period: "2024–2025",
  },
];

/** Общий период для блока курсов */
export const coursesPeriod = "2024–2025";
