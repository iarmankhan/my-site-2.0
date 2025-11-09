import Link from "next/link"
import { Code2, Github, Instagram, Linkedin, Terminal } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-auto border-t-4 border-black bg-white">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4 relative">
            <div className="flex items-center space-x-2">
              <Terminal className="w-6 h-6 text-black" />
              <h3 className="text-xl font-bold text-black">Arman Khan</h3>
            </div>
            <p className="text-black max-w-xs">
              Senior Fullstack Engineer crafting elegant solutions to complex
              problems
            </p>
          </div>

          <nav className="space-y-4 relative">
            <h3 className="text-lg font-bold text-black">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-black hover:bg-black hover:text-white px-2 py-1 transition-all duration-200"
                >
                  Blog
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/#projects"
                  className="inline-block text-black hover:bg-black hover:text-white px-2 py-1 transition-all duration-200"
                >
                  Projects
                </Link>
              </li> */}
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-black hover:bg-black hover:text-white px-2 py-1 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="space-y-4 relative">
            <h3 className="text-lg font-bold text-black mb-4">Connect</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/iarmankhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 text-black hover:bg-black hover:text-white px-4 py-2 brutalist-border transition-all duration-200 w-fit"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href="https://instagram.com/codingwitharman"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 text-black hover:bg-black hover:text-white px-4 py-2 brutalist-border transition-all duration-200 w-fit"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Instagram</span>
              </a>
              <a
                href="https://linkedin.com/in/iarmankhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center space-x-3 text-black hover:bg-black hover:text-white px-4 py-2 brutalist-border transition-all duration-200 w-fit"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative mt-12 pt-8 border-t-2 border-black">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-black">
              <Code2 className="w-4 h-4" />
              <p> {currentYear} Arman Khan. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-2 text-black">
              <p>Built with</p>
              <span className="font-bold">Next.js</span>
              <p>&</p>
              <span className="font-bold">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
