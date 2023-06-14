import Image from "next/image"
import { Socials } from "@/components/socials"

export const MyInfo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4">
      <div className="text-center md:text-left">
        <span className="text-lg md:text-xl font-medium">Welcome 👋🏼, I am</span>
        <h1 className="font-extrabold my-4 text-3xl md:text-8xl">Arman Khan</h1>
        <p className="font-semibold text-gray-600 mt-4 text-2xl md:text-4xl">
          Full stack engineer
        </p>

        <div className="mt-4 flex justify-center md:justify-normal">
          <Socials />
        </div>
      </div>

      <div className="ml-0 mt-6 md:mt-0 md:ml-4 lg:ml-10">
        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            className="rounded-full bg-gray-200"
            src="/assets/programming-me.png"
            priority
            width={350}
            height={350}
            alt={"Avatar"}
          />
        </div>
      </div>
    </div>
  )
}
