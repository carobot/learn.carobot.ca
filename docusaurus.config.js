// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Learn at CAROBOT',
  tagline: 'Learning robotics is cool! We love robotics!',
  url: 'https://learn.carobot.ca/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/canada-robotix-robot.ico',
  organizationName: 'carobot', // Usually your GitHub org/user name.
  projectName: 'learn.carobot.ca', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  // presets: [
  //   [
  //     'classic',
  //     /** @type {import('@docusaurus/preset-classic').Options} */
  //     ({
  //       docs: {
  //         sidebarPath: require.resolve('./sidebars.js'),
  //         // Please change this to your repo.
  //         editUrl: 'https://github.com/carobot/carobot.github.io/tree/main/',
  //         routeBasePath: '/',
  //       },
  //       blog: {
  //         showReadingTime: true,
  //         // Please change this to your repo.
  //         editUrl:
  //           'https://github.com/carobot/carobot.github.io/tree/main/',
  //       },
  //       theme: {
  //         customCss: require.resolve('./src/css/custom.css'),
  //       },
  //     }),
  //   ],
  // ],

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  plugins: [
    // [ ONLY FUNCTIONING UPON PRODUCTION
    //   '@docusaurus/plugin-client-redirects',
    //   {
    //     fromExtensions: ['html'],
    //     redirects: [
    //        {
    //          to: ''
    //          from: ['/','/example']
    //        }
    //     ],
    //     createRedirects(existingPath) {
    //       if (existingPath.includes('/guide')) {
    //         return [
    //           existingPath.replace('/guide', '/docs'),
    //           existingPath.replace('/guide', '/docs'),
    //         ];
    //       }
    //       return undefined;
    //     },
    //   },
    // ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'BQBI23OQ61',
        apiKey: '3b00c9db7f6cbe12d5c5d40b58f1d7e3',
        indexName: 'carobot',
        contextualSearch: false,
        placeholder: 'Search',
        searchPagePath: false,
        searchPage: false
      },
      navbar: {
        title: 'Learn at CAROBOT',
        logo: {
          alt: 'Learn at CAROBOT',
          src: 'img/Canada-Robotix-Robot-PNG.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'tutorial',
            position: 'left',
            label: 'Tutorial',
          },
          {
            to: '/guide/guide',    // ./docs-api/Intro.md
            label: 'Guide',
            position: 'left',
            activeBaseRegex: `/guide/`,
          },

          //{
          //  to: '/resources/ref',    // ./docs-api/Intro.md            
          //  label: 'Resources',
          //  position: 'left',
          //  activeBaseRegex: `/resources/`,
          //},

          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://www.canadarobotix.com',
            label: 'Canada Robotix',
            position: 'right',
          },
          {
            href: 'https://github.com/carobot/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/tutorial',
              },
              {
                label: 'Guide',
                to: '/guide/guide',
              },
            ],
          },
          // {
          //   title: 'Community',
          //   items: [
          //     {
          //       label: 'Stack Overflow',
          //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
          //     },
          //     {
          //       label: 'Discord',
          //       href: 'https://discordapp.com/invite/docusaurus',
          //     },
          //     {
          //       label: 'Twitter',
          //       href: 'https://twitter.com/docusaurus',
          //     },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'Blog',
          //       to: '/blog',
          //     },
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/facebook/docusaurus',
          //     },
          //   ],
          // },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CAROBOTIX INC. In collaboration with CAROBOT Learning and Research Organization. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
