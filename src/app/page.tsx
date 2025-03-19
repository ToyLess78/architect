import { ThemeSelector } from "~/components/theme-selector";
import { ThemeToggle } from "~/components/theme-toggle";

export default function Home() {
  return (
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-10 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6"
              >
                <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
                <path d="M12 3v6" />
              </svg>
              <span className="text-lg font-semibold">Architect</span>
            </div>
            <div className="flex items-center gap-2">
              <ThemeSelector />
            </div>
          </div>
        </header>
        <main className="flex-1">
          <section className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Welcome to Architect
              </h1>
              <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
                A modern Next.js starter with Tailwind CSS v4.0 and React 19
              </p>
              <div className="flex justify-center gap-4">
                <a
                    href="https://nextjs.org/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md bg-gray-900 px-4 py-2 font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
                >
                  Next.js Docs
                </a>
                <a
                    href="https://v4.tailwindcss.com/docs"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-md border border-gray-200 px-4 py-2 font-medium transition-colors hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
                >
                  Tailwind CSS Docs
                </a>
              </div>
            </div>
          </section>

          {/* Font demonstration section */}
          <section className="container mx-auto px-4 py-8 mb-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-3xl mb-6 text-center">Font Showcase</h2>

              <div className="grid gap-8 md:grid-cols-2">
                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-2xl mb-4">Italiana Headings</h3>
                  <div className="space-y-4">
                    <h1 className="text-5xl">Heading Level 1</h1>
                    <h2 className="text-3xl">Heading Level 2</h2>
                    <h3 className="text-2xl">Heading Level 3</h3>
                    <h4 className="text-xl">Heading Level 4</h4>
                    <h5 className="text-lg">Heading Level 5</h5>
                    <h6 className="text-base">Heading Level 6</h6>
                  </div>
                </div>

                <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                  <h3 className="text-2xl mb-4">Quicksand Body Text</h3>
                  <div className="space-y-4">
                    <p className="text-lg">
                      This is the main body text using Quicksand font. It's a rounded
                      sans-serif with a friendly appearance that's perfect for modern applications.
                    </p>
                    <p>
                      The Quicksand font works well at different sizes and weights, offering
                      excellent readability for body text while maintaining a contemporary feel.
                    </p>
                    <p className="text-sm">
                      Even at smaller sizes, Quicksand remains clear and legible, making it
                      versatile for various UI elements.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quicksand weights showcase */}
              <div className="mt-12 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                <h3 className="text-5xl mb-4">Quicksand Font Weights</h3>
                <div className="space-y-4">
                  <p className="font-light text-lg">Quicksand Light (300): Clean and delicate</p>
                  <p className="font-normal text-lg">Quicksand Regular (400): Perfect for body text</p>
                  <p className="font-medium text-lg">Quicksand Medium (500): Balanced emphasis</p>
                  <p className="font-semibold text-lg">Quicksand Semibold (600): Clear emphasis</p>
                  <p className="font-bold text-lg">Quicksand Bold (700): Strong visual impact</p>
                </div>
              </div>
            </div>
          </section>

          <section className="container mx-auto px-4 py-16">
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                <h2 className="mb-3 text-xl font-semibold">Theme Toggle</h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Try the theme toggle in the top right corner or here:
                </p>
                <div className="flex justify-center">
                  <ThemeToggle />
                </div>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                <h2 className="mb-3 text-xl font-semibold">Tailwind CSS v4</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Featuring the latest Tailwind CSS v4 with improved performance and
                  new features.
                </p>
              </div>
              <div className="rounded-lg border border-gray-200 p-6 dark:border-gray-800">
                <h2 className="mb-3 text-xl font-semibold">React 19</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Built with React 19, offering improved performance and the latest
                  features.
                </p>
              </div>
            </div>
          </section>
        </main>
        <footer className="border-t border-gray-200 py-6 dark:border-gray-800">
          <div className="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-400">
            <p>© {new Date().getFullYear()} Architect. All rights reserved.</p>
          </div>
        </footer>
      </div>
  );
}
