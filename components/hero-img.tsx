"use client"

import Image from "next/image"
import { useTheme } from "next-themes"

export function HeroImg() {
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
      className=""
      src={src}
      width={1349}
      height={1009}
      alt="WFH Hero Image"
    />
  )
}
