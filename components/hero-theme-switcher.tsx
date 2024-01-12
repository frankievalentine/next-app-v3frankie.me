"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export function HeroThemeSwitcher() {
  const { resolvedTheme } = useTheme()
  let src

  switch (resolvedTheme) {
    case "light":
      src = "/images/Build-light.png"
      break
    case "dark":
      src = "/images/Build-dark.png"
      break
    default:
      src = "/images/Build-light.png"
      break
  }

  return (
    <Image
      className="mb-10 max-w-sm md:max-w-3xl"
      src={src}
      width={1349}
      height={1009}
      alt="WFH Hero Image"
    />
  )
}
