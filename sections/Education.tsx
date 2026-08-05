import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { coursesPeriod, educationItems } from "@/data/education";

export function Education() {
  const programs = educationItems.filter((item) => item.kind === "program");
  const courses = educationItems.filter((item) => item.kind === "course");

  return (
    <section id="education" className="scroll-mt-20 bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Образование"
          title="Дополнительное образование"
          description="Курсы и повышение квалификации."
        />
        <FadeIn className="mx-auto max-w-2xl space-y-10">
          {programs.map((item) => (
            <div key={item.title} className="border-t border-border pt-6">
              {item.organization ? (
                <p className="text-sm font-medium text-foreground-muted">
                  {item.organization}
                </p>
              ) : null}
              <h3 className="mt-1 text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-foreground-muted">{item.period}</p>
            </div>
          ))}

          {courses.length > 0 ? (
            <div className="border-t border-border pt-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold text-foreground">Курсы</h3>
                <p className="text-sm text-foreground-muted">{coursesPeriod}</p>
              </div>
              <ul className="mt-4 space-y-4">
                {courses.map((course) => (
                  <li key={course.title}>
                    <p className="text-sm leading-relaxed text-foreground">
                      {course.title}
                    </p>
                    {course.organization ? (
                      <p className="mt-0.5 text-sm text-foreground-muted">
                        {course.organization}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </FadeIn>
      </div>
    </section>
  );
}
