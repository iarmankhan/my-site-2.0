import Link from "next/link"
import { Code2, Github, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t-4 border-foreground bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-foreground uppercase">
              Arman Khan
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer building web, mobile, and AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-foreground hover:text-foreground bg-yellow-accent px-3 py-1 transition-all duration-200 font-medium"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/apps"
                  className="inline-block text-foreground hover:text-foreground bg-yellow-accent px-3 py-1 transition-all duration-200 font-medium"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-foreground hover:text-foreground bg-yellow-accent px-3 py-1 transition-all duration-200 font-medium"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground uppercase tracking-wide">
              Connect
            </h3>
            <div className="flex gap-3">
              <a
                href="https://github.com/iarmankhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 brutalist-border text-foreground bg-yellow-accent transition-all duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/codingwitharman"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 brutalist-border text-foreground bg-yellow-accent transition-all duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/iarmankhan"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 brutalist-border text-foreground bg-yellow-accent transition-all duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-foreground">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>© {currentYear} Arman Khan. All rights reserved.</span>
            </p>
            <p className="flex items-center gap-2">
              <span>Built with</span>
              <span className="font-bold text-foreground">Next.js</span>
              <span>&</span>
              <span className="font-bold text-foreground">TypeScript</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
