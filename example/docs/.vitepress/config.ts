import genConfig from '@INP146/vitepress-theme-hormone/config'
import { withThemeContext } from '@INP146/vitepress-theme-hormone/utils'

import type { ThemeContext } from '@INP146/vitepress-theme-hormone/utils'

import { themeConfig as sharedThemeConfig } from '../shared.ts'

import { zhHansCfg } from '../zh-hans/config.ts'
import { zhHantCfg } from '../zh-hant/config.ts'
import { enCfg } from '../en/config.ts'

const defaultLocaleThemeConfig = enCfg.themeConfig
const sidebarOptions = [].concat(
  zhHansCfg.themeConfig.sidebarOptions, 
  zhHantCfg.themeConfig.sidebarOptions,
  enCfg.themeConfig.sidebarOptions
)


const themeConfig: ThemeContext = {
  sidebarOptions,
  disableChangelog: sharedThemeConfig.disableChangelog,
  disableContributors: sharedThemeConfig.disableContributors,
  githubRepoLink: sharedThemeConfig.githubRepoLink,
    sitePattern: sharedThemeConfig.sitePattern,
  mapAuthors: sharedThemeConfig.mapAuthors,
  
  nav: defaultLocaleThemeConfig.nav,
  siteTitle: defaultLocaleThemeConfig.siteTitle,
  siteDescription: defaultLocaleThemeConfig.siteDescription,
  include: defaultLocaleThemeConfig.include,
  disclaimerPaths: defaultLocaleThemeConfig.disclaimerPaths,
  editLink: defaultLocaleThemeConfig.editLink,
  outline: defaultLocaleThemeConfig.outline,
  lastUpdated: defaultLocaleThemeConfig.lastUpdated,
  darkModeSwitchLabel: defaultLocaleThemeConfig.darkModeSwitchLabel,
  sidebarMenuLabel: defaultLocaleThemeConfig.sidebarMenuLabel,
  returnToTopLabel: defaultLocaleThemeConfig.returnToTopLabel,
  docFooter: defaultLocaleThemeConfig.docFooter,
  search: defaultLocaleThemeConfig.search,
  getChangelogTitle: defaultLocaleThemeConfig.getChangelogTitle,
  getContributorsTitle: defaultLocaleThemeConfig.getContributorsTitle,
  lang: defaultLocaleThemeConfig.lang,

  // baseUrl: '/',
  /** vitepress 根目录 */
  rootDir: 'docs',
  hostName: 'https://hormone.wiki',
  /** 文档所在目录（目前似未使用此项） */
  
  // enableChangeLog: false,
  enableSuggestionBox: false,
  // HideReadingTime: true, /* 隐藏字数和预计阅读时间 */
  // HideLastUpdated: true, /* 隐藏最后更新时间 */
  // HideAuthors: true, /* 隐藏作者信息 */
  // fontsBaseUrl: 'http://localhost:8788', // For local development with wrangler pages dev
  googleAnalytics: { enabled: true, id: 'G-T9J2G2RNNS' },
  clarity: { enabled: true, id: 'sr6gytvep4' },
  enableDisclaimer: true,
  disclaimerStatusKey: 'disclaimerStatus',
  disclaimerStatusExpiration: 2592000000,
  
  // i18n
  locales: {
    [zhHansCfg.pathName]: zhHansCfg,
    [zhHantCfg.pathName]: zhHantCfg,
    [enCfg.pathName]: enCfg,
  },
  // 添加自定义 head 元素
  additionalHead: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    //   ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }],
  ],
}

// https://vitepress.dev/reference/site-config
export default withThemeContext(themeConfig, genConfig)
