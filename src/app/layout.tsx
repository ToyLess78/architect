import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Architect",
  description: "A Next.js starter with Tailwind CSS and theme toggling",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
};

// Script to avoid flashing in dark mode
const noFlashScript = `
  (function() {
    // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'system';
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      let theme = 'light';

      if (savedTheme === 'dark') {
        theme = 'dark';
      } else if (savedTheme === 'system' && prefersDark) {
        theme = 'dark';
      }

      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  })()
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{__html: noFlashScript}}/>
      <title>Architect</title>
    </head>
      <ClientBody>
        <Providers>
          {children}
        </Providers>
      </ClientBody>
    </html>
  );
}
