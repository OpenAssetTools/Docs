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
      {
        text: "Game Assets",
        link: "/asset/overview",
        activeMatch: "\\/asset(?:\\/|$)",
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
          text: "OAT Reference",
          items: [
            { text: "Zone Files", link: "/reference/zone-file" },
            {
              text: "The IPak file format",
              link: "/reference/ipak-file-format",
            },
          ],
        },
      ],
      "/asset": [
        {
          text: "Game Assets",
          items: [
            { text: "Overview", link: "/asset/overview" },
            {
              text: "Menus",
              collapsed: false,
              items: [
                { text: "Structure", link: "/asset/menu/structure" },
                { text: "Preprocessor", link: "/asset/menu/preprocessor" },
                {
                  text: "Menu Properties",
                  link: "/asset/menu/menu-properties",
                },
                {
                  text: "Item Properties",
                  link: "/asset/menu/item-properties",
                },
                { text: "Expressions", link: "/asset/menu/expressions" },
                { text: "Event Handlers", link: "/asset/menu/event-handlers" },
              ],
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
