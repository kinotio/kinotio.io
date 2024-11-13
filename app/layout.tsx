import '@/app/globals.css'
import '@devnomic/marquee/dist/index.css'

import { Inter } from 'next/font/google'
import { cookies } from 'next/headers'
import Script from 'next/script'

import { cn } from '@/lib/utils'

const inter = Inter({ subsets: ['latin'] })

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode
}>) => {
  const locale = cookies().get('Next-Locale')?.value || 'en'

  return (
    <html lang={locale} suppressHydrationWarning>
      <Script
        async
        src="https://analytics.kinotio.io/script.js"
        data-website-id="b612e903-cfc3-4bf9-8376-b99ce7b8388f"
      />
      <Script
        async
        src="https://kinotio.instatus.com/en/6f8e5fad/widget/script.js"
      />
      <body className={cn('min-h-screen bg-background', inter.className)}>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
