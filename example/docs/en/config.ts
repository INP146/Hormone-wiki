import { baseConfig, themeConfig, render } from '../shared.ts'

const lang = 'en'
const pathName = 'en'
const githubRepoLink = themeConfig.githubRepoLink
const sitePattern = themeConfig.sitePattern

const disclaimerStr =
  '<p>The content on Hormone.wiki is based on editor experience and online resources, for reference only. It does not constitute medical, legal, or other professional advice and cannot replace consultation with professionals. Please consult relevant professionals when needed.</p>' +
  '<p>The organizations, services, or products mentioned on Hormone.wiki are for reference only and do not represent endorsement or guarantee. Hormone.wiki cannot ensure their authenticity or reliability, so please verify carefully.</p>' +
  `<p>If there is any incorrect or inaccurate content, please contact <a href="mailto:admin@hormone.wiki">admin@hormone.wiki</a>.</p>` +
  `<p>For the full disclaimer, please refer to <a href="/${pathName}/about/disclaimer">About Us / Disclaimer</a>.</p>`

const commonDisclaimerStrSummary =
  'The content of Hormone.wiki is for reference only and may be outdated or inaccurate. Please verify carefully.'

const commonDisclaimerStrDetail =
  '<p>The content of Hormone.wiki is for reference only and may be outdated or inaccurate. Please verify carefully.</p>' +
  '<p>Except for content labeled as Hormone.wiki, other articles are user submissions that only reflect the author’s opinions and do not represent the position of Hormone.wiki or its maintainers.</p>' +
  disclaimerStr

export const enCfg = {
  label: 'English',
  lang: `${lang}`,
  link: `/${pathName}/`,
  pathName: `${pathName}`,
  themeConfig: {
    nav: [
      {
        text: 'Home Page',
        link: `/${pathName}/`,
      },
      {
        text: 'Documentation',
        link: `/${pathName}/docs/`,
      },
      {
        text: 'Tools',
        items: [
          {
            text: 'Hormone Converter',
            link: `/${pathName}/tools/hormone-converter`,
          },
        ],
      },
      {
        text: 'About',
        items: [
          {
            text: 'About Us',
            link: `/${pathName}/about/`,
          },
          {
            text: 'Disclaimer',
            link: `/${pathName}/about/disclaimer`,
          },
          {
            text: 'Copyright Notice',
            link: `/${pathName}/about/copyright`,
          },
        ],
      },
    ],
    sidebarOptions: [
      {
        ...baseConfig,
        scanStartPath: `${pathName}/docs`,
        resolvePath: `/${pathName}/docs/`,
      },
      {
        ...baseConfig,
        scanStartPath: `${pathName}/tools`,
        resolvePath: `/${pathName}/tools/`,
      },
      {
        ...baseConfig,
        scanStartPath: `${pathName}/about`,
        resolvePath: `/${pathName}/about/`,
      },
    ],

    siteTitle: 'Hormone.wiki',
    siteDescription: 'An HRT Wiki',
    lang: `${lang}`,
    include: [`${pathName}/docs`, `${pathName}/tools`, `${pathName}/about`],

    disclaimerPaths: [
      {
        path: `/${pathName}/docs/`,
        summaryHtml: commonDisclaimerStrSummary,
        detailHtml: commonDisclaimerStrDetail,
      },
    ],
    editLink: {
      pattern: `${githubRepoLink}/edit/main/${sitePattern}/:path`,
      text: 'Edit this page on GitHub',
    },
    disclaimerToggleExpandText: 'Expand',
    disclaimerToggleCollapseText: 'Collapse',
    disclaimerHideText: 'Got it',
    disclaimerShowText: 'Show Disclaimer',

    outline: { label: 'Page Outline', level: 'deep' },
    lastUpdated: { text: 'Last Updated' },
    darkModeSwitchLabel: 'Dark Mode',
    sidebarMenuLabel: 'Table of Contents',
    returnToTopLabel: 'Back to Top',
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    authorLabel: 'Author',
    lastUpdatedLabel: 'Last updated',
    anonymousAuthor: 'Anonymous',
    wordCountLabel: 'Words',
    readingTimeLabel: 'Read time',
    minutesSuffix: 'min',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Search Docs',
                buttonAriaLabel: 'Search Docs',
              },
              modal: {
                noResultsText: 'No results found',
                resetButtonTitle: 'Clear query',
                displayDetails: 'Show detailed list',
                footer: {
                  selectText: 'Select',
                  navigateText: 'Navigate',
                  closeText: 'Close',
                  navigateUpKeyAriaLabel: 'Arrow Up',
                  navigateDownKeyAriaLabel: 'Arrow Down',
                  selectKeyAriaLabel: 'Enter',
                  closeKeyAriaLabel: 'Escape',
                },
              },
            },
          },
        },
        _render: render,
      },
    },
    getChangelogTitle: 'Page History',
    getContributorsTitle: 'Contributors',
  },
}