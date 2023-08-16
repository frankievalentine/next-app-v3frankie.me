// import Link from "next/link"

// function NavLink({ href, children }) {
//   return (
//     <Link
//       href={href}
//       className="text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-400"
//     >
//       {children}
//     </Link>
//   )
// }

export function Footer() {
  return (
    <footer>
      <div className="container flex flex-col items-center justify-center gap-4 py-10">
        <div className="w-40 border-t-2">
          <div className="flex items-center justify-center gap-4 pt-8">
            {/* <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/photos">Photos</NavLink>
            <NavLink href="/uses">Uses</NavLink> */}
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              &copy; {new Date().getFullYear()}
            </p>
          </div>
        </div>
        <span className="w-32 text-center text-xs">
          Credit to <i>Friends of Figma, Portugal</i> for the design
        </span>
      </div>
    </footer>
  )
}
