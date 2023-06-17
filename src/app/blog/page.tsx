import { Metadata } from "next"
import Link from "next/link"
import { allBlogs } from "contentlayer/generated"
import { Calendar } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
}

export default async function Blog() {
  return (
    <section>
      <h1 className="font-bold text-3xl mb-5">Blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <div key={post.slug} className="space-y-1 mb-4">
            <Link
              href={`/blog/${post.slug}`}
              className="font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block"
            >
              <h2 className="font-medium text-lg decoration-dashed hover:underline">
                {post.title}
              </h2>
            </Link>

            <div className="opacity-80 flex items-center space-x-2 undefined">
              <Calendar size={16} />
              <span className="sr-only">Posted on:</span>
              <span className="text-sm">{post.publishedAt}</span>
            </div>
            <p>{post.summary}</p>
          </div>
        ))}
    </section>
  )
}
