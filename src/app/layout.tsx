import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'IT Quest 5.0',
  description: 'IT Quest partnership broshure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
