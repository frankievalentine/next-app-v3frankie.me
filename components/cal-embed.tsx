"use client"

import { useEffect } from "react"
import { getCalApi } from "@calcom/embed-react"

export function CalEmbed() {
  useEffect(() => {
    ;(async function () {
      const cal = await getCalApi()
      cal("floatingButton", {
        calLink: "frankievalentine",
        config: {
          name: "Frankie Valentine",
          email: "contact@v3frankie.me",
          //   "metadata[employeeId]": "101",
        },
      })
      cal("ui", {
        styles: {
          branding: { brandColor: "#000000" },
        },
      })
    })()
  }, [])

  return <div></div>
}
