import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">
      {/* Navigation */}
      <nav className="border-b border-zinc-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          {/* Logo */}
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-2xl font-bold tracking-tight"
          >
            {/* NoteSync Logo Icon */}
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm">
              <svg
                width="25"
                height="25"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Paper */}
                <rect
                  x="7"
                  y="4"
                  width="18"
                  height="23"
                  rx="3"
                  fill="white"
                />

                {/* Note lines */}
                <path
                  d="M11 10H21"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M11 14H19"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                <path
                  d="M11 18H16"
                  stroke="#6366F1"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Pencil */}
                <path
                  d="M20.5 21.5L25.5 16.5L28 19L23 24L19.5 25L20.5 21.5Z"
                  fill="#4F46E5"
                />

                {/* Pencil tip */}
                <path
                  d="M19.5 25L20.5 21.5L23 24L19.5 25Z"
                  fill="#312E81"
                />
              </svg>
            </span>

            {/* Brand name */}
            <span>
              <span className="text-zinc-900">Note</span>
              <span className="text-indigo-600">Sync</span>
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-3">
            <Link
              href="/signin"
              className="rounded-lg px-4 py-2 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100"
            >
              Sign in
            </Link>

            <Link
              href="/signup"
              className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            ✦ Your thoughts, organized
          </div>

          <h1 className="text-5xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            Capture your thoughts,
            <span className="block text-indigo-600">
              beautifully.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            NoteSync is a simple and organized space for writing,
            managing, and keeping track of your notes whenever inspiration
            strikes.
          </p>

          {/* Hero Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/signup"
              className="w-full rounded-xl bg-indigo-600 px-7 py-3.5 text-center font-semibold text-white shadow-sm transition hover:bg-indigo-700 sm:w-auto"
            >
              Start for free
            </Link>

            <Link
              href="/signin"
              className="w-full rounded-xl border border-zinc-300 bg-white px-7 py-3.5 text-center font-semibold text-zinc-800 transition hover:bg-zinc-50 sm:w-auto"
            >
              Sign in
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-t border-zinc-200 bg-zinc-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-zinc-900">
              Everything you need for your notes
            </h2>

            <p className="mt-3 text-zinc-600">
              Simple features designed to keep your ideas organized.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                ✎
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Simple & Clean
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Create and organize your notes with a clean and easy-to-use
                interface.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                🔒
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Private by Design
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Keep your personal notes organized and accessible through your
                own account.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-2xl">
                ⚡
              </div>

              <h3 className="text-xl font-semibold text-zinc-900">
                Fast & Organized
              </h3>

              <p className="mt-3 leading-7 text-zinc-600">
                Quickly create, edit, and manage your notes without unnecessary
                complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-zinc-500 sm:flex-row">
          <p>© 2026 NoteSync. All rights reserved.</p>

          <p>Built with Next.js</p>
        </div>
      </footer>
    </main>
  );
}
