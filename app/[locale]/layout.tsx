import type { Metadata } from 'next'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'

import { I18nProviderClient } from '@/locales/client'

import { DATA } from '@/data'

type MetadataProps = {
  params: { locale: string }
}

export const generateMetadata = async ({
  params,
}: MetadataProps): Promise<Metadata> => {
  const locale = params.locale

  return {
    metadataBase: new URL(DATA.url),
    title: {
      default: DATA.name,
      template: `%s | ${DATA.name}`,
    },
    description: DATA.description,
    keywords: DATA.keywords,
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

const SubLayout = ({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProviderClient locale={locale}>
        <div className="min-h-screen bg-gradient-to-br from-black via-[#1a1a2e] to-[#16213e] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5 mix-blend-soft-light"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black opacity-20"></div>

          <Header />
          <main className="container">{children}</main>
          <Footer />
        </div>

        <Toaster />
      </I18nProviderClient>
    </ThemeProvider>
  )
}

export default SubLayout
