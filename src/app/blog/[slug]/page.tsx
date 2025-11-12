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
    <section className="relative min-h-[calc(100vh-4rem)] py-10 sm:py-16 lg:py-24 bg-background">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative bg-background brutalist-border p-8 mb-12">
          <div className="relative">
            <h1 className="font-bold text-4xl md:text-5xl text-foreground mb-6">
              <Balancer>{post.title}</Balancer>
            </h1>

            <div className="flex items-center space-x-2 text-sm text-foreground">
              <Calendar size={16} className="text-foreground" />
              <time dateTime={post.publishedAt}>{post.publishedAt}</time>
            </div>
          </div>
        </div>

        <article className="relative bg-background brutalist-border p-8">
          <div
            className="relative prose prose-lg max-w-none dark:prose-invert
                       prose-headings:font-bold prose-headings:text-foreground
                       prose-h1:text-3xl prose-h1:text-foreground
                       prose-h2:text-2xl prose-h2:text-foreground
                       prose-h3:text-xl prose-h3:text-foreground
                       prose-p:text-lg prose-p:text-foreground
                       prose-code:text-foreground prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:border-2 prose-code:border-foreground prose-code:font-mono
                       prose-pre:bg-muted prose-pre:border-2 prose-pre:border-foreground
                       prose-a:text-foreground prose-a:no-underline prose-a:border-b-2 prose-a:border-foreground hover:prose-a:bg-foreground hover:prose-a:text-background
                       prose-strong:text-foreground prose-strong:font-bold
                       prose-blockquote:bg-muted prose-blockquote:border-l-4 prose-blockquote:border-foreground
                       prose-blockquote:p-4
                       prose-blockquote:not-italic prose-blockquote:text-foreground
                       prose-ul:text-foreground prose-li:text-foreground
                       prose-img:border-2 prose-img:border-foreground"
          >
            <Mdx code={post.body.code} />
          </div>
        </article>
      </div>
    </section>
  )
}
