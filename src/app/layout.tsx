import type { Metadata, Viewport } from "next";
import { Italiana, Quicksand } from "next/font/google";
import "./globals.css";
import { ClientBody } from "./ClientBody";
import { Providers } from "./providers";
import { noFlashScript } from "~/components/theme-script";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
  display: "swap",
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
      <html lang="en" className={`${quicksand.variable} ${italiana.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <ClientBody>
        <Providers>
          {children}
        </Providers>
      </ClientBody>
    </html>
  );
}
