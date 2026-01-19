import type { Metadata } from 'next'
import { Work_Sans } from 'next/font/google'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-work-sans',
    weight: ['300', '400', '500', '600', '700', '800', '900']
})

export const metadata: Metadata = {
  title: 'Horizon Vert: The Ultimate Goal Giveaway',
  description: 'Enter for a chance to win the Golden Ticket and a year of healthy living.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="light">
      <body className={`${workSans.variable} font-display bg-background-light dark:bg-background-dark text-[#1c150d] dark:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}
