import { ReactNode } from "react"
import { ArrowUpRightIcon } from "lucide-react"

interface ContactChipProps {
  href: string
  icon: ReactNode
  title: string
}

export function ContactChip({ icon, href, title }: ContactChipProps) {
  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="flex w-full max-w-[200px] border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
    >
      <div className="flex items-center">
        {icon}
        <div className="ml-3">{title}</div>
      </div>
      <ArrowUpRightIcon />
    </a>
  )
}
