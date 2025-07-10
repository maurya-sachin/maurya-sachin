import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Sachin Maurya - Frontend Developer & React Specialist',
  description: 'Interactive portfolio showcasing modern web development skills with React.js, Next.js, TypeScript, and dark mode. 2+ years experience with proven 80% performance improvements.',
  keywords: [
    'Frontend Developer',
    'React Developer',
    'Next.js Developer',
    'TypeScript Developer',
    'JavaScript Developer',
    'UI/UX Developer',
    'Dark Mode Developer',
    'Performance Optimization',
    'Sachin Maurya',
    'Web Developer India',
    'Interactive Portfolio'
  ],
  authors: [{ name: 'Sachin Maurya', url: 'https://github.com/maurya-sachin' }],
  creator: 'Sachin Maurya',
  publisher: 'Sachin Maurya',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  // metadataBase: new URL('https://sachinmaurya.dev'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    // url: 'https://sachinmaurya.dev',
    title: 'Sachin Maurya - Frontend Developer',
    description: 'Interactive portfolio showcasing modern frontend development skills with dark mode and advanced animations',
    siteName: 'Sachin Maurya Portfolio',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sachin Maurya - Frontend Developer Portfolio',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sachin Maurya - Frontend Developer',
    description: 'Interactive portfolio with dark mode showcasing modern frontend development skills',
    images: ['/og-image.png'],
    creator: '@sachinmaurya',
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div id="portal-root"></div>
        {children}
      </body>
    </html>
  )
}