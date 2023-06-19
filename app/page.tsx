import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/nav";
import MobileNavigation from "@/components/mobile";
import Toggle from "@/components/toggle";
import AboutPage from "@/app/about/page";
import PhotosPage from "@/app/photos/page";
import Footer from "@/components/footer";
import avatarImage from "./avatar.jpg";

// `app/page.tsx` is the UI for the `/` URL
export default function Page() {
  return (
    <>
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="relative flex gap-4">
          <div className="h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10">
            <Link href="/" aria-label="Home">
              <Image
                src={avatarImage}
                alt="Avatar"
                className="rounded-full bg-zinc-100 object-cover dark:bg-zinc-800"
                priority
              />
            </Link>
          </div>
          <div className="flex flex-1 justify-end md:justify-center">
            <Navigation className="pointer-events-auto hidden md:block" />
            <MobileNavigation className="pointer-events-auto md:hidden" />
            <div className="flex justify-end md:flex-1">
              <div className="pointer-events-auto">
                <Toggle />
              </div>
            </div>
          </div>
        </div>
        <AboutPage />
        <PhotosPage />
        <Footer />
      </div>
    </>
  );
}
