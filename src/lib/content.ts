import { essays, notes } from "#velite"
import type { Essay, Note } from "#velite"

export type { Essay, Note }

export type WritingItem =
  | { type: "essay"; data: Essay }
  | { type: "note"; data: Note }

export function getRecentWriting(count: number): WritingItem[] {
  const published = essays.filter((e) => !e.draft)

  const items: WritingItem[] = [
    ...published.map((e) => ({ type: "essay" as const, data: e })),
    ...notes.map((n) => ({ type: "note" as const, data: n })),
  ]

  return items
    .sort(
      (a, b) =>
        new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
    )
    .slice(0, count)
}

export function getAllWriting(): WritingItem[] {
  const published = essays.filter((e) => !e.draft)

  const items: WritingItem[] = [
    ...published.map((e) => ({ type: "essay" as const, data: e })),
    ...notes.map((n) => ({ type: "note" as const, data: n })),
  ]

  return items.sort(
    (a, b) =>
      new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  )
}

export function getEssayBySlug(slug: string): Essay | undefined {
  return essays.find((e) => e.slug === slug && !e.draft)
}
