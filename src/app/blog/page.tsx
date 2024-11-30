import { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { ArrowRight, BookOpen, Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default async function Blog() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-blue-400" />
            <h1 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Blog
            </h1>
          </div>

          <p className="text-lg text-blue-200">
            Sharing my insights and experiences in software development, system
            design, and tech best practices
          </p>
        </div>

        {allBlogs.length === 0 ? (
          <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-blue-500/20 text-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />
            <p className="text-blue-200 text-lg">
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
                  <article
                    className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-6 border border-blue-500/20
                                    transition-all duration-300 hover:transform hover:-translate-y-1
                                    hover:shadow-2xl hover:shadow-blue-500/20 hover:border-blue-500/40"
                  >
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />

                    <div className="relative flex justify-between items-start">
                      <div className="space-y-3">
                        <h2 className="font-semibold text-xl text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                          {post.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-blue-300">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} className="text-blue-400" />
                            <time
                              dateTime={post.publishedAt}
                              className="font-mono"
                            >
                              {post.publishedAt}
                            </time>
                          </div>
                        </div>
                        <p className="text-blue-200/80 line-clamp-2">
                          {post.summary}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-blue-400 group-hover:translate-x-1 transition-transform duration-300" />
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
