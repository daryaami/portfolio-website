import Link from "next/link";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCover } from "@/components/ProjectCover";
import { SectionHeading } from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Проекты"
          title="Кейсы ML-систем"
          description="Архитектура, инженерные решения и результаты."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.05}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white transition-shadow hover:shadow-md">
                <Link
                  href={`/projects/${project.slug}`}
                  className="relative block aspect-[16/10] overflow-hidden bg-background-secondary"
                >
                  <ProjectCover
                    src={project.coverImage}
                    alt={`Обложка проекта ${project.title}`}
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-medium tracking-wide text-accent uppercase">
                    {project.category}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-foreground">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-accent"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground-muted">
                    {project.shortDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    <Button href={`/projects/${project.slug}`} variant="primary">
                      Подробнее
                    </Button>
                    {project.githubUrl ? (
                      <Button href={project.githubUrl} variant="secondary" external>
                        GitHub
                      </Button>
                    ) : null}
                    {project.demoUrl ? (
                      <Button href={project.demoUrl} variant="ghost" external>
                        Demo
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
