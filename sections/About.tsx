import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

const highlights = [
  { label: "Роль", value: siteConfig.role },
  {
    label: "Направления",
    value: "Computer Vision, Deep Learning, LLM, RAG",
  },
  {
    label: "Ключевой стек",
    value: "Python, PyTorch, TensorFlow, OpenCV, Transformers",
  },
  {
    label: "Фокус",
    value: "Разработка ML-систем полного цикла",
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Обо мне"
          title="ML-разработчик"
          description="Кратко о роли, направлениях и фокусе работы."
        />
        <FadeIn className="mx-auto max-w-3xl">
          <p className="text-center text-lg leading-relaxed text-foreground">
            {siteConfig.about}
          </p>
          <dl className="mt-12 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="border-t border-border pt-4"
              >
                <dt className="text-sm font-medium text-foreground-muted">
                  {item.label}
                </dt>
                <dd className="mt-2 text-base text-foreground">{item.value}</dd>
              </div>
            ))}
          </dl>
        </FadeIn>
      </div>
    </section>
  );
}
