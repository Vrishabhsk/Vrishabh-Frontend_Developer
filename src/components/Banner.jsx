import React from "react";

export default function Banner() {
  return (
    <section className="dark:bg-zinc-800 dark:text-gray-100">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-5">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/images/capsule.png"
            alt="Capsule"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-[30rem] 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">Capsules</h1>
          <p className="mt-6 mb-8 text-lg sm:mb-10">
            Get top notch information about SPACEX Capsules
            <br />
            Try out our new search filter to explore SPACEX Capsules
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              rel="noopener noreferrer"
              href="/capsules"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-neutral-900 dark:text-white shadow-2xl"
            >
              Explore Capsules
            </a>
            <a
              rel="noopener noreferrer"
              href="https://docs.spacexdata.com/"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-neutral-900 dark:text-white shadow-2xl"
            >
              Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
