import type { Article } from "@/types/article";

// Раздел скрыт (siteConfig.features.articles = false).
// Когда появятся реальные статьи — обновите href и включите флаг.
export const articles: Article[] = [
  {
    slug: "rag-system-design",
    title: "Проектирование RAG-пайплайна для технических документов",
    date: "2026-03-12",
    description:
      "Как спроектировать retrieval-пайплайн: чанкинг, эмбеддинги, векторное хранилище и оценка качества поиска.",
    technologies: ["RAG", "Embeddings", "Qdrant"],
    href: "#",
  },
  {
    slug: "cv-edge-optimization",
    title: "Оптимизация CV-моделей для edge-устройств",
    date: "2026-01-28",
    description:
      "Путь от PyTorch до ONNX и RKNN/TFLite: компромиссы между точностью и скоростью на ARM.",
    technologies: ["YOLO", "ONNX", "Edge AI"],
    href: "#",
  },
  {
    slug: "multimodal-embeddings",
    title: "Мультимодальные эмбеддинги в поисковых системах",
    date: "2025-11-05",
    description:
      "Зачем нужны late interaction и мультивекторные представления при поиске по PDF и схемам.",
    technologies: ["ColQwen2", "Multimodal", "Search"],
    href: "#",
  },
  {
    slug: "ml-system-design",
    title: "ML System Design: от прототипа до API",
    date: "2025-09-18",
    description:
      "Базовые решения при выводе модели в production: батчинг, кэширование, мониторинг и деградация.",
    technologies: ["FastAPI", "Docker", "MLOps"],
    href: "#",
  },
];
