import { siteConfig } from "@/data/site";

export function JsonLdPerson() {
  const sameAs = [
    siteConfig.socials.github,
    siteConfig.socials.telegram,
    ...(siteConfig.socials.linkedin ? [siteConfig.socials.linkedin] : []),
  ];

  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteConfig.url,
    email: siteConfig.email,
    sameAs,
    description: siteConfig.tagline,
    knowsAbout: siteConfig.specialization,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Университет ИТМО",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
