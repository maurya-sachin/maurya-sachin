import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title:
    "Sachin Maurya - Frontend Developer | React.js Specialist | UI/UX Developer",
  description:
    "Experienced Frontend Developer specializing in React.js, Next.js, JavaScript. Expert in performance optimization, web accessibility, GSAP animations, and modern UI/UX development. 2+ years building scalable web applications.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "React.js Specialist",
    "Next.js Developer",
    "JavaScript Developer",
    "UI Developer",
    "UX Developer",
    "Performance Optimization",
    "Web Accessibility",
    "GSAP Animation",
    "Tailwind CSS",
    "Redux Developer",
    "GraphQL Developer",
    "Responsive Design",
    "Modern Web Development",
    "Sachin Maurya",
    "Frontend Developer India",
    "React Developer Delhi",
    "Web Developer Portfolio",
    "Junior UI Developer",
    "Kreate Technologies",
    "WCAG Compliance",
    "Lighthouse Performance",
    "Component Library",
    "Enterprise Web Applications",
  ],
  authors: [{ name: "Sachin Maurya", url: "https://github.com/maurya-sachin" }],
  creator: "Sachin Maurya",
  publisher: "Sachin Maurya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://maurya-sachin.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://maurya-sachin.vercel.app",
    title: "Sachin Maurya - Frontend Developer | React.js Specialist",
    description:
      "Experienced Frontend Developer specializing in React.js, Next.js, JavaScript with expertise in performance optimization and modern web development",
    siteName: "Sachin Maurya Portfolio",
    images: [
      {
        url: "/og-image.png",
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
    description:
      "Frontend Developer specializing in React.js, Next.js, JavaScript. Expert in performance optimization and modern web development.",
    images: ["/og-image.png"],
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
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />

        {/* Theme initialization script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme');
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const mode = theme || (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', mode);
                } catch (e) {
                  console.error('Theme initialization error:', e);
                }
              })();
            `,
          }}
        />

        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased overflow-x-hidden">
        <div id="portal-root"></div>
        {children}
      </body>
    </html>
  );
}
