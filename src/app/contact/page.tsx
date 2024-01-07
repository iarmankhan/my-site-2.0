import { ContactForm } from "@/components/contact-form"

export default async function ContactMe() {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="font-bold text-4xl text-center">Get in touch</h1>

      <div className="flex flex-col items-center py-8">
        <p className="max-w-2xl text-center">
          I&apos;m currently looking for new opportunities. If you have a
          project that you want to get started, think you need my help with
          something or just fancy saying hey, then get in touch.
        </p>
      </div>
 
        <div className="mt-8">
          <ContactForm />
        </div>
    </div>
  )
}
