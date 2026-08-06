import { Badge } from "@/components/Badge";
import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { HeroVisual } from "@/components/HeroVisual";
import { siteConfig } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="grid-pattern pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent uppercase">
            {siteConfig.role}
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {siteConfig.name}
          </h1>
          <div className="mt-5 flex flex-wrap gap-2">
            {siteConfig.specialization.map((item) => (
              <Badge key={item} tone="accent">
                {item}
              </Badge>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-muted sm:text-lg">
            {siteConfig.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/#projects">
              Смотреть проекты
              <span aria-hidden>→</span>
            </Button>
            <Button href={siteConfig.socials.github} variant="secondary" external>
              GitHub
            </Button>
            {siteConfig.socials.linkedin ? (
              <Button href={siteConfig.socials.linkedin} variant="secondary" external>
                LinkedIn
              </Button>
            ) : null}
            <Button href={siteConfig.socials.telegram} variant="ghost" external>
              Telegram
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <HeroVisual />
        </FadeIn>
      </div>
    </section>
  );
}
