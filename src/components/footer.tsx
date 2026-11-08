import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export function Footer() {
  return (
    <footer className="site-footer">
      <span>
        © {new Date().getFullYear()} {siteConfig.name}
      </span>
      <div className="footer-links">
        <Link href="/experience">Experience</Link>
        <a
          href={siteConfig.author.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a href={`mailto:${siteConfig.author.email}`}>Email</a>
        <a href="/feed.xml">RSS</a>
      </div>
    </footer>
  );
}
