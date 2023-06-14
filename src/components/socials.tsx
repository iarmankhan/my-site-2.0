import { GithubIcon, LinkedinIcon } from "lucide-react"

export const Socials = () => {
  return (
    <ul className="flex space-x-4 mt-6">
      <li>
        <a
          href="https://linkedin.com/in/iarmankhan"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <LinkedinIcon className="border-2 w-10 h-10 p-1 rounded-md hover:bg-gray-200 transition-all" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/iarmankhan"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
        >
          <GithubIcon className="border-2 w-10 h-10 p-1 rounded-md hover:bg-gray-200 transition-all" />
        </a>
      </li>
    </ul>
  )
}
