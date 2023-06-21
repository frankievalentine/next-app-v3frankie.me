import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/nav'
import { MobileNavigation } from '@/components/mobile-nav'
import { ThemeDropdown } from '@/components/theme-dropdown'
import { Footer } from '@/components/footer'

import avatarImage from './avatar.jpg'

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="container z-40 bg-background">
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
          <section className="space-y-6 pb-8 pt-20 md:pb-12 md:pt-16 lg:py-32">
            <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
              <Link
                href="/"
                className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
                target="_blank"
              >
                Follow along on Twitter
              </Link>
              <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                An example app built using Next.js 13 server components.
              </h1>
              <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
                I&apos;m building a web app with Next.js 13 and open sourcing
                everything. Follow along as we figure this out together.
              </p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
