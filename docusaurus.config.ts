import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'BebopC2',
  tagline: 'Advanced Modular Asynchronous C2 Framework',
  favicon: 'img/favicon.png',

  future: {
    v4: {
      fasterByDefault: false,
    },
    faster: false,
  },

  url: 'https://gusbtc.github.io',
  baseUrl: '/',
  organizationName: 'Gusbtc',
  projectName: 'BebopC2-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/graph_sessions.png',
    metadata: [
      {
        name: 'keywords',
        content: 'BebopC2, C2 framework, red team, teamserver, beacon, operator console, BOF, inline-assembly',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'BebopC2',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Docs',
        },
        {to: '/docs/getting-started/quick-start', label: 'Quick Start', position: 'left'},
        {
          href: 'https://github.com/Gusbtc/BebopC2',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: ['bash', 'go', 'c', 'json', 'powershell', 'csharp'],
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 4,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
