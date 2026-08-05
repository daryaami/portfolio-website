import { Button } from "@/components/Button";
import { FadeIn } from "@/components/FadeIn";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

const contacts = [
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
  {
    label: "Telegram",
    href: siteConfig.socials.telegram,
    value: siteConfig.telegramHandle,
  },
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    value: "daryaami",
  },
  ...(siteConfig.socials.linkedin
    ? [
        {
          label: "LinkedIn",
          href: siteConfig.socials.linkedin,
          value: "LinkedIn",
        },
      ]
    : []),
];

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Контакты"
          title="Связаться"
          description="Открыта к предложениям по ML Engineer ролям и интересным проектам."
        />
        <FadeIn className="mx-auto max-w-xl text-center">
          <ul className="space-y-4">
            {contacts.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    item.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center justify-between rounded-lg border border-border bg-white px-5 py-4 text-left transition-colors hover:border-accent/40"
                >
                  <span className="text-sm text-foreground-muted">{item.label}</span>
                  <span className="text-sm font-medium text-foreground group-hover:text-accent">
                    {item.value}
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href={siteConfig.cvUrl} external>
              Скачать CV
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
