import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Hackath0n',
  description: 'Hackathon partnership broshure',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className=''>
      <body>{children}</body>
    </html>
  )
}
