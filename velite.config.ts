import rehypePrettyCode from "rehype-pretty-code"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import remarkGfm from "remark-gfm"
import { defineCollection, defineConfig, s } from "velite"

const essays = defineCollection({
  name: "Essay",
  pattern: "essays/**/*.mdx",
  schema: s
    .object({
      title: s.string().max(200),
      slug: s.slug("essays"),
      date: s.isodate(),
      description: s.string().max(500).optional(),
      featured: s.boolean().default(false),
      draft: s.boolean().default(false),
      metadata: s.metadata(),
      body: s.mdx(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/writing/${data.slug}`,
    })),
})

const notes = defineCollection({
  name: "Note",
  pattern: "notes/**/*.md",
  schema: s
    .object({
      title: s.string().max(200),
      slug: s.slug("notes"),
      date: s.isodate(),
      content: s.markdown(),
    })
    .transform((data) => ({
      ...data,
      permalink: `/writing#${data.slug}`,
    })),
})

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { essays, notes },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: "github-dark-default" }],
      [rehypeAutolinkHeadings, { behavior: "wrap" }],
    ],
  },
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug],
  },
})
