import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Providers } from "./providers";
import { noFlashScript } from "~/components/theme-script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap"
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
    <head>
      <script dangerouslySetInnerHTML={{__html: noFlashScript}}/>
    </head>
      <ClientBody>
        <Providers>
          {children}
        </Providers>
      </ClientBody>
    </html>
  );
}
