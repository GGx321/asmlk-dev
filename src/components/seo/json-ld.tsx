const SITE_URL = "https://asmlk.dev";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Alex Samoliuk",
  url: SITE_URL,
  jobTitle: "Fullstack Developer",
  knowsAbout: [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "Web3",
    "Blockchain",
  ],
  sameAs: [
    "https://github.com/asmlk",
    "https://t.me/asmlk",
    "https://linkedin.com/in/asmlk",
  ],
};

const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Alex Samoliuk — Fullstack Developer",
  url: SITE_URL,
  description:
    "Fullstack-разработчик. Создаю веб-продукты для предпринимателей.",
};

export function JsonLd(): React.ReactElement {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_SCHEMA),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(WEBSITE_SCHEMA),
        }}
      />
    </>
  );
}
