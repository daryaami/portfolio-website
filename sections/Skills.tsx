import { Badge } from "@/components/Badge";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { skillCategories } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 bg-background-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Навыки"
          title="Компетенции"
          description="Технологии и инструменты, с которыми работаю."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <FadeIn key={category.title} delay={index * 0.05}>
              <div className="h-full rounded-xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
