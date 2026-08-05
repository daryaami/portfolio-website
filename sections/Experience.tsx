import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { experienceItems } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Опыт"
          title="Путь в ML"
          description="Образование, практика и работа над прикладными ML-системами."
        />
        <FadeIn className="mx-auto max-w-2xl">
          <ol className="relative border-l border-border pl-8">
            {experienceItems.map((item, index) => (
              <li
                key={`${item.period}-${item.title}`}
                className={`relative ${index < experienceItems.length - 1 ? "pb-12" : ""}`}
              >
                <span className="absolute -left-[37px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent ring-4 ring-white" />
                <p className="text-sm font-semibold text-accent">{item.period}</p>
                <h3 className="mt-1 text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <div className="mt-3 space-y-2">
                  {item.description.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-sm leading-relaxed text-foreground-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {item.highlights && item.highlights.length > 0 ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="text-sm leading-relaxed text-foreground-muted"
                      >
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {item.link ? (
                  <a
                    href={item.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                  >
                    {item.link.label} →
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </FadeIn>
      </div>
    </section>
  );
}
