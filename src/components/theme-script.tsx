export const noFlashScript = `
  (function() {
    let storageKey = 'theme';
    let preferDarkQuery = '(prefers-color-scheme: dark)';
    let darkModeClass = 'dark';

    function getTheme() {
      try {
        // First try to get from localStorage
        let localStorageTheme = localStorage.getItem(storageKey);
        if (localStorageTheme) return localStorageTheme;

        // If not in localStorage, check system preference
        if (window.matchMedia(preferDarkQuery).matches) {
          return 'dark';
        }

        // Default to light otherwise
        return 'light';
      } catch (e) {
        // Fallback if localStorage is unavailable
        return 'light';
      }
    }

    function applyTheme(theme) {
      let root = document.documentElement;
      let isDark = theme === 'dark';

      if (isDark) {
        root.classList.add(darkModeClass);
      } else {
        root.classList.remove(darkModeClass);
      }
    }

    // Apply theme immediately to prevent flash
    let theme = getTheme();
    applyTheme(theme);

    // Save for client-side access later
    window.__initialTheme = theme;
  })()
`;

