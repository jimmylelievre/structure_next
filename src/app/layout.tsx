import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Providers } from './_trpc/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My App',
  description: "Apprendre l'anglais",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
