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
        body: "Мультивекторный late interaction сохраняет детализацию сравнения и даёт Top-K без схлопывания страницы в один вектор.",
      },
      {
        title: "REST API вокруг пайплайна",
        body: "Retrieval обёрнут в FastAPI, чтобы систему можно было подключать к UI и другим сервисам без переписывания ядра поиска.",
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
        label: "Объём данных",
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
        body: "Celery и Redis выносят тяжёлые ML-вызовы из запроса пользователя, чтобы UI оставался отзывчивым.",
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
    title: "Подсчёт людей в реальном времени",
    category: "Computer Vision / Edge AI",
    shortDescription:
      "Модуль подсчёта входов и выходов по видеопотоку: YOLOv8 на RKNN NPU, ByteTrack и ROI-зоны с API и GUI для настройки.",
    cardHighlight:
      "Собрала CV-модуль YOLOv8+ByteTrack на RKNN → 15 FPS и Counting Accuracy 92.16%",
    cardMetric: { label: "Counting Accuracy", value: "92.16%" },
    role: "ML Engineer. Инференс на RKNN, трекинг, ROI-подсчёт, API и GUI для редактирования зон.",
    problem:
      "Нужно считать людей, входящих и выходящих через заданные зоны на видео. Камеры стоят под неудобными ракурсами, а железо — Edge с NPU Rockchip, без запаса по GPU.\n\nМоя задача была собрать рабочий модуль целиком: от конвертации модели до событий entered/exited и инструментов, чтобы зоны ROI можно было настраивать без правки кода.",
    solutionSteps: [
      "Video frame",
      "Crop + batching",
      "YOLOv8 on RKNN NPU",
      "Postprocessing",
      "ByteTrack",
      "ROI crossing",
      "entered / exited + annotation",
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
        title: "Конвертация YOLOv8 → RKNN",
        body: "Подобрала формат и размеры тензоров под NPU Rockchip, чтобы детекция шла на устройстве, а не на внешнем GPU.",
      },
      {
        title: "ByteTrack под выход YOLO",
        body: "Адаптировала трекер под формат детекций YOLOv8 и починила сопоставление детекций с треками — иначе ID ломались на сложных ракурсах.",
      },
      {
        title: "ROI с учётом кропа",
        body: "Подсчёт пересечений зон сделан так, чтобы кроп кадра и батч-постпроцессинг не сдвигали геометрию ROI.",
      },
      {
        title: "API, GUI и очередь кадров",
        body: "Добавила API и GUI для редактирования ROI и многопоточный pipeline через очередь — чтобы настройка зон и обработка видео жили рядом с инференсом.",
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
      "Самым сложным оказалось не «поставить YOLO», а стабильно связать RKNN-инференс, трекинг и ROI на неудобных ракурсах.",
      "Имеет смысл сразу проектировать crop/batch вместе с геометрией зон — иначе метрики на стенде и в проде разъезжаются.",
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
      "Распознавание лиц на ArcFace -> устойчивый Face ID на маленьком разрешении",
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
      "На похожих лицах и малой базе фото выигрыш даёт смена embedding-модели вместе с matching-логикой, а не только подкрутка порога.",
      "Human-in-the-loop закрывает cold-start и спорные кейсы: база растёт по подтверждениям оператора без полного переобучения.",
    ],
    coverImage: "/images/projects/face-recognition.svg",
    featured: true,
  },
  {
    slug: "recycling-classification",
    title: "Классификация вторсырья на Edge-устройстве",
    category: "Computer Vision / Edge AI",
    shortDescription:
      "Детекция и классификация на Raspberry Pi для аппарата приёма вторсырья: aluminium, plastic и класс N для всего остального.",
    cardHighlight:
      "Детектор YOLO на ~7000 фото + TFLite → aluminium / plastic / N при Accuracy 92.63%",
    cardMetric: { label: "Accuracy", value: "92.63%" },
    role: "ML Engineer. Ручная разметка, обучение детектора, квантование и TFLite-инференс под лимит времени на кадр.",
    problem:
      "Аппарат принимает пластиковые бутылки и алюминиевые банки. По фото с камеры на Raspberry Pi нужно ответить: aluminium, plastic или N (не целевой предмет). Есть жёсткий лимит времени на один кадр — поэтому модель обязана быть лёгкой.\n\nЗадача снаружи казалась простой классификацией, но главный подводный камень — open-set: научить лёгкую модель отличать целевые объекты от любого другого предмета в мире. Плюс требование отбрасывать кадры, где предметов больше одного — даже если оба целевые.",
    solutionSteps: [
      "Фото с камеры",
      "YOLO detector (multi-class)",
      "Reject if >1 object",
      "Map to alu / plastic / N",
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
        title: "Датасет ~7000 с ручной разметкой",
        body: "Сама разметила базовый набор, затем расширила открытыми данными и негативами (стекло, бумага, спреи), чтобы модель реже путала их с plastic/aluminium.",
      },
      {
        title: "Детектор, не чистый классификатор",
        body: "Обучала YOLO-детектор на нескольких классах и уже после детекции схлопывала ответ в aluminium / plastic / N — так можно отсечь кадры с >1 объектом.",
      },
      {
        title: "TFLite под лимит latency",
        body: "Брала лёгкие YOLO, квантовала и переводила в TFLite: узкое место было не «FPS видео», а уложиться во время на одно фото.",
      },
      {
        title: "Что не сработало",
        body: "Metric learning, triplet loss и другие схемы не дали прироста на неожиданных предметах (ножницы уходили в aluminium). Осталась на YOLO; N по-прежнему самый слабый класс — это честно видно в recall и ROC.",
      },
    ],
    results: [
      { label: "Accuracy", value: "92.63%" },
      { label: "Aluminium AUC", value: "0.979" },
      { label: "Plastic AUC", value: "0.955" },
      { label: "Unknown AUC", value: "0.796" },
      {
        label: "Aluminium",
        value: "Precision 92.52% · Recall 99.70% · F1 95.98%",
      },
      {
        label: "Plastic",
        value: "Precision 91.95% · Recall 98.88% · F1 95.29%",
      },
      {
        label: "N (unknown)",
        value: "Precision 96.34% · Recall 58.52% · F1 72.81%",
      },
    ],
    resultFigures: [
      {
        src: "/images/projects/recycling-roc-auc.png",
        alt: "ROC-кривые one-vs-rest для классов aluminium, plastic и unknown",
        caption:
          "ROC (one-vs-rest): aluminium AUC 0.979, plastic AUC 0.955, N AUC 0.796 — целевые классы сильные, open-set остаётся узким местом.",
      },
    ],
    conclusions: [
      "Open-set на Edge оказался сложнее «просто обучить YOLO»: aluminium/plastic держатся хорошо, а произвольный мусор всё ещё пробивает пороги.",
      "Имеет смысл заранее закладывать детекцию под правило «один объект в кадре» и копить жёсткие негативы — одними порогами уверенности это не закрывается.",
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
        title: "Каскад вместо тяжёлой модели",
        body: "Motion → detection → classification режет ложные срабатывания и экономит compute на спокойных кадрах.",
      },
      {
        title: "Временной контекст через GRU",
        body: "Подозрительность оценивается по последовательности, а не по одному кадру.",
      },
      {
        title: "Фильтрация событий",
        body: "Каскад оставляет тяжёлым моделям только кандидатов, а не весь поток.",
      },
    ],
    results: [
      { label: "Архитектура", value: "Каскад снижает нагрузку на тяжёлые модели" },
      { label: "Анализ", value: "Учитывается временной контекст событий" },
      { label: "Применение", value: "Пайплайн применим к fraud / anomaly сценариям" },
    ],
    conclusions: [
      "Каскад motion → detection → classification эффективнее тяжёлой модели на каждый кадр.",
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

/** Короткие числовые метрики для strip на странице кейса (до 4). */
export function getHighlightMetrics(
  results: Project["results"],
  limit = 4,
): Project["results"] {
  const scored = results
    .map((result) => {
      const value = result.value.trim();
      const isCompact =
        /^[\d.,]+\s*%$/.test(value) ||
        /^[\d.,]+$/.test(value) ||
        /^\d+(\.\d+)?\s*(FPS|fps)/i.test(value) ||
        /^\d+\s+при\b/i.test(value) ||
        /^~?[\d.,]+\s*(с|ms|мс)/i.test(value);
      const hasNumber = /\d/.test(value);
      const shortEnough = value.length <= 28;
      return {
        result,
        score: isCompact ? 3 : hasNumber && shortEnough ? 2 : hasNumber ? 1 : 0,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);

  return scored.slice(0, limit).map((item) => item.result);
}
