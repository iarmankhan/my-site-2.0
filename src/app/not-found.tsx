import Link from "next/link";

export default function NotFound() {
  return (
    <div className="interior-page flex min-h-[55vh] flex-col justify-center">
      <h1 className="page-title">Page not found</h1>
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
