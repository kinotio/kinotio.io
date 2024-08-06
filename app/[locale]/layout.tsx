import type { Metadata } from 'next'

import { Navbar } from '@/components/shared/navbar'
import { ThemeProvider } from '@/components/layout/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import { I18nProviderClient } from '@/locales/client'

import { DATA } from '@/data'

type Props = {
  params: { locale: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = params.locale

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    keywords: [
      'Open Source',
      'Develop',
      'Share',
      'Startup',
      'Openly',
      'Imagine',
      'Collaborative',
      'Digital',
      'Software',
      'Application',
    ],
    openGraph: {
      title: `${DATA.name}`,
      description: DATA.description,
      url: DATA.url,
      siteName: `${DATA.name}`,
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    twitter: {
      title: `${DATA.name}`,
      card: 'summary_large_image',
    },
    verification: {
      google: '',
      yandex: '',
    },
  }
}

export default function SubLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={locale}>
        <Navbar />
      </I18nProviderClient>
      <main>{children}</main>
      <Toaster />
    </ThemeProvider>
  )
}
