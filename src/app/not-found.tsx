import Link from "next/link"

export default function NotFound() {
  return (
    <div className="animate-in flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="font-bold text-6xl tracking-tight">404</h1>
      <p className="mt-4 text-(--color-foreground-muted)">
        This page doesn't exist. Maybe it never did.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm text-(--color-foreground-muted) hover:text-(--color-accent) transition-colors underline underline-offset-3"
      >
        Go home
      </Link>
    </div>
  )
}
