"use client";

import { useEffect, useState } from "react";

export const ClientBody = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  // Add fade-in effect after hydration is complete to avoid flicker
  useEffect(() => {
    // A short timeout ensures CSS transitions take effect properly
    const timer = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timer);
  }, []);

  return (
      <body
          className={`
        antialiased
        bg-[hsl(var(--background))]
        text-[hsl(var(--foreground))]
        transition-colors
        duration-300
        ease-in-out
        ${mounted ? 'opacity-100' : 'opacity-0'}
      `}
          suppressHydrationWarning
      >
      {children}
      </body>
  );
}
