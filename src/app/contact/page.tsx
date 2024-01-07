import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { ContactChip } from "@/components/contact-chip"
import { ContactForm } from "@/components/contact-form"

export default async function ContactMe() {
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="font-bold text-4xl text-center">Get in touch</h1>

      <div className="flex flex-col items-center py-10">
        <p className="max-w-2xl text-center">
          I&apos;m currently looking for new opportunities. If you have a
          project that you want to get started, think you need my help with
          something or just fancy saying hey, then get in touch.
        </p>

        <div className="flex gap-2 mt-8 mb-2 mx-2 md:mx-0">
          <ContactChip 
            href={"https://github.com/iarmankhan"}
            icon={<GithubIcon />}
            title={"Github"}
          />
          <ContactChip
            href={"https://linkedin.com/in/iarmankhan"}
            icon={<LinkedinIcon />}
            title={"LinkedIn"}
          />
          <ContactChip
            href={"https://twitter.com/codingwitharman"}
            icon={<TwitterIcon />}
            title={"Twitter"}
          />
        </div>
      </div>


      <div className="flex items-center my-8">
          <div className="flex-grow border-t border-gray-300"></div>
          <div className="mx-4 text-gray-500">OR</div>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        <div className="mt-12">
          <h3 className="text-4xl font-bold text-center mb-10">Fill out the form below</h3>
          <ContactForm />
        </div>
    </div>
  )
}
