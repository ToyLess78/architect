"use client";

import { useEffect, useState } from "react";

export const ClientBody = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mounted, setMounted] = useState(false);

  // Only apply fade-in effect after hydration is complete
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <body
      className={`antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-50 transition-colors duration-300 ease-in-out ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}
      suppressHydrationWarning
    >
      {children}
    </body>
  );
}
