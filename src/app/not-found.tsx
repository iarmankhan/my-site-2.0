import Link from "next/link";

export default function NotFound() {
  return (
    <div className="editorial-page flex min-h-[55vh] flex-col justify-center">
      <p className="page-kicker">Page not found</p>
      <h1 className="page-title">404</h1>
      <p className="mt-4 text-(--color-foreground-muted)">
        This page doesn't exist. Maybe it never did.
      </p>
      <Link
        href="/"
        className="mt-6 text-sm text-(--color-foreground-muted) hover:text-(--color-accent) underline underline-offset-3"
      >
        Go home
      </Link>
    </div>
  );
}
