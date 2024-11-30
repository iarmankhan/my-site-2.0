import Image from "next/image"
import Link from "next/link"

export const MyInfo = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-24">
        <div className="grid items-center justify-center grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          <div className="space-y-8 animate-fade-in">
            <h1 className="font-extrabold my-4 text-5xl md:text-7xl bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Hi, I&apos;m Arman
            </h1>
            <div className="space-y-4">
              <p className="text-xl sm:text-2xl text-blue-200">
                A senior{" "}
                <span className="text-blue-400">fullstack engineer</span> based
                in India.
              </p>
              <p className="text-lg sm:text-xl text-blue-200 leading-relaxed">
                I am building software since 2018. I help startups and
                businesses build their software solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Contact Me →
              </Link>
              <Link
                href="/assets/Amaan-FullStack-Resume.pdf"
                download
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-blue-400 bg-blue-400/10 hover:bg-blue-400/20 rounded-lg border border-blue-400/20 hover:border-blue-400/30 transition-all duration-300 transform hover:scale-105"
              >
                Download Resume ↓
              </Link>
            </div>
          </div>

          <div className="relative mx-auto lg:mr-0 w-full max-w-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10" />
            <div className="bg-white/5 backdrop-blur-2xl rounded-3xl p-4 border border-white/10">
              <Image
                src="/assets/profile.png"
                alt="Profile"
                width={500}
                height={500}
                priority
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
