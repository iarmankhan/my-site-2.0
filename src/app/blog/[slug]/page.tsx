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
    <section className="relative min-h-[calc(100vh-4rem)] py-10 sm:py-16 lg:py-24 bg-white">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-white brutalist-border p-8 mb-12">
          <div className="relative">
            <h1 className="font-bold text-4xl md:text-5xl text-black mb-6">
              <Balancer>{post.title}</Balancer>
            </h1>

            <div className="flex items-center space-x-2 text-sm text-black">
              <Calendar size={16} className="text-black" />
              <time dateTime={post.publishedAt}>
                {post.publishedAt}
              </time>
            </div>
          </div>
        </div>

        <article className="relative bg-white brutalist-border p-8">
          <div
            className="relative prose prose-lg max-w-none
                       prose-headings:font-bold prose-headings:text-black
                       prose-h1:text-3xl prose-h1:text-black
                       prose-h2:text-2xl prose-h2:text-black
                       prose-h3:text-xl prose-h3:text-black
                       prose-p:text-lg prose-p:text-black
                       prose-code:text-black prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:border-2 prose-code:border-black prose-code:font-mono
                       prose-pre:bg-gray-100 prose-pre:border-2 prose-pre:border-black
                       prose-a:text-black prose-a:no-underline prose-a:border-b-2 prose-a:border-black hover:prose-a:bg-black hover:prose-a:text-white
                       prose-strong:text-black prose-strong:font-bold
                       prose-blockquote:bg-gray-100 prose-blockquote:border-l-4 prose-blockquote:border-black
                       prose-blockquote:p-4
                       prose-blockquote:not-italic prose-blockquote:text-black
                       prose-ul:text-black prose-li:text-black
                       prose-img:border-2 prose-img:border-black"
          >
            <Mdx code={post.body.code} />
          </div>
        </article>
      </div>
    </section>
  )
}
