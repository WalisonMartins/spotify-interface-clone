import './globals.css'
import { Inter } from 'next/font/google'
// These styles apply to every route in the application
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 bg-gradient-to-t text-zinc-50">{children}</body>
    </html>
  )
}
