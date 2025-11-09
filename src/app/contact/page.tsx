import { ContactForm } from "@/components/contact-form"

export default async function ContactMe() {
  return (
    <div className="relative bg-white">
      <div className="container mx-auto px-4">
        <ContactForm />
      </div>
    </div>
  )
}
