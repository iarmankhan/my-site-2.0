import {GithubIcon, LinkedinIcon} from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center  p-24">
      <h1 className='text-9xl font-extrabold'>Hey 👋🏼</h1>
      <p className='text-4xl mt-8 font-semibold'>Fullstack engineer</p>

      <ul className="flex space-x-4 mt-6">
        <li>
          <a href="https://linkedin.com/in/iarmankhan" target="_blank" rel="noopener noreferrer" title='LinkedIn'>
            <LinkedinIcon className='border-2 w-10 h-10 p-1 rounded-md hover:bg-gray-200 transition-all' />
          </a>
        </li>
        <li>
          <a href="https://github.com/iarmankhan" target="_blank" rel="noopener noreferrer" title='Github'>
            <GithubIcon className='border-2 w-10 h-10 p-1 rounded-md hover:bg-gray-200 transition-all' />
          </a>
        </li>
      </ul>
    </main>
  )
}

