import '@/app/globals.css'
import '@devnomic/marquee/dist/index.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = cookies().get('Next-Locale')?.value || 'en'

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn('min-h-screen bg-background', inter.className)}>
        {children}
      </body>
    </html>
  )
}
