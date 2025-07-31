import type { SidebarOptions } from '@project-trans/vitepress-theme-project-trans/theme'
import type { ThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'
import type { DefaultTheme } from 'vitepress'
import genConfig from '@project-trans/vitepress-theme-project-trans/config'
import { withThemeContext } from '@project-trans/vitepress-theme-project-trans/utils'

const nav: DefaultTheme.NavItem[] = [
  {
    text: '查看文档',
    link: '/docs/',
  },
  {
    text: '实用工具',
    items: [
      {
        text: '激素换算器',
        link: '/tools/hormone-converter',
      },
    ],
  },
  {
    text: '关于我们',
    items: [
      {
        text: '关于本站',
        link: '/about/',
      },
      {
        text: '免责声明',
        link: '/about/disclaimer',
      },
      {
        text: '版权声明',
        link: '/about/copyright',
      },
    ],
  },
]

const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  collapsed: true,
  documentRootPath: '/docs',
} satisfies Partial<SidebarOptions>

const sidebarOptions = [
  {
    ...baseConfig,
    scanStartPath: 'docs',
    resolvePath: '/docs/',
  },
  {
    ...baseConfig,
    scanStartPath: 'tools',
    resolvePath: '/tools/',
  },
  {
    ...baseConfig,
    scanStartPath: 'about',
    resolvePath: '/about/',
  },
]

const disclaimerStr = '<p>Hormone.wiki 提供的内容来源于编者经验及网络资料，仅供参考，不构成医疗、法律或其他专业建议，不能替代专业人士意见。请在需要时咨询相关专业人士。</p>' +
  '<p>Hormone.wiki 提及的机构、服务或产品信息仅供参考，不代表推荐或保证，Hormone.wiki 无法确保其真实性或可靠性，请谨慎核实。</p>' +
  '<p>若存在任何有误或不准确的内容，请联系 <a href="mailto:admin@hormone.wiki">admin@hormone.wiki</a>。</p>' +
 '<p>完整版的免责声明请见 <a href="/about/disclaimer">关于我们/免责声明</a>。</p>';
const commonDisclaimerStrSummary = 'Hormone.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。';
const commonDisclaimerStrDetail = '<p>Hormone.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。</p>' +
  '<p>除标注为 Hormone.wiki 的内容外，其他文章来自读者投稿，仅反映投稿者观点，不代表 Hormone.wiki 或其维护者立场。</p>' +
  disclaimerStr;

const themeConfig: ThemeContext = {
  siteTitle: "Hormone.wiki",
  siteDescription: '一份 Hrt 百科',
  // baseUrl: '/',
  /** Repo */
  githubRepoLink: 'https://github.com/INP146/Hormone-wiki',
  /** vitepress 根目录 */
  rootDir: 'docs',
  sitePattern: `example/docs`,
  hostName: 'https://hormone.wiki',
  /** 文档所在目录（目前似未使用此项） */
  include: ['docs', 'tools', 'about'],
  nav,
  sidebarOptions,
  // enableChangeLog: false,
  enableSuggestionBox: false,
  // HideReadingTime: true, /* 隐藏字数和预计阅读时间 */
  // HideLastUpdated: true, /* 隐藏最后更新时间 */
  // HideAuthors: true, /* 隐藏作者信息 */
  // fontsBaseUrl: 'http://localhost:8788', // For local development with wrangler pages dev
  disclaimerPaths: [
    {
      path: '/docs/',
      summaryHtml: commonDisclaimerStrSummary,
      detailHtml: commonDisclaimerStrDetail,
    },
  ],
  enableDisclaimer: true,
  disclaimerStatusKey: 'disclaimerStatus',
  disclaimerStatusExpiration: 2592000000,

  // i18n
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh',
    },
    en: {
      label: 'English',
      lang: 'en', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/en/', // 默认 /fr/ -- 显示在导航栏翻译菜单上，可以是外部的

      // 其余 locale 特定属性...
    },
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
