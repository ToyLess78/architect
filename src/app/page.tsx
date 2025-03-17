import { ThemeSelector } from "@/components/theme-selector";
import { ThemeToggle } from "@/components/theme-toggle";

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
