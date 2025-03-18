"use client";

// This component renders a script that executes immediately
// to prevent theme flickering when the page loads
export function ThemeScript() {
  // This script runs synchronously before any React hydration
  const blockingThemeScript = `
    (function() {
      try {
        // Get stored theme or detect from system preference
        let theme = localStorage.getItem('theme');

        // If no theme is stored, check system preference
        if (!theme) {
          theme = window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';
        }

        // Apply theme immediately to prevent flash
        document.documentElement.classList.add(theme);

        // Store the initial theme value
        window.__THEME_INITIAL = theme;
      } catch (e) {
        // Fallback if localStorage is not available
        console.error('Failed to set initial theme', e);
      }
    })();
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: blockingThemeScript }}
    />
  );
}
