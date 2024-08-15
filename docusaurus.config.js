const { themes: prismThemes } = require('prism-react-renderer');
const lightCodeTheme = prismThemes.github;
const darkCodeTheme = prismThemes.dracula;
const redirects = require('./redirects/redirects.json');

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

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        debug: undefined,
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
        gtag: {
          trackingID: 'G-S6RRDF6PG8',
          anonymizeIP: true,
        },
      },
    ],
  ],

  plugins: [
    [ // ONLY FUNCTIONING UPON PRODUCTION
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: redirects,
        createRedirects(path) {
          // Implement your custom redirect logic here if needed
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'guide',
        path: 'guide',
        routeBasePath: 'guide',
        sidebarPath: require.resolve('./sidebars.js'),
        //editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'skills-ontario',
        path: 'skills-ontario',
        routeBasePath: 'skills-ontario',
        sidebarPath: require.resolve('./sidebars.js'),
        //editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'Projects',
        path: 'Projects',
        routeBasePath: 'Projects',
        sidebarPath: require.resolve('./sidebars.js'),
        //editUrl: 'https://github.com/carobot/learn.carobot.ca/tree/main/',
      },
    ],
  ],

  themeConfig: {
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
          docId: 'Tutorials',
          position: 'left',
          label: 'Tutorials',
        },
        {
          to: '/guide/guide',
          label: 'Guide',
          position: 'left',
          activeBaseRegex: `/guide/`,
        },
        {
          to: '/Projects/Introduction',
          label: 'Projects',
          position: 'left',
          activeBaseRegex: `/Projects/`,
        },
        {
          to: '/skills-ontario/skills-ontario/',
          label: 'Skills Ontario Green Energy',
          position: 'left',
          activeBaseRegex: `/skills-ontario/`,
        },
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
              label: 'Tutorials',
              to: '/Tutorials',
            },
            {
              label: 'Guide',
              to: '/guide/guide',
            },
            {
              label: 'Skills Ontario',
              to: '/skills-ontario/skills-ontario',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} CAROBOTIX INC. In collaboration with CAROBOT Learning and Research Organization. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
