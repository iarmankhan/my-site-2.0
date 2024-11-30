import { ContactForm } from "@/components/contact-form"

export default async function ContactMe() {
  return (
    <main className="flex-1 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Content */}
        <ContactForm />
      </div>
    </main>
  )
}
