import { Badge } from "@/components/Badge";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { articles } from "@/data/articles";

export function Articles() {
  return (
    <section id="articles" className="scroll-mt-20 bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Статьи"
          title="Технические материалы"
          description="Заметки по RAG, Computer Vision, оптимизации моделей и ML System Design."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article, index) => (
            <FadeIn key={article.slug} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-xl border border-border bg-white p-6 transition-shadow hover:shadow-md">
                <time
                  dateTime={article.date}
                  className="text-xs font-medium text-foreground-muted"
                >
                  {new Date(article.date).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {article.href === "#" ? (
                    article.title
                  ) : (
                    <a
                      href={article.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent"
                    >
                      {article.title}
                    </a>
                  )}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                  {article.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {article.technologies.map((tech) => (
                    <Badge key={tech}>{tech}</Badge>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
