import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "multimodal-rag",
    title: "Multimodal RAG для поиска технических документов",
    category: "LLM / Multimodal Search / RAG",
    shortDescription:
      "Система интеллектуального поиска технических документов по PDF и изображениям на основе мультимодальных embedding-моделей.",
    role: "ML Engineer. Разработка полного пайплайна: обработка документов, построение индекса, поиск, API и интеграция компонентов.",
    problem:
      "Обычный текстовый поиск плохо работает с технической документацией: схемы, чертежи, таблицы, изображения и сложная структура PDF. Нужен поиск по визуальному и смысловому сходству.",
    solutionSteps: [
      "PDF",
      "Извлечение страниц",
      "ColQwen2 embeddings",
      "Qdrant Vector Database",
      "Late Interaction Search",
      "Top-K похожих документов",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "ColQwen2",
      "Qdrant",
      "FastAPI",
      "Docker",
      "Marker",
      "OCR",
    ],
    implementation: [
      "Индексация документов по страницам",
      "Хранение мультивекторных представлений",
      "Поиск через late interaction",
      "REST API для retrieval",
      "Подготовка UI для просмотра результатов",
    ],
    challenges: [
      "Обработка сложных PDF со схемами и таблицами",
      "Хранение и retrieval мультивекторных эмбеддингов",
      "Баланс между качеством поиска и скоростью ответа API",
    ],
    results: [
      { label: "Качество поиска", value: "Релевантный Top-K по визуальному и смысловому сходству" },
      { label: "Скорость retrieval", value: "Низкая задержка late interaction на индексе" },
      { label: "Объём данных", value: "Пайплайн готов к масштабированию коллекции документов" },
    ],
    conclusions: [
      "Мультимодальные эмбеддинги заметно лучше текстового поиска на технической документации.",
      "Дальше: улучшить OCR-слой, добавить reranking и мониторинг качества retrieval.",
    ],
    coverImage: "/images/projects/multimodal-rag.svg",
    featured: true,
  },
  {
    slug: "chronika",
    title: "Chronika — интеллектуальная система персонального планирования",
    category: "LLM Application / Backend / AI Assistant",
    shortDescription:
      "Веб-приложение для управления задачами и расписанием с использованием AI-ассистента.",
    role: "Full-stack ML Engineer. Backend, ML-компоненты, интеграция LLM и система семантического поиска.",
    problem:
      "Пользователю сложно эффективно планировать задачи вручную. Нужен интеллектуальный помощник, который понимает запросы и помогает создавать расписание.",
    solutionSteps: [
      "Пользовательский запрос",
      "Intent Detection",
      "Semantic Search",
      "LLM Assistant",
      "Создание задачи",
    ],
    architecture: {
      frontend: ["Vue"],
      backend: ["Django REST Framework"],
      ml: ["Embeddings", "LLM", "Semantic Search"],
      database: ["PostgreSQL + pgvector"],
      infrastructure: ["Redis", "Celery", "Docker"],
    },
    technologies: [
      "Python",
      "Django",
      "Vue",
      "PostgreSQL",
      "pgvector",
      "Redis",
      "LLM",
      "Embeddings",
    ],
    implementation: [
      "Определение намерения пользователя",
      "Семантический поиск по задачам и контексту",
      "Генерация и уточнение задач через LLM",
      "Асинхронная обработка через Celery и Redis",
    ],
    challenges: [
      "Стабильное определение намерений на естественном языке",
      "Связка semantic search и генерации расписания",
      "Надёжность асинхронных ML-вызовов в backend",
    ],
    results: [
      { label: "Intent detection", value: "Устойчивое распознавание основных сценариев планирования" },
      { label: "Поиск", value: "Семантический поиск по задачам через pgvector" },
      { label: "UX", value: "Сценарии ассистента проверены на пользовательском тестировании" },
    ],
    conclusions: [
      "LLM-ассистент полезен, когда intent detection и retrieval работают как единый пайплайн.",
      "Дальше: улучшить персонализацию расписания и feedback-loop по качеству ответов.",
    ],
    coverImage: "/images/projects/chronika-cover.svg",
    githubUrl: "https://github.com/daryaami/Chronika-AI-planner",
    featured: true,
  },
  {
    slug: "face-recognition",
    title: "Система распознавания лиц",
    category: "Computer Vision",
    shortDescription:
      "Система идентификации пользователей по изображению лица с векторным поиском embeddings.",
    role: "ML Engineer. Построение CV-пайплайна детекции, извлечения эмбеддингов и matching.",
    problem:
      "Необходима надёжная идентификация пользователей по лицу с быстрым поиском по базе embeddings.",
    solutionSteps: [
      "Image",
      "Face Detection",
      "Embedding Extraction",
      "Vector Search",
      "Identity Matching",
    ],
    technologies: ["PyTorch", "InsightFace", "ArcFace", "FAISS", "OpenCV"],
    implementation: [
      "Генерация embeddings размерности 512",
      "Поиск похожих лиц в векторном индексе",
      "Работа с базой пользователей и порогами matching",
    ],
    challenges: [
      "Устойчивость к освещению и ракурсу",
      "Выбор порога similarity для false accept / false reject",
      "Масштабирование FAISS-индекса",
    ],
    results: [
      { label: "Embeddings", value: "Векторы размерности 512" },
      { label: "Поиск", value: "Быстрый nearest-neighbor matching" },
      { label: "Интеграция", value: "Пайплайн готов к подключению к пользовательской базе" },
    ],
    conclusions: [
      "ArcFace + FAISS — рабочий стек для идентификации при аккуратной настройке порогов.",
      "Дальше: антиспуфинг и мониторинг drift качества.",
    ],
    coverImage: "/images/projects/face-recognition.svg",
    featured: true,
  },
  {
    slug: "edge-detection",
    title: "Object Detection на устройствах с ограниченными ресурсами",
    category: "Computer Vision / Edge AI",
    shortDescription:
      "Оптимизация моделей компьютерного зрения для запуска на edge-устройствах.",
    role: "ML Engineer. Конвертация, оптимизация и деплой detection-моделей на ARM.",
    problem:
      "Модели глубокого обучения требуют много ресурсов. Нужен быстрый inference на ARM-устройствах.",
    solutionSteps: [
      "Training",
      "ONNX",
      "Optimization",
      "RKNN / TFLite",
      "Edge Deployment",
    ],
    technologies: ["YOLO", "ONNX", "TensorFlow Lite", "RKNN", "OpenCV", "CUDA"],
    implementation: [
      "Конвертация моделей в промежуточные и целевые форматы",
      "Оптимизация inference под edge-ограничения",
      "Валидация качества после квантизации",
    ],
    challenges: [
      "Потери точности после оптимизации",
      "Различия runtime на CUDA и ARM",
      "Подбор целевого формата под железо",
    ],
    results: [
      { label: "Деплой", value: "Модели запущены на edge-стеке RKNN / TFLite" },
      { label: "Inference", value: "Снижена нагрузка относительно исходной модели" },
      { label: "Качество", value: "Сохранён приемлемый trade-off accuracy / latency" },
    ],
    conclusions: [
      "Путь Training → ONNX → Edge runtime критичен для production CV на слабом железе.",
      "Дальше: автоматизировать бенчмарки и регрессии качества после конвертации.",
    ],
    coverImage: "/images/projects/edge-detection.svg",
    featured: true,
  },
  {
    slug: "antifraud-video",
    title: "AntiFraud система видеоаналитики",
    category: "Computer Vision",
    shortDescription:
      "Система обнаружения подозрительной активности на видеопотоке.",
    role: "ML Engineer. Каскадная архитектура детекции и временного анализа.",
    problem:
      "Нужно выявлять подозрительную активность в видеопотоке без избыточной нагрузки на каждый кадр.",
    solutionSteps: [
      "Motion Detection",
      "Object Detection",
      "Classification",
      "Temporal Analysis",
    ],
    technologies: ["Python", "OpenCV", "YOLO", "CNN", "GRU"],
    implementation: [
      "Каскадная фильтрация событий для снижения ложных срабатываний",
      "Классификация подозрительных сцен",
      "Временной анализ последовательности через GRU",
    ],
    challenges: [
      "Баланс recall / precision на редких событиях",
      "Работа в реальном времени на видеопотоке",
      "Связка детекции объектов и temporal-модели",
    ],
    results: [
      { label: "Архитектура", value: "Каскад снижает нагрузку на тяжёлые модели" },
      { label: "Анализ", value: "Учитывается временной контекст событий" },
      { label: "Применение", value: "Пайплайн применим к fraud / anomaly сценариям" },
    ],
    conclusions: [
      "Каскад motion → detection → classification эффективнее «тяжёлой» модели на каждый кадр.",
      "Дальше: расширить набор аномалий и online-мониторинг.",
    ],
    coverImage: "/images/projects/antifraud-video.svg",
    featured: true,
  },
  {
    slug: "packaging-classification",
    title: "Packaging Classification",
    category: "Computer Vision",
    shortDescription:
      "Классификация изображений упаковок с использованием нейронных сетей и transfer learning.",
    role: "ML Engineer. Обучение и сравнение полной и мобильной версий модели.",
    problem:
      "Нужна классификация упаковок с возможностью запуска оптимизированной версии на мобильных устройствах.",
    solutionSteps: [
      "Dataset preparation",
      "Transfer learning (MobileNetV3)",
      "Full model evaluation",
      "TFLite optimization",
      "Mobile comparison",
    ],
    technologies: ["MobileNetV3", "TensorFlow", "TFLite", "Transfer Learning"],
    implementation: [
      "Transfer learning на MobileNetV3",
      "Сравнение полной и оптимизированной мобильной версии",
      "Экспорт в TFLite для мобильного inference",
    ],
    challenges: [
      "Сохранение точности после мобильной оптимизации",
      "Различия в поведении полной и TFLite-модели",
      "Подготовка данных под вариативность упаковок",
    ],
    results: [
      { label: "Подход", value: "Transfer learning ускорил получение рабочей модели" },
      { label: "Мобильная версия", value: "TFLite-вариант готов к edge/mobile сценариям" },
      { label: "Сравнение", value: "Зафиксирован trade-off полной и оптимизированной модели" },
    ],
    conclusions: [
      "MobileNetV3 + TFLite — практичный путь для классификации упаковок на слабых устройствах.",
      "Дальше: расширить датасет и автоматизировать A/B сравнение версий модели.",
    ],
    coverImage: "/images/projects/packaging-classification.svg",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
