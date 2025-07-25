import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  preload: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

export const metadata = {
  title: "Sachin Maurya - Frontend Developer | React.js Specialist | UI/UX Developer",
  description: "Experienced Frontend Developer specializing in React.js, Next.js, JavaScript. Expert in performance optimization, web accessibility, GSAP animations, and modern UI/UX development. 2+ years building scalable web applications.",
  keywords: [
    "Frontend Developer", "React Developer", "React.js Specialist", "Next.js Developer",
    "JavaScript Developer", "UI Developer", "UX Developer", "Performance Optimization",
    "Web Accessibility", "GSAP Animation", "Tailwind CSS", "Redux Developer",
    "GraphQL Developer", "Responsive Design", "Modern Web Development", "Sachin Maurya",
    "Frontend Developer India", "React Developer Delhi", "Web Developer Portfolio",
    "Junior UI Developer", "Kreate Technologies", "WCAG Compliance",
    "Lighthouse Performance", "Component Library", "Enterprise Web Applications"
  ],
  authors: [{ name: "Sachin Maurya", url: "https://github.com/maurya-sachin" }],
  creator: "Sachin Maurya",
  publisher: "Sachin Maurya",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://maurya-sachin.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maurya-sachin.vercel.app",
    title: "Sachin Maurya - Frontend Developer | React.js Specialist",
    description: "Experienced Frontend Developer specializing in React.js, Next.js, JavaScript with expertise in performance optimization and modern web development",
    siteName: "Sachin Maurya Portfolio",
    images: [
      {
        url: "https://github.com/maurya-sachin.png",
        width: 1200,
        height: 630,
        alt: "Sachin Maurya - Frontend Developer Portfolio",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sachin Maurya - Frontend Developer | React.js Specialist",
    description: "Frontend Developer specializing in React.js, Next.js, JavaScript. Expert in performance optimization and modern web development.",
    images: ["https://github.com/maurya-sachin.png"],
    creator: "@sachinmaurya",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "technology",
  classification: "Portfolio",
  other: {
    "theme-color": "#3b82f6",
    "color-scheme": "light dark",
    "msapplication-TileColor": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
  }
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="https://github.com/maurya-sachin.png" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="dns-prefetch" href="https://vercel.com" />
        <link rel="dns-prefetch" href="https://github.com" />

        {/* Simplified theme initialization - prevents hydration mismatch */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 
                             (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                  document.documentElement.setAttribute('data-theme', 'dark');
                } else {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              } catch (e) {}
            `,
          }}
        />

        {/* Critical CSS */}
        <style dangerouslySetInnerHTML={{
          __html: `
            .hero-critical {
              min-height: 100vh;
              background: linear-gradient(135deg, #f0f9ff 0%, #faf5ff 100%);
            }
            .dark .hero-critical {
              background: linear-gradient(135deg, #1e293b 0%, #374151 100%);
            }
          `
        }} />
      </head>

      <body
        className="font-sans antialiased overflow-x-hidden"
        suppressHydrationWarning
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50 font-medium"
        >
          Skip to main content
        </a>

        <div id="portal-root"></div>
        {children}
      </body>
    </html>
  );
}