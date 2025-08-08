import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import PageTransitionWrapper from "@/components/page-transition-wrapper"; // client wrapper

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

export const metadata = {
  title: "Japhet Cordova – Full Stack Developer",
  description: "Modern, SEO-optimized portfolio for recruiters and collaborators.",
  openGraph: {
    title: "Japhet Cordova – Full Stack Developer",
    description: "Modern, SEO-optimized portfolio for recruiters and collaborators.",
    url: "https://next-japhetcordova.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://next-japhetcordova.vercel.app/og-image.jpg",
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
    images: ["https://next-japhetcordova.vercel.app/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico", // Add your favicon path here
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
