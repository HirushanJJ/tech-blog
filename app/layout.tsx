import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TechInsights Blog',
  description: 'AI, VPNs, Cloud Hosting, Design Tools & DevOps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                TechInsights
              </a>
              <div className="hidden md:flex gap-6">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition">Home</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">About</a>
                <a href="#" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        {children}
        <footer className="bg-gray-900 text-white py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-gray-400">&copy; 2026 TechInsights. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}