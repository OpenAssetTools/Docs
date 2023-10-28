import { defineConfig } from "vitepress";

export default defineConfig({
  title: "OpenAssetTools",
  description: "Documentation for and around OpenAssetTools",
  head: [["link", { rel: "icon", href: "/logo_64_64.png" }]],
  themeConfig: {
    logo: "/logo_64_64.png",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Guide",
        link: "/guide/what-is-oat",
        activeMatch: "\\/guide(?:\\/|$)",
      },
      {
        text: "Reference",
        link: "/reference/zone-file",
        activeMatch: "\\/reference(?:\\/|$)",
      },
    ],

    footer: {
      message:
        "All trademarks are owned by their respective owners. This project is neither endorsed by, nor affiliated with Activision, Treyarch, Infinity Ward or any of their descendants.",
    },

    sidebar: {
      "/guide": [
        {
          text: "Guides",
          items: [
            { text: "What is OAT?", link: "/guide/what-is-oat" },
            { text: "Getting started", link: "/guide/getting-started" },
            { text: "Using the tools", link: "/guide/using-the-tools" },
          ],
        },
        {
          text: "OAT Concepts",
          items: [
            { text: "Folder structure", link: "/guide/folder-structure" },
            { text: "OAT components", link: "/guide/components" },
          ],
        },
      ],
      "/reference": [
        {
          text: "Reference",
          items: [
            { text: "Zone Files", link: "/reference/zone-file" },
            {
              text: "The IPak file format",
              link: "/reference/ipak-file-format",
            },
          ],
        },
      ],
    },

    editLink: {
      pattern: "https://github.com/laupetin/oat-docs/edit/main/docs/:path",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Laupetin/openassettools" },
    ],
  },
});
