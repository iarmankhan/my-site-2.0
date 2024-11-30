import { notFound } from "next/navigation"
import { allBlogs } from "contentlayer/generated"
import { Calendar } from "lucide-react"
import Balancer from "react-wrap-balancer"
import { Mdx } from "@/components/mdx"

export async function generateStaticParams() {
  return allBlogs.map((blog) => ({
    slug: blog.slug,
  }))
}

export default async function Blog(props: {
  params: Promise<{ slug: string }>
}) {
  const params = await props.params
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section className="relative min-h-[calc(100vh-4rem)] py-10 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-blue-500/20 mb-12">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />

          <div className="relative">
            <h1 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              <Balancer>{post.title}</Balancer>
            </h1>

            <div className="flex items-center space-x-2 text-sm text-blue-300">
              <Calendar size={16} className="text-blue-400" />
              <time dateTime={post.publishedAt} className="font-mono">
                {post.publishedAt}
              </time>
            </div>
          </div>
        </div>

        <article className="relative bg-white/5 backdrop-blur-2xl rounded-2xl p-8 border border-blue-500/20">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl -z-10" />

          <div
            className="relative prose prose-invert prose-blue max-w-none
                       prose-headings:font-bold prose-headings:text-white
                       prose-h1:text-3xl prose-h1:bg-gradient-to-r prose-h1:from-blue-400 prose-h1:to-cyan-400 prose-h1:bg-clip-text prose-h1:text-transparent
                       prose-h2:text-2xl prose-h2:text-blue-100
                       prose-h3:text-xl prose-h3:text-blue-100
                       prose-p:text-lg prose-p:text-slate-200
                       prose-code:text-blue-300 prose-code:bg-blue-950/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                       prose-pre:bg-blue-950/50
                       prose-a:text-blue-400 prose-a:no-underline hover:prose-a:text-blue-300
                       prose-strong:text-blue-200
                       prose-blockquote:bg-blue-950/50 prose-blockquote:border-l-4 prose-blockquote:border-blue-500
                       prose-blockquote:rounded-lg prose-blockquote:p-4
                       prose-blockquote:not-italic prose-blockquote:text-slate-200
                       prose-ul:text-slate-200 prose-li:text-slate-200
                       prose-img:rounded-xl"
          >
            <Mdx code={post.body.code} />
          </div>
        </article>
      </div>
    </section>
  )
}
