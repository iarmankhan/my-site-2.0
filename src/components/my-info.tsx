import Image from "next/image"
import Link from "next/link"

export const MyInfo = () => {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden border-b-4 border-black">
      <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 py-24">
        <div className="animate-fade-in">
          {/* Header with photo on small screens */}
          <div className="flex items-start gap-4 lg:grid lg:grid-cols-2 lg:gap-12">
            <div className="space-y-8 flex-1">
              <div className="space-y-4">
                <h1 className="font-bold text-5xl md:text-7xl text-black leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="relative inline-block">
                    Arman
                    <span className="absolute bottom-2 left-0 w-full h-3 bg-yellow-400 -z-10" />
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-black">
                  A senior{" "}
                  <span className="font-bold bg-black text-white px-2 py-1">
                    fullstack engineer
                  </span>{" "}
                  based in India
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-black btn-brutalist-primary hover:bg-white hover:text-black"
                >
                  Contact Me →
                </Link>
                <Link
                  href="/assets/Amaan-FullStack-Resume.pdf"
                  download
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black bg-white btn-brutalist hover:bg-black hover:text-white"
                >
                  Download Resume ↓
                </Link>
              </div>
            </div>

            {/* Photo - small on mobile, larger on desktop */}
            <div className="relative shrink-0 w-24 sm:w-32 lg:w-full lg:max-w-sm lg:mx-auto lg:mr-0">
              {/* Decorative background */}
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-full h-full bg-yellow-400 brutalist-border" />
              <div className="relative img-brutalist bg-white">
                <Image
                  src="/assets/profile.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
