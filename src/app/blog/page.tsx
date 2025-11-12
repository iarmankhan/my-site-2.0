import { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { ArrowRight, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default async function Blog() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-16 sm:py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        {/* Section Header */}
        <div className="mb-12 lg:mb-16">
          <div className="inline-block px-4 py-2 bg-yellow-400 brutalist-border mb-4">
            <span className="font-bold text-foreground uppercase text-sm tracking-wide">
              Writing
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            TECHNICAL BLOG
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
            Sharing my insights and experiences in software development, system
            design, and tech best practices
          </p>
        </div>

        {allBlogs.length === 0 ? (
          <div className="relative bg-background brutalist-border p-12 text-center">
            <p className="text-foreground text-lg font-medium">
              No blog posts yet. Check back soon!
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {allBlogs
              .sort((a, b) => {
                if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
                  return -1
                }
                return 1
              })
              .map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="relative bg-background p-8 card-brutalist group-hover:bg-muted transition-colors duration-300">
                    <div className="relative flex justify-between items-start gap-4">
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-muted-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          <Calendar className="w-4 h-4" />
                          <time dateTime={post.publishedAt}>
                            {post.publishedAt}
                          </time>
                        </div>
                        <h2 className="font-bold text-2xl sm:text-3xl text-foreground group-hover:text-muted-foreground transition-colors duration-300">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground group-hover:text-muted-foreground line-clamp-2 transition-colors duration-300 leading-relaxed">
                          {post.summary}
                        </p>
                      </div>
                      <div className="flex items-center justify-center w-10 h-10 bg-yellow-400 brutalist-border-thin group-hover:translate-x-2 transition-transform duration-300">
                        <ArrowRight className="w-5 h-5 text-foreground" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        )}
      </div>
    </section>
  )
}
