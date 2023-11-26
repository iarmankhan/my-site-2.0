import Image from "next/image"

export const MyInfo = () => {
  return (
    <section className="py-10 sm:py-16 lg:py-24 bg-slate-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center justify-center grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          <div>
            <h1 className="font-extrabold my-4 text-3xl md:text-7xl">
              Hi, I&apos;m Arman
            </h1>
            <p className="font-normal text-gray-600 mt-8 text-lg md:text-xl">
              A senior{" "}
              <span className="font-semibold text-blue-500">
                fullstack engineer
              </span>{" "}
              based in India.
            </p>
            <p className="font-normal text-gray-600 mt-4 text-lg md:text-xl max-w-[600px]">
              I am building software since 2018. I help startups and businesses
              build their software solutions.
            </p>

            <div className="mt-6 flex justify-center md:justify-normal">
              <a className="bg-black hover:bg-blue-600 text-white font-bold py-2 px-4 cursor-pointer" href='mailto:work.armankhan@gmail.com'>
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center p-4 sm:p-6">
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
      </div>
    </section>
  )
}
