export const noFlashScript = `
(function() {
  try {
    const storedTheme = localStorage.getItem('theme') || 'system';
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const theme =
      storedTheme === 'system'
        ? prefersDark ? 'dark' : 'light'
        : storedTheme;

    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
    window.__THEME_INITIAL = theme;
  } catch(e) {
    console.error('Theme initialization error:', e);
  }
})();
`;
