import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Leena Dudi',
  description: 'Personal portfolio website showcasing experience, projects, research, and hobbies',
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
