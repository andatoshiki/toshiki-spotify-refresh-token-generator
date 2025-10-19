import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://spotify.tosh1ki.de/",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://spotify.tosh1ki.de/welcome",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://spotify.tosh1ki.de/dashboard",
      lastModified: new Date().toISOString(),
    },
    {
      url: "https://spotify.tosh1ki.de/info",
      lastModified: new Date().toISOString(),
    },
  ];
}
