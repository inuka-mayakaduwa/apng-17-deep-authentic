import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Deep Authentic',
  description: 'Created by Group10 @ APNG Camp 17',
  generator: 'Group-10',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
