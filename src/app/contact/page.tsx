import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react"
import { ContactChip } from "@/components/contact-chip"

export default async function ContactMe() {
  return (
    <div className="max-w-4xl mx-auto my-4">
      <h1 className="font-bold text-3xl mb-5">Get in touch</h1>

      <div className="mt-8">
        <p className="max-w-2xl">
          I&apos;m currently looking for new opportunities. If you have a
          project that you want to get started, think you need my help with
          something or just fancy saying hey, then get in touch.
        </p>

        <div className="flex gap-2 mt-4 mb-2 mx-2 md:mx-0">
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
    </div>
  )
}
