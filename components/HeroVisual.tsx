import Image from "next/image";
import { siteConfig } from "@/data/site";

export function HeroVisual() {
  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-background-secondary">
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgb(226 232 240 / 0.7) 1px, transparent 1px), linear-gradient(to bottom, rgb(226 232 240 / 0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
        aria-hidden
      />

      <div className="absolute inset-[15%] flex flex-col items-center rounded-3xl border border-border bg-white px-[10%] pt-[10%] shadow-sm">
        <div className="relative size-28 shrink-0 overflow-hidden rounded-full border-2 border-accent bg-accent/10 sm:size-32">
          <Image
            src="/images/face2.jpg"
            alt={siteConfig.name}
            fill
            priority
            unoptimized
            className="object-cover object-[center_20%] scale-120"
            sizes="128px"
          />
        </div>

        <div className="mt-8 h-4 w-full rounded-full bg-border" aria-hidden />
        <div className="mt-3 h-3.5 w-[85%] rounded-full bg-border" aria-hidden />

        <div className="mt-6 flex w-4/5 justify-center gap-2" aria-hidden>
          <span className="h-6 flex-1 rounded-lg bg-accent" />
          <span className="h-6 flex-1 rounded-lg border border-border bg-white" />
          <span className="h-6 flex-1 rounded-lg border border-border bg-white" />
        </div>

        <p className="mt-auto pt-6 mb-[10%] text-sm text-foreground-muted">
          {siteConfig.role}
        </p>
      </div>
    </div>
  );
}
