import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background-secondary">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-foreground-muted">{siteConfig.role}</p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-foreground-muted">
          <Link href="/#projects" className="hover:text-accent">
            Проекты
          </Link>
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={siteConfig.socials.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent"
          >
            Telegram
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-accent">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
