import Image from "next/image"
import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

// import Link from "next/link"
// import clsx from "clsx";
// import { siteConfig } from "@/config/site"
import { Hero } from "@/components/svg"

const posts = [
  {
    id: 1,
    title: "Life update #1",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Photos", href: "#" },
    author: {
      name: "Frankie Valentine",
      role: "Founder",
      href: "#",
      imageUrl: "/images/avatar-bw.jpg",
    },
  },
  // More posts...
]

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <Hero />

        <section className="flex max-w-sm flex-row md:max-w-2xl">
          <div>
            <h1 className="mb-3 text-xl font-bold dark:text-slate-200 md:text-3xl">
              Creative developer, designer, founder, and father of 1.
            </h1>
            <p className="text-base md:text-xl">
              I currently reside in Nevada.
              <br /> I&apos;m the Founder of{" "}
              <a
                className="text-gray-900 underline decoration-teal-400 hover:decoration-wavy dark:text-slate-200"
                href="https://v3digital.studio"
              >
                V3 Digital Studio
              </a>
              , where we develop for the web with modern tools and baked in
              performance.
            </p>
            <p className="mt-5 text-base md:text-xl">
              I offer consultations 1-on-1 AMA style. Feel free to book my cal.
              Anything goes.
            </p>
          </div>
          <div className="ml-20">
            <a
              href="https://bento.me/v3frankie"
              target="_blank"
              rel="noreferrer"
              className="my-24 flex justify-center"
            >
              <button className="h-12 w-24 rounded-xl bg-slate-200 text-base font-bold text-black transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                Socials
              </button>
            </a>
          </div>
        </section>

        <section className="mt-20">
          <div className="max-w-sm md:max-w-2xl">
            <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white md:text-3xl">
              Recent updates
            </h2>
            <p className="dark:text-muted-foreground my-2 text-base leading-8 text-gray-600 dark:text-white md:text-xl">
              My most recent updates in my life, work, and dailies.
            </p>
            <div className="mb-20 grid grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-2 sm:pt-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-xs">
                    <time
                      dateTime={post.datetime}
                      className="text-gray-500 dark:text-white"
                    >
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="dark:text relative z-10 rounded-lg bg-slate-200 px-3 py-1.5 font-bold hover:bg-gray-100 dark:text-black"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-4 text-lg font-semibold leading-6 text-gray-900  dark:text-white">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-slate-200">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <Image
                      width={100}
                      height={100}
                      src={post.author.imageUrl}
                      alt=""
                      className="h-10 w-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900 dark:text-white">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="my-10 max-w-sm rounded-xl border p-12 md:mt-12 md:max-w-2xl">
          <form action="/thank-you" className="rounded-2xl">
            <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              <EnvelopeClosedIcon className="h-5 w-5 flex-none" />
              <span className="ml-2">Stay up to date</span>
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md text-sm dark:text-white">
              Get notified when I publish something new, life updates, never any
              spam, and unsubscribe at any time.
            </p>
            <div className="mt-6 flex">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              <button
                type="submit"
                className="ch-12 ml-4 w-24 flex-none rounded-lg bg-slate-200 text-base font-bold text-black"
              >
                Join
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  )
}
