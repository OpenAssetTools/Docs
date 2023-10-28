import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "OpenAssetTools",
  description: "Documentation for and around OpenAssetTools",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide', activeMatch: '\\/guide(?:\\/|$)' },
      { text: 'Reference', link: '/reference', activeMatch: '\\/reference(?:\\/|$)' }
    ],

    footer: {
      message: 'All trademarks are owned by their respective owners. This project is neither endorsed by, nor affiliated with Activision, Treyarch, Infinity Ward or any of their descendants.'
    },

    sidebar: {
      '/guide': [
        {
          text: 'Guides',
          items: [
            { text: 'Getting started', link: '/guide/getting-started' },
            { text: 'Second guide', link: '/guide/second-guide' }
          ]
        }
      ],
      '/reference': [
        {
          text: 'Reference',
          items: [
            { text: 'Menus', link: '/reference/menu' },
            { text: 'Zone Files', link: '/reference/zone-file' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Laupetin/oat-docs' }
    ]
  }
})
