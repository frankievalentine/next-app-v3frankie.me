import { EnvelopeClosedIcon } from "@radix-ui/react-icons"

import { Button } from "./button"

export function Newsletter() {
  return (
    <div className="mt-5 flex max-w-2xl justify-center px-14 md:mt-10 md:px-24">
      <form action="/thank-you" className="max-w-[35rem] rounded-2xl">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <EnvelopeClosedIcon className="h-5 w-5 flex-none" />
          <span className="ml-2">Stay up to date</span>
        </h2>
        <p className="mt-2 max-w-md text-sm text-zinc-600 dark:text-zinc-400">
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
          <Button href="" type="submit" className="ml-4 flex-none">
            Join
          </Button>
        </div>
      </form>
    </div>
  )
}
