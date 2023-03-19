// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '雙龍體育',
  tagline: '歡迎來到雙龍體育官方網站!立刻搜尋有關於雙龍體育或職籃職棒等資訊',
  url: 'https://www.ssangyongsports.org/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://i.imgur.io/CfQiMkp_d.webp',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ssangyongsportsorg', // Usually your GitHub org/user name.
  projectName: 'ssport-site', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
   i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw'],
  },
 
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({

        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: {
          showReadingTime: true,

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.         
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
                },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        hideOnScroll: true,
        logo: {
          alt: '雙龍體育 Logo',
          src: 'https://i.imgur.com/GhQm5zm.png',           
             },
        items: [
           {
          label: "體育",
          position: "left",
          items: [
            {
              label: "雙龍職棒",
            href: 'https://slbtw.cf/',
            },
            {
            label: '雙龍職籃',
            href: 'https://sbatw.ml/',
            },
          ],
        },
      {
          label: "支援",
          position: "left",
          items: [
            {
              label: "幫助中心",
            href: 'https://help.ssangyongsports.eu.org/',
            },
            {
            label: '論壇',
            href: 'https://DISCUSS.ssangyongsports.org/',
            },
            {
              label: "聯繫",
              to: "/c",
            },
          ],
        },
         {
          label: "組織",
          position: "left",
          items: [
            {
              label: "Blog",
              to: "/blog/",
              activeBaseRegex: "/blog/?$",
            },
            {
            label: '狀態',
            href: 'https://status.ssangyongsports.eu.org/',
            },
          ],
        },
          {
          label: "條款",
          position: "left",
          items: [
            {
              label: "隱私政策",
              to: "/p",
            },
            {
             label: "服務條款",
              to: "/t",
            },
          ],
        },
        ],
      },
              announcementBar: {
      id: 'announcementBar-2',
      content:
        '網域被刪除公告，<a target="_blank" href="/blog/domain">詳情</a>',
      backgroundColor: '#ffff',
      textColor: '#091E42',
      isCloseable: false,
    },
          algolia: {
      apiKey: "7640fd8ca3b8204bd58b654f71607ab5",
      indexName: "docs",
      appId: "8YELX4XDEG",
      // Optional: see doc section bellow
      contextualSearch: true,

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
  
  
      footer: {
        style: 'light',
        logo: {
        alt: '雙龍體育',
        src: 'https://img.ssangyongsports.eu.org/logo2.png',
        href: '/',
        width: 160,
        height: 51,
      },
        links: [
          {
          title: '體育',
            items: [
              {
                  label: '雙龍職棒',
                  href: 'https://slbtw.cf',
              },
              {
                label: '雙龍職籃',
                href: 'https://sbatw.ml',
              },
              {
                label: '雙龍足球',
                href: '/',
              },
            ],
          },
          {
           title: '組織',
            items: [
              {
                label: 'blog',
                href: '/blog',
              },
              {
                label: '狀態',
                href: 'https://status.ssangyongsports.eu.org/',
              },              
            ],
          },
          {
            title: '幫助',
            items: [
              {
                label: '幫助',
                href: 'https://help.ssangyongsports.eu.org/',
              },
              {
                label: '論壇',
                href: 'https://discuss.ssangyongsports.org/',
              },
              {
                label: '聯繫',
                href: '/c',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 雙龍體育, org. 維護團隊：雙龍體育.`,
      },
       prism: {
        theme: lightCodeTheme,
        darkTheme: lightCodeTheme
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false
      },
    }),
};

module.exports = config;
