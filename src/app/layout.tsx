import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransitionWrapper from "@/components/page-transition-wrapper"; // client wrapper
import type { Metadata } from "next";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Centralized site URL and image paths
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const FAVICON = "/favicon.ico";
const APPLE_ICON = "/apple-touch-icon.png";

export const metadata: Metadata = {
  title: "Japhet Cordova – Full Stack Developer",
  description: "Modern, SEO-optimized portfolio for recruiters and collaborators.",
  openGraph: {
    title: "Japhet Cordova – Full Stack Developer",
    description: "Modern, SEO-optimized portfolio for recruiters and collaborators.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Japhet Cordova Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Japhet Cordova – Full Stack Developer",
    description: "Modern, SEO-optimized portfolio for recruiters and collaborators.",
    images: [OG_IMAGE],
  },
  icons: {
    icon: FAVICON,
    shortcut: FAVICON,
    apple: APPLE_ICON,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          themes={["light", "dark", "system"]}
        >
          <PageTransitionWrapper>
            {children}
          </PageTransitionWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
