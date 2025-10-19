import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppToaster } from "@/components/app-toaster";
// import LayoutTransition from "@/components/layout-transition";
// import { usePathname } from "next/navigation";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Spotify Refresh Token Generator",
  description: "Generate your Spotify refresh token in a few steps.",
  keywords: [
    "Spotify refresh token",
    "Spotify API",
    "Spotify developer",
    "OAuth",
    "Spotify authentication",
    "Spotify app",
    "Spotify token generator",
    "Spotify access token",
    "Spotify scopes",
    "Spotify client id",
    "Spotify client secret"
  ],
  authors: [
    {
      name: "Anda Toshiki",
      url: "https://toshiki.dev"
    }
  ],
  creator: "Anda Toshiki",
  publisher: "Anda Toshiki",
  openGraph: {
    title: "Spotify Refresh Token Generator",
    description: "Generate your Spotify refresh token in a few steps.",
    images: [
      "https://cc-og-image.vercel.app/Spotify%20**Refresh%20Token**%20Generator.png?theme=dark&md=1&fontFamily=source-sans-pro&fontSize=100px&images=https%3A%2F%2Fcc-vocabulary.netlify.app%2Flogos%2Fcc%2Flogomark.svg%23logomark&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsimple-icons%4015.17.0%2Ficons%2Fspotify.svg"
    ],
    url: "https://spotify.tosh1ki.de",
    type: "website",
    siteName: "Spotify Refresh Token Generator"
    ,locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Spotify Refresh Token Generator",
    description: "Generate your Spotify refresh token in a few steps.",
    creator: "@toshiki_dev",
    site: "@toshiki_dev",
    images: [
      "https://cc-og-image.vercel.app/Spotify%20**Refresh%20Token**%20Generator.png?theme=dark&md=1&fontFamily=source-sans-pro&fontSize=100px&images=https%3A%2F%2Fcc-vocabulary.netlify.app%2Flogos%2Fcc%2Flogomark.svg%23logomark&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fnpm%2Fsimple-icons%4015.17.0%2Ficons%2Fspotify.svg"
    ]
  },
  metadataBase: new URL("https://spotify.tosh1ki.de"),
  alternates: {
    canonical: "https://spotify.tosh1ki.de"
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
  "max-snippet": -1,
  "max-image-preview": "large",
  "max-video-preview": -1
    }
  },
  themeColor: "#1DB954",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex flex-1 items-center justify-center">{children}</main>
            <footer className="text-xs text-muted-foreground text-center py-4 opacity-75">
              &copy; Anda Toshiki 2025-present. This site is not affiliated with Spotify. View source on{' '}
              <a
                href="https://github.com/andatoshiki/toshiki-spotify-refresh-token-generator"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                GitHub
              </a>.
            </footer>
            <AppToaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
