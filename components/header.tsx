import Image from "next/image"
import Link from "next/link"

import { MobileNavigation } from "@/components/mobile-nav"
import Navigation from "@/components/nav"
import { ThemeDropdown } from "@/components/theme-dropdown"

import avatarImage from "../public/images/avatar.jpg"

export function Header() {
  return (
    <header className="container flex flex-col md:px-0">
      <div className="flex h-20 items-center justify-between">
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
  )
}
