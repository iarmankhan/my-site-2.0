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
    <section className="relative min-h-[calc(100vh-4rem)] py-10 sm:py-16 lg:py-24 bg-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BookOpen className="w-8 h-8 text-black" />
            <h1 className="font-bold text-4xl md:text-5xl text-black">
              Technical Blog
            </h1>
          </div>

          <p className="text-lg text-black">
            Sharing my insights and experiences in software development, system
            design, and tech best practices
          </p>
        </div>

        {allBlogs.length === 0 ? (
          <div className="relative bg-white brutalist-border p-8 text-center">
            <p className="text-black text-lg">
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
              .map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block"
                >
                  <article className="relative bg-white p-6 card-brutalist group-hover:bg-black transition-colors duration-200">
                    <div className="relative flex justify-between items-start">
                      <div className="space-y-3">
                        <h2 className="font-bold text-xl text-black group-hover:text-white transition-colors duration-200">
                          {post.title}
                        </h2>
                        <div className="flex items-center space-x-4 text-sm text-black group-hover:text-white transition-colors duration-200">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} className="text-black group-hover:text-white transition-colors duration-200" />
                            <time
                              dateTime={post.publishedAt}
                            >
                              {post.publishedAt}
                            </time>
                          </div>
                        </div>
                        <p className="text-black group-hover:text-white line-clamp-2 transition-colors duration-200">
                          {post.summary}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-black group-hover:text-white group-hover:translate-x-1 transition-all duration-200" />
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
