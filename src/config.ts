import type { DefaultTheme } from 'vitepress'
import type { DisclaimerPathConfig } from './utils/themeContext'
import fs from 'node:fs'
import path, { dirname, resolve } from 'node:path'

import process from 'node:process'
import { fileURLToPath } from 'node:url'
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog/vite'
import { transformHeadMeta } from '@nolebase/vitepress-plugin-meta'
import vueJsx from '@vitejs/plugin-vue-jsx'
import footnote from 'markdown-it-footnote'
import katex from 'markdown-it-katex'
import mdPangu from 'markdown-it-pangu'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

import { defineConfigWithTheme } from 'vitepress'
import { generateSidebar } from './sidebar'
import { useThemeContext } from './utils/themeContext'

export interface HormoneThemeConfig extends DefaultTheme.Config {
  enableChangeLog?: boolean
  enableSuggestionBox?: boolean
  enableDisclaimer?: boolean
  disclaimerPaths?: DisclaimerPathConfig[]
  disclaimerSummaryHtml?: string
  disclaimerDetailHtml?: string
  disclaimerToggleExpandText?: string
  disclaimerToggleCollapseText?: string
  disclaimerHideText?: string
  disclaimerShowText?: string
  disclaimerStatusKey?: string
  disclaimerStatusExpiration?: number
  org?: string
  HideReadingTime?: boolean
  HideLastUpdated?: boolean
  HideAuthors?: boolean
  sitemap?: {
    hostname: string
  }
  fontsBaseUrl: string
  googleAnalytics?: {
    enabled?: boolean
    id?: string
  }
  clarity?: {
    enabled?: boolean
    id?: string
  }
}

// 从文件系统读取 Markdown 文件内容
function readMarkdownFileContent(filePath: string): string {
  if (fs.existsSync(filePath)) {
    return fs.readFileSync(filePath, 'utf-8')
  }
  return ''
}

// 统计文档的字数函数
function countWords(content: string): number {
  const cleanedContent = content
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/!\[.*?\]\(.*?\)/g, '') // 移除图片链接
    .replace(/\[.*?\]\(.*?\)/g, '') // 移除普通链接
    .replace(/<[^>]+(>|$)/g, '') // 移除 HTML 标签
    .replace(/[.,/#!$%^&*;:{}=\-_`~()]/g, '') // 移除标点符号
    .replace(/\s+/g, ' ') // 将多余的空格归为一个空格
    .trim() // 去除首尾空格

  const chineseCharacters
    = cleanedContent.match(/[\u4E00-\u9FFF\uFF01-\uFFE5]/g) || []
  const words = cleanedContent.split(/\s+/).filter(Boolean)

  return chineseCharacters.length + words.length
}

// https://vitepress.dev/reference/site-config
function genConfig() {
  const themeConfig = useThemeContext()
  const {
    sidebarOptions,
    disableChangelog,
    disableContributors,
    githubRepoLink,
    sitePattern,
    mapAuthors,
    
    nav,
    siteTitle,
    siteDescription,
    include,
    disclaimerPaths,
    editLink,
    outline,
    lastUpdated,
    darkModeSwitchLabel,
    sidebarMenuLabel,
    returnToTopLabel,
    docFooter,
    search,
    getChangelogTitle,
    getContributorsTitle,
    lang,
    
    rootDir,
    hostName,
    
    enableSuggestionBox = true,
    enableDisclaimer,
    disclaimerStatusKey,
    disclaimerStatusExpiration,
    
    locales,
    additionalHead = [],
    
    //new
    siteLogo,
    SiteTitle,
    baseUrl = '/',
    enableChangeLog = false,
    org,
    HideReadingTime,
    HideLastUpdated,
    HideAuthors,
    fontsBaseUrl = '/fonts',
    googleAnalytics,
    clarity,
  } = themeConfig

  const clarityHead = clarity?.enabled !== false && clarity?.id
    ? [[
        'script',
        {},
        `(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/${clarity.id}";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${clarity.id}");`
      ]]
    : []

  return defineConfigWithTheme<HormoneThemeConfig>({
    lang: lang,
    title: siteTitle,
    base: baseUrl,
    sitemap: {
      hostname: hostName,
    },
    cleanUrls: true,
    markdown: {
      math: true,
      config(md) {
        md.use(mdPangu)
        md.use(footnote)
        md.use(katex)
      },
    },
    head: [
      [
        'link',
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/logo.png',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/logo.png',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/logo.png',
        },
      ],
      ['link', { rel: 'manifest', href: '/site.webmanifest' }],
      ['meta', { name: 'msapplication-TileColor', content: '#4c4c4c' }],
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { property: 'og:site_name', content: siteTitle }],
      ...clarityHead,
      ...additionalHead, // 其他自定义的 head 元素
    ],
    themeConfig: {
      org,
      HideReadingTime,
      HideLastUpdated,
      HideAuthors,
      enableSuggestionBox,
      enableChangeLog,
      // https://vitepress.dev/reference/default-theme-config
      siteTitle: SiteTitle,
      logo: siteLogo,
      sitemap: {
        hostname: hostName,
      },
      nav,
      sidebar: generateSidebar(),
      socialLinks: [{ icon: 'github', link: githubRepoLink }],
      editLink,
      outline,
      lastUpdated,
      darkModeSwitchLabel,
      sidebarMenuLabel,
      returnToTopLabel,
      docFooter,
      enableDisclaimer,
      disclaimerPaths,
      disclaimerStatusKey,
      disclaimerStatusExpiration,
      // label localization
      search,
      fontsBaseUrl,
      googleAnalytics,
      clarity,
    },
    locales, // i18n
    transformHead: async (context) => {
      let head = [...context.head]

      const returnedHead = await transformHeadMeta()(head, context)
      if (typeof returnedHead !== 'undefined')
        head = returnedHead

      return head
    },
    vite: {
      plugins: [
        GitChangelog({
          repoURL: githubRepoLink,
          mapAuthors: mapAuthors
        }),
        GitChangelogMarkdownSection({
          sections: {
            disableChangelog: false,
            disableContributors: false,
          },
          getChangelogTitle: () => getChangelogTitle,
          getContributorsTitle: () => getContributorsTitle,
          excludes: [],
          exclude: (_, { helpers }) => {
            const localePrefixes = Object.keys(locales ?? {}) // e.g. ['en', 'zh-Hant']
            const indexPages = ['index.md', ...localePrefixes.map((prefix) => `${prefix}/index.md`)]
            return indexPages.some(p => helpers.idEquals(p))
          },
        }),
        Components({
            dirs: [
              'docs/.vitepress/theme/components',
              resolve(
                typeof dirname(fileURLToPath(import.meta.url)) === 'string' ?
                dirname(fileURLToPath(import.meta.url)) :
                __dirname,
                './components',
              ),
            ],
            include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
            dts: './.vitepress/components.d.ts',
            transformer: 'vue3',
          }),
        vueJsx(),
        UnoCSS(),
      ],
      ssr: {
        noExternal: [
          '@nolebase/vitepress-plugin-enhanced-readabilities',
          '@nolebase/vitepress-plugin-highlight-targeted-heading',
        ],
      },
    },
    transformPageData(pageData) {
      // 构建 Markdown 文件路径
      const markdownFile = `${pageData.relativePath}`
      const filePath = path.join(process.cwd(), `${rootDir}`, markdownFile)

      // 从文件系统读取文件内容
      const content = readMarkdownFileContent(filePath)

      // 统计字数并插入到 Frontmatter
      const wordCount = countWords(content)

      return {
        frontmatter: {
          ...pageData.frontmatter,
          wordCount, // 将字数写入 Frontmatter
        },
      }
    },
  })
}

export default genConfig
