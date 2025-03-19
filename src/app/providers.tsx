"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import React from "react";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
      <NextThemesProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
          storageKey="theme"
      >
        {children}
      </NextThemesProvider>
  );
}
