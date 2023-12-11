import type { Metadata } from 'next'
import './globals.css'

import { Open_Sans } from "next/font/google"
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'

const font = Open_Sans(
  {
    fallback: ["system-ui", "sans-serif"],
    subsets: ['latin'],
    variable: "--font-open-sans"
  }
)

export const metadata: Metadata = {
  title: 'Gabriel Mazieri',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${font.variable} font-sans px-2 w-full sm:px-12 lg:px-24 xl:px-48`}>
        {/* <Header></Header> */}
        {children}
        {/* <Footer></Footer> */}
      </body>
    </html>
  )
}
