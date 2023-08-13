import Image from "next/image"

import { Button } from "@/components/button"
import { HeroImg } from "@/components/hero-img"
// import Link from "next/link"

// import clsx from "clsx";
// import { siteConfig } from "@/config/site"
// import {
//   GitHubIcon,
//   InstagramIcon,
//   LinkedInIcon,
//   TwitterIcon,
// } from "@/components/icons"
import { Newsletter } from "@/components/newsletter"

// const posts = [
//   {
//     id: 1,
//     title: "Life update #1",
//     href: "#",
//     description:
//       "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//     date: "Mar 16, 2020",
//     datetime: "2020-03-16",
//     category: { title: "Photos", href: "#" },
//     author: {
//       name: "Frankie Valentine",
//       role: "Founder",
//       href: "#",
//       imageUrl: "/images/avatar-bw.jpg",
//     },
//   },
// More posts...
// ]

// function SocialLink({ icon: Icon, ...props }) {
//   return (
//     <Link href="" className="group -m-1 p-1" {...props}>
//       <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
//     </Link>
//   )
// }

export default function Page() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <HeroImg />
        <section>
          <div className="max-w-xs md:max-w-lg">
            <h1 className="mb-3 text-xl font-bold md:text-3xl">
              Creative developer, designer, founder, and father of 1.
            </h1>
            <p className="text-muted-foreground text-base md:text-xl">
              I currently reside in Nevada. I&apos;m the Founder of V3 Digital
              Studio, where we develop for the web with modern tools and baked
              in performance. I also run two publications called Graphyte and
              Perspectives on Substack. When I have time I like to fly drones
              and built a company called Aero9.
            </p>
            <a
              href="https://bento.me/v3frankie"
              target="_blank"
              rel="noreferrer"
              className="mt-12 flex justify-center"
            >
              <Button href="" type="" className="bg-indigo-400">
                Follow me
              </Button>
            </a>
          </div>
          <div className="mt-6 gap-6">
            {/* <SocialLink
              href={siteConfig.links.twitter}
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href={siteConfig.links.instagram}
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href={siteConfig.links.github}
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href={siteConfig.links.linkedin}
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            /> */}
          </div>
        </section>

        {/* <section className="mt-20">
          <div className="mt-5 max-w-2xl px-14 md:mt-10 md:px-24">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Recent updates
            </h2>
            <p className="dark:text-muted-foreground my-2 text-lg leading-8 text-gray-600 dark:text-white">
              My most recent updates in my life, work, and dailies.
            </p>
          <div className="mx-auto mb-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-500 pt-10 sm:mt-2 sm:pt-4">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="flex max-w-xl flex-col items-start justify-between"
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
                      className="dark:text relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600 dark:text-white">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
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
        </section> */}
        <Newsletter />
      </main>
    </>
  )
}
