import type { SkillCategory } from "@/types/skills";

export const skillCategories: SkillCategory[] = [
  {
    title: "Машинное обучение",
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn"],
  },
  {
    title: "Компьютерное зрение",
    items: ["OpenCV", "YOLO", "OCR", "Object Detection", "Face Recognition"],
  },
  {
    title: "LLM и AI-системы",
    items: ["Transformers", "RAG", "Embeddings", "Vector Search"],
  },
  {
    title: "Разработка ML-приложений",
    items: ["FastAPI", "Django REST Framework", "PostgreSQL", "SQL", "Redis"],
  },
  {
    title: "Инфраструктура",
    items: ["Docker", "Linux", "Git"],
  },
  {
    title: "Языки",
    items: ["Английский C1", "Испанский B1"],
  },
];
