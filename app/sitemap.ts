import type { MetadataRoute } from "next"

import { categories } from "@/config/components"

export default function sitemap(): MetadataRoute.Sitemap {
  const home = {
    url: "https://slayui.com",
  }
  const search = {
    url: "https://slayui.com/search",
  }
  const easings = {
    url: "https://slayui.com/easings",
  }
  const categoryPages = categories.map((category) => ({
    url: `https://slayui.com/${category.slug}`,
  }))

  return [home, ...categoryPages, search, easings]
}
