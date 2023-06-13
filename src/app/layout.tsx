import './globals.css'
import {Raleway} from 'next/font/google'
import {TopBar} from "@/components/top-bar";
import {cn} from "@/lib/utils";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata = {
  title: 'Arman Khan',
  description: 'Fullstack Engineer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(raleway.className, 'max-w-screen-2xl mx-auto')}>
        <TopBar />
        {children}
      </body>
    </html>
  )
}
