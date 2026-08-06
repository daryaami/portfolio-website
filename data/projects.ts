import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "multimodal-rag",
    title: "Multimodal RAG для поиска технических документов",
    category: "LLM / Multimodal Search / RAG",
    shortDescription:
      "Система интеллектуального поиска технических документов по PDF и изображениям на основе мультимодальных embedding-моделей.",
    cardHighlight:
      "Собрала RAG-pipeline и REST API → поиск по PDF и схемам, не только по тексту",
    role: "ML Engineer. Полный пайплайн: документы, индекс, поиск, API.",
    problem:
      "Текстовый поиск плохо работает с технической документацией: схемы, чертежи, таблицы и сложные PDF теряются. Нужен retrieval по визуальному и смысловому сходству, а не только по словам на странице.",
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
    decisions: [
      {
        title: "Мультимодальные эмбеддинги вместо текста",
        body: "ColQwen2 кодирует страницу целиком — схемы и таблицы участвуют в поиске наравне с текстом, без отдельного OCR-only пути.",
      },
      {
        title: "Индексация по страницам",
        body: "Документ режется на страницы и индексируется как единицы retrieval: так проще отдавать релевантный фрагмент, а не весь PDF.",
      },
      {
        title: "Late interaction в Qdrant",
        body: "Мультивекторный late interaction сохраняет детализацию сравнения и дает Top-K без схлопывания страницы в один вектор.",
      },
      {
        title: "REST API вокруг пайплайна",
        body: "Retrieval обернут в FastAPI, чтобы систему можно было подключать к UI и другим сервисам без переписывания ядра поиска.",
      },
    ],
    results: [
      {
        label: "Качество поиска",
        value: "Релевантный Top-K по визуальному и смысловому сходству",
      },
      {
        label: "Скорость retrieval",
        value: "Низкая задержка late interaction на индексе",
      },
      {
        label: "Объем данных",
        value: "Пайплайн готов к масштабированию коллекции документов",
      },
    ],
    conclusions: [
      "Мультимодальные эмбеддинги заметно сильнее текстового поиска на технической документации со схемами и чертежами.",
      "Следующий шаг — усилить OCR-слой, добавить reranking и мониторинг качества retrieval.",
    ],
    coverImage: "/images/projects/multimodal-rag.svg",
    featured: true,
  },
  {
    slug: "chronika",
    title: "Chronika — интеллектуальная система персонального планирования",
    category: "LLM Application / Backend / AI Assistant",
    shortDescription:
      "Интеллектуальная система планирования задач с AI-ассистентом, семантическим поиском и автоматическим распределением задач.",
    cardHighlight:
      "Backend, LLM и semantic search → ассистент понимает запросы и помогает планировать задачи",
    role: "Backend, ML-компоненты, интеграция LLM и semantic search.",
    problem:
      "Планировать задачи вручную неудобно: запросы на естественном языке нужно понимать, находить связанный контекст и превращать его в конкретные действия в расписании.",
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
    decisions: [
      {
        title: "Intent detection перед генерацией",
        body: "Сначала определяется намерение пользователя, и только потом подключается LLM — так ассистент реже «галлюцинирует» сценарий планирования.",
      },
      {
        title: "Semantic search через pgvector",
        body: "Задачи и контекст ищутся по смыслу, а не по ключевым словам: ассистент опирается на уже существующие записи пользователя.",
      },
      {
        title: "LLM как слой уточнения",
        body: "Модель помогает сформулировать и уточнить задачу, но не заменяет retrieval и бизнес-логику backend.",
      },
      {
        title: "Асинхронный backend",
        body: "Celery и Redis выносят тяжелые ML-вызовы из запроса пользователя, чтобы UI оставался отзывчивым.",
      },
    ],
    results: [
      {
        label: "Intent detection",
        value: "Устойчивое распознавание основных сценариев планирования",
      },
      {
        label: "Поиск",
        value: "Семантический поиск по задачам через pgvector",
      },
      {
        label: "UX",
        value: "Сценарии ассистента проверены на пользовательском тестировании",
      },
    ],
    conclusions: [
      "LLM-ассистент полезен, когда intent detection и retrieval работают как единый пайплайн, а не как один большой prompt.",
      "Дальше — персонализация расписания и feedback-loop по качеству ответов.",
    ],
    coverImage: "/images/projects/chronika-cover.svg",
    githubUrl: "https://github.com/daryaami/Chronika-AI-planner",
    featured: true,
  },
  {
    slug: "people-counting",
    title: "Подсчет людей в реальном времени",
    category: "Computer Vision / Edge AI",
    shortDescription:
      "Модуль подсчета входов и выходов по видеопотоку на базе YOLOv8 (RKNN), ByteTrack и настраиваемых ROI-зон.",
    cardHighlight:
      "Собрала YOLOv8 + ByteTrack модуль на RKNN → подсчет входов/выходов при 15 FPS",
    cardMetric: { label: "Counting Accuracy", value: "92.16%" },
    role: "ML Engineer. Конвертация модели в RKNN, трекинг, ROI-подсчет, API и GUI для настройки зон.",
    problem:
      "Необходимо автоматически считать входящих и выходящих людей через заданные зоны на видеопотоке.\n\nСистема должна работать на Edge-устройстве с NPU Rockchip при ограниченных ресурсах и неудобных ракурсах камер.",
    solutionSteps: [
      "Video frame",
      "Crop + batching",
      "YOLOv8 on RKNN NPU",
      "Postprocessing",
      "ByteTrack",
      "ROI crossing",
      "entered / exited",
    ],
    technologies: [
      "Python",
      "YOLOv8",
      "RKNN",
      "ByteTrack",
      "OpenCV",
      "NumPy",
      "Threading",
      "JSON/YAML",
    ],
    decisions: [
      {
        title: "YOLOv8 → RKNN",
        body: "Модель сконвертирована в RKNN для инференса на NPU Rockchip.",
      },
      {
        title: "Интеграция ByteTrack",
        body: "Трекер адаптирован под формат детекций YOLOv8; настроено сопоставление детекций и треков.",
      },
      {
        title: "ROI-подсчет",
        body: "События входа/выхода считаются по пересечению зон с учетом кропа кадра и батч-обработки.",
      },
      {
        title: "API и GUI для ROI",
        body: "Добавлены API и интерфейс редактирования зон, а также многопоточная обработка кадров через очередь.",
      },
    ],
    results: [
      { label: "FPS", value: "15 при batch-size 4" },
      { label: "Precision", value: "95.74%" },
      { label: "Recall", value: "88.24%" },
      { label: "F1-score", value: "91.8%" },
      { label: "Counting Accuracy", value: "92.16%" },
      {
        label: "Выход модуля",
        value: "События entered / exited, опционально аннотированное видео",
      },
    ],
    conclusions: [
      "Рабочий Edge-pipeline: детекция на RKNN, трекинг и ROI-подсчет при 15 FPS.",
      "Корректная работа ROI при кропе и батчинге критична для стабильности метрик на реальных ракурсах.",
    ],
    coverImage: "/images/projects/people-counting.svg",
    featured: true,
  },
  {
    slug: "face-recognition",
    title: "Система распознавания сотрудников по лицу",
    category: "Computer Vision / Face Recognition",
    shortDescription:
      "Система идентификации сотрудников по изображениям лиц на основе embedding-моделей.",
    cardHighlight:
      "Улучшила модуль распознавания лиц на ArcFace → устойчивый Face ID на маленьком разрешении",
    role: "ML Engineer. Переработка пайплайна распознавания лиц: выбор embedding-модели, matching-логика, база представлений и human-in-the-loop feedback.",
    problem:
      "Необходимо было автоматически определять сотрудников на смене по изображениям лиц.\n\nИсходный модуль на базе FaceNet (InceptionResnetV1, VGGFace2) часто путал похожих сотрудников из-за маленького количества фотографий в базе.\n\nЯ проанализировала причины ошибок и переработала pipeline распознавания вокруг более устойчивых face embeddings.",
    solutionSteps: [
      "Фото сотрудника",
      "InsightFace ArcFace embedding",
      "Vector store",
      "Similarity matching",
      "Identity + confidence",
      "Operator feedback",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "InsightFace",
      "ArcFace",
      "OpenCV",
      "Face embeddings",
      "Vector similarity search",
      "Telegram Bot API",
    ],
    decisions: [
      {
        title: "Переход с FaceNet на ArcFace",
        body: "Заменила исходную embedding-модель на InsightFace ArcFace, ориентированную на более устойчивое разделение похожих лиц.",
      },
      {
        title: "Переработка matching pipeline",
        body: "Оптимизировала не только модель, но и логику работы с embeddings: preprocessing, similarity matching, обработка confidence и обновление базы.",
      },
      {
        title: "Human-in-the-loop",
        body: "Неуверенные совпадения отправляются оператору; оператор подтверждает или изменяет результат; новое изображение добавляется в базу embeddings.",
      },
    ],
    results: [
      {
        label: "Качество распознавания",
        value:
          "Значительное снижение ошибочных идентификаций по сравнению с исходным FaceNet pipeline",
      },
      {
        label: "Обновление базы",
        value: "Добавление новых сотрудников без переобучения модели",
      },
      {
        label: "Production workflow",
        value: "Распознавание → проверка оператором → обновление базы",
      },
    ],
    conclusions: [
      "На похожих лицах и малой базе фото выигрыш дает смена embedding-модели вместе с matching-логикой, а не только подкрутка порога.",
      "Human-in-the-loop закрывает cold-start и спорные кейсы: база растет по подтверждениям оператора без полного переобучения.",
    ],
    coverImage: "/images/projects/face-recognition.svg",
    featured: true,
  },
  {
    slug: "recycling-classification",
    title: "Классификация вторсырья на Edge-устройстве",
    category: "Computer Vision / Edge AI",
    shortDescription:
      "Система детекции и классификации объектов на Raspberry Pi: пластиковые бутылки, алюминиевые банки и нецелевые предметы.",
    cardHighlight:
      "YOLO-детектор на ~7000 фото + TFLite → aluminium / plastic / N",
    cardMetric: { label: "Accuracy", value: "92.63%" },
    role: "ML Engineer. Подготовка датасета, обучение детектора, квантование и TFLite-инференс под ограничение времени на кадр.",
    problem:
      "По изображению с камеры аппарата необходимо определить тип объекта: aluminium, plastic или N (нецелевой предмет). Инференс выполняется на Raspberry Pi с ограничением по времени обработки одного кадра.\n\nДополнительное требование — отбрасывать кадры с более чем одним объектом. Основная сложность задачи — open-set классификация: отличать целевые классы от произвольных предметов.",
    solutionSteps: [
      "Фото с камеры",
      "YOLO detector",
      "Reject if >1 object",
      "aluminium / plastic / N",
      "TFLite on Raspberry Pi",
    ],
    technologies: [
      "Python",
      "PyTorch",
      "YOLO",
      "TensorFlow Lite",
      "OpenCV",
      "Dataset preparation",
    ],
    decisions: [
      {
        title: "Датасет ~7000 изображений",
        body: "Базовый набор размечен вручную и расширен открытыми данными. Добавлены негативные классы (стекло, бумага, спреи), чтобы снизить ложные срабатывания на похожих предметах.",
      },
      {
        title: "Детектор вместо чистой классификации",
        body: "Обучен YOLO-детектор с последующим сведением ответа к aluminium / plastic / N. Такой подход позволяет отсекать кадры с несколькими объектами.",
      },
      {
        title: "Оптимизация под Raspberry Pi",
        body: "Использованы легкие YOLO-модели, квантование и экспорт в TFLite, чтобы укладываться в лимит времени на одно изображение.",
      },
    ],
    results: [
      { label: "Accuracy", value: "92.63%" },
      {
        label: "Aluminium",
        value: "Precision 92.52% · Recall 99.70% · F1 95.98% · AUC 0.979",
      },
      {
        label: "Plastic",
        value: "Precision 91.95% · Recall 98.88% · F1 95.29% · AUC 0.955",
      },
      {
        label: "N (unknown)",
        value: "Precision 96.34% · Recall 58.52% · F1 72.81% · AUC 0.796",
      },
    ],
    resultFigures: [
      {
        src: "/images/projects/recycling-roc-auc.png",
        alt: "ROC-кривые one-vs-rest для классов aluminium, plastic и unknown",
        caption:
          "ROC (one-vs-rest): aluminium AUC 0.979, plastic AUC 0.955, N AUC 0.796. Класс N заметно слабее целевых.",
      },
    ],
    conclusions: [
      "Целевые классы aluminium и plastic показывают высокое качество; основной bottleneck — класс N в open-set постановке.",
      "Альтернативные подходы (metric learning, triplet loss) не дали устойчивого прироста на неожиданных объектах; финальное решение осталось на YOLO с расширенным негативным набором.",
    ],
    coverImage: "/images/projects/recycling-classification.svg",
    featured: true,
  },
  {
    slug: "antifraud-video",
    title: "AntiFraud система видеоаналитики",
    category: "Computer Vision",
    shortDescription:
      "Система обнаружения подозрительной активности на видеопотоке.",
    cardHighlight:
      "Каскад motion → detection → GRU → анализ подозрительной активности на видео",
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
    decisions: [
      {
        title: "Каскад вместо тяжелой модели",
        body: "Motion → detection → classification режет ложные срабатывания и экономит compute на спокойных кадрах.",
      },
      {
        title: "Временной контекст через GRU",
        body: "Подозрительность оценивается по последовательности, а не по одному кадру.",
      },
      {
        title: "Фильтрация событий",
        body: "Каскад оставляет тяжелым моделям только кандидатов, а не весь поток.",
      },
    ],
    results: [
      { label: "Архитектура", value: "Каскад снижает нагрузку на тяжелые модели" },
      { label: "Анализ", value: "Учитывается временной контекст событий" },
      { label: "Применение", value: "Пайплайн применим к fraud / anomaly сценариям" },
    ],
    conclusions: [
      "Каскад motion → detection → classification эффективнее тяжелой модели на каждый кадр.",
      "Дальше — расширить набор аномалий и online-мониторинг.",
    ],
    coverImage: "/images/projects/antifraud-video.svg",
    featured: false,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
