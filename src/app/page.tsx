import Link from "next/link";
import Image from "next/image";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/seo";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.author.name,
  url: siteConfig.url,
  email: siteConfig.author.email,
  jobTitle: "Principal Engineer",
  sameAs: [
    siteConfig.author.twitterUrl,
    siteConfig.author.github,
    siteConfig.author.linkedin,
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
  author: { "@type": "Person", name: siteConfig.author.name },
};

export default function Home() {
  return (
    <div className="home-hero">
      <JsonLd data={personJsonLd} />
      <JsonLd data={websiteJsonLd} />
      <div>
        <h1 className="home-title">I build products, systems, and tools.</h1>
        <div className="home-bio">
          <p>
            I&apos;m Arman. I run{" "}
            <a
              className="text-link"
              href="https://plixy.tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Plixy.tech</strong>
            </a>{" "}
            and publish open source developer tools. I work across mobile apps,
            backend platforms, and AI.
          </p>
          <p>
            At <strong>Somethings</strong>, I&apos;m a founding engineer who has
            built across the app, backend, staff dashboards, and production AI.
            My earlier work spans legal tech and commerce.
          </p>
        </div>
        <div className="home-links">
          <Link href="/projects">Explore my work ↗</Link>
          <Link href="/writing">Read my writing ↗</Link>
        </div>
      </div>
      <figure className="hero-art">
        <Image
          src="/assets/arman-city.webp"
          alt="An original painting of an imagined city filled with gardens and connecting paths"
          width={768}
          height={1152}
          priority
        />
      </figure>
    </div>
  );
}
