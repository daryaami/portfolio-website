import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArchitectureDiagram } from "@/components/ArchitectureDiagram";
import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { ProjectCover } from "@/components/ProjectCover";
import { getProjectBySlug, getProjectSlugs, projects } from "@/data/projects";

type ProjectPageProps = PageProps<"/projects/[slug]">;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Проект не найден" };
  }

  return {
    title: project.title,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

function SectionBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-t border-border pt-10">
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <article className="pb-20">
      <div className="border-b border-border bg-background-secondary">
        <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <FadeIn>
            <Link
              href="/#projects"
              className="text-sm font-medium text-foreground-muted transition-colors hover:text-accent"
            >
              ← Все проекты
            </Link>
            <p className="mt-6 text-sm font-medium tracking-wide text-accent uppercase">
              {project.category}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-muted sm:text-lg">
              {project.shortDescription}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl ? (
                <Button href={project.githubUrl} external>
                  GitHub
                </Button>
              ) : null}
              {project.demoUrl ? (
                <Button href={project.demoUrl} variant="secondary" external>
                  Demo
                </Button>
              ) : null}
            </div>
          </FadeIn>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-xl border border-border bg-background-secondary">
            <ProjectCover
              src={project.coverImage}
              alt={`Обложка проекта ${project.title}`}
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </FadeIn>

        <div className="mx-auto mt-12 max-w-3xl space-y-10">
          <SectionBlock title="Обзор">
            <p className="leading-relaxed text-foreground-muted">
              {project.shortDescription}
            </p>
            <p className="mt-4 leading-relaxed text-foreground-muted">
              <span className="font-medium text-foreground">Роль: </span>
              {project.role}
            </p>
          </SectionBlock>

          <SectionBlock title="Проблема">
            <p className="leading-relaxed text-foreground-muted">
              {project.problem}
            </p>
          </SectionBlock>

          <SectionBlock title="Архитектура">
            <ArchitectureDiagram steps={project.solutionSteps} />
            {project.architecture ? (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {Object.entries(project.architecture).map(([key, values]) =>
                  values && values.length > 0 ? (
                    <div key={key}>
                      <h3 className="text-sm font-semibold tracking-wide text-foreground uppercase">
                        {key}
                      </h3>
                      <ul className="mt-3 space-y-1.5 text-sm text-foreground-muted">
                        {values.map((value) => (
                          <li key={value}>• {value}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null,
                )}
              </div>
            ) : null}
          </SectionBlock>

          <SectionBlock title="Использованные технологии">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} tone="accent">
                  {tech}
                </Badge>
              ))}
            </div>
          </SectionBlock>

          {project.challenges && project.challenges.length > 0 ? (
            <SectionBlock title="Инженерные сложности">
              <ul className="space-y-3">
                {project.challenges.map((item) => (
                  <li
                    key={item}
                    className="leading-relaxed text-foreground-muted"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </SectionBlock>
          ) : null}

          <SectionBlock title="Реализация">
            <ul className="space-y-3">
              {project.implementation.map((item) => (
                <li
                  key={item}
                  className="leading-relaxed text-foreground-muted"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </SectionBlock>

          <SectionBlock title="Результаты">
            <dl className="grid gap-4 sm:grid-cols-3">
              {project.results.map((result) => (
                <div
                  key={result.label}
                  className="rounded-lg border border-border bg-background-secondary p-4"
                >
                  <dt className="text-xs font-medium tracking-wide text-success uppercase">
                    {result.label}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-foreground">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>
          </SectionBlock>

          {project.conclusions && project.conclusions.length > 0 ? (
            <SectionBlock title="Выводы">
              <ul className="space-y-3">
                {project.conclusions.map((item) => (
                  <li
                    key={item}
                    className="leading-relaxed text-foreground-muted"
                  >
                    • {item}
                  </li>
                ))}
              </ul>
            </SectionBlock>
          ) : null}

          <nav
            className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:justify-between"
            aria-label="Навигация по проектам"
          >
            {prev ? (
              <Link
                href={`/projects/${prev.slug}`}
                className="text-sm text-foreground-muted hover:text-accent"
              >
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link
                href={`/projects/${next.slug}`}
                className="text-sm text-foreground-muted hover:text-accent sm:text-right"
              >
                {next.title} →
              </Link>
            ) : null}
          </nav>
        </div>
      </div>
    </article>
  );
}
