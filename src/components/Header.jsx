import React from "react";

export default function Header() {
  return (
    <header className="fixed w-full">
      <nav className="border-grey-200 py-3 px-5 bg-zinc-900">
        <div className="flex flex-wrap items-center">
          <a href="/" className="flex">
            <img
              src="/images/spacex.svg"
              className="h-6 sm:h-9 my-2 w-full"
              alt="Spacex Logo"
            />
          </a>
          <div className="ml-auto">
            <a
              rel="noopener noreferrer"
              href="/capsules"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-zinc-700 dark:text-white shadow-2xl"
            >
              Capsules
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
