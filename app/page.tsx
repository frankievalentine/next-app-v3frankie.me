import Image from "next/image"
import Link from "next/link"

// import clsx from "clsx";
import { siteConfig } from "@/config/site"
import { Footer } from "@/components/footer"
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/components/icons"
import { MobileNavigation } from "@/components/mobile-nav"
import Navigation from "@/components/nav"
import { Newsletter } from "@/components/newsletter"
import HomePosts from "@/components/posts"
import { ThemeDropdown } from "@/components/theme-dropdown"

import WFHHERODARK from "../public/images/WFH-hero-dark.png"
import avatarImage from "./avatar.jpg"

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link href="" className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="bg-background container z-40">
          <div className="flex h-20 items-center justify-between py-6">
            <Link
              className="group h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"
              href="/"
              aria-label="Home"
            >
              <Image
                src={avatarImage}
                alt="Avatar"
                className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                priority
              />
            </Link>
            <Navigation className="pointer-events-auto hidden md:block" />
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <ThemeDropdown />
          </div>
        </header>
        <main className="flex justify-center">
          <section className="mt-20 space-y-6 rounded-xl pb-8 md:pt-16 lg:py-20">
            <Image
              width={649}
              height={309}
              src={WFHHERODARK}
              alt="Hero"
              className="w-full rounded-xl"
            />
            <div className="container flex flex-col gap-4">
              <h1 className="max-w-xl text-3xl font-bold">
                Creative developer, designer, founder, and father of 1.
              </h1>
              <p className="text-muted-foreground leading-normal md:max-w-2xl md:text-xl md:leading-8">
                I currently reside in Nevada. I&apos;m the founder and CEO of V3
                Digital Studio, where we develop for the web with modern tools
                and baked in performance. I also run two publications called
                Graphyte and Perspectives on Substack. When I have time I like
                to fly drones and built a company called Aero9.
              </p>
              <div className="mt-6 flex gap-6">
                <SocialLink
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
                />
              </div>
            </div>
          </section>
        </main>
        <HomePosts />
      </div>
      <Newsletter />
      <Footer />
    </>
  )
}
