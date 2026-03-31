import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'SQUAD HR',
  tagline: 'Comprehensive guides for Attendance, Leave, Performance, Learning, and Director Settings',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.squadhr.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'squadhr', // Usually your GitHub org/user name.
  projectName: 'user-guide', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false, // Disabling blog for now as it's a user guide
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: false,
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'SQUAD HR',
      hideOnScroll: false,
      items: [

        {
          to: '/docs/user-guide/attendance/intro',
          label: 'Attendance',
          position: 'left',
        },
        {
          to: '/docs/user-guide/leave/intro',
          label: 'Leave',
          position: 'left',
        },
        {
          to: '/docs/user-guide/pms/intro',
          label: 'Performance',
          position: 'left',
          className: 'navbar-item--padded',
        },
        {
          to: '/docs/user-guide/lms/intro',
          label: 'Learning',
          position: 'left',
          className: 'navbar-item--padded',
        },
        {
          to: '/docs/admin-guide/intro',
          label: 'Director',
          position: 'left',
          className: 'navbar-item--padded',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          label: 'Privacy',
          href: '#',
        },
        {
          label: 'Terms',
          href: '#',
        },
        {
          label: 'Changelog',
          href: '#',
        },
        {
          label: 'Support',
          href: '#',
        },
      ],
      copyright: `© ${new Date().getFullYear()} SQUAD HR. All rights reserved.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
