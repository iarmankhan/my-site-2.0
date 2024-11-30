import { ContactForm } from "@/components/contact-form"

export default async function ContactMe() {
  return (
    <div className="relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      {/* Content */}
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  )
}
