import type { Metadata } from "next";
import Image from "next/image";
// import Link from "next/link";
// import clsx from "clsx";

import portraitImage from "../placeholder.jpg";

export const metadata: Metadata = {
  title: "Projects",
  description: "Founder of V3 Digital Studio.",
};

export default function Projects() {
  return (
    <>
      <div className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Projects page
            </h1>
            <div className="mt-6 text-lg prose space-y-7 dark:prose-invert text-zinc-600 dark:text-zinc-400">
              <p>See my projects</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
