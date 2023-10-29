import { ReactNode } from "react"

interface ContactLayoutProps {
  children: ReactNode
}

export default function ContactLayout({ children }: ContactLayoutProps) {
  return <div className="mt-24">{children}</div>
}
