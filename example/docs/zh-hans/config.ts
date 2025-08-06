import { baseConfig, themeConfig, render } from '../shared.ts'

const lang = 'zh-Hans'
const pathName = 'zh-hans'
const githubRepoLink = themeConfig.githubRepoLink
const sitePattern = themeConfig.sitePattern

const disclaimerStr =
  '<p>Hormone.wiki 提供的内容来源于编者经验及网络资料，仅供参考，不构成医疗、法律或其他专业建议，不能替代专业人士意见。请在需要时咨询相关专业人士。</p>' +
  '<p>Hormone.wiki 提及的机构、服务或产品信息仅供参考，不代表推荐或保证，Hormone.wiki 无法确保其真实性或可靠性，请谨慎核实。</p>' +
  `<p>若存在任何有误或不准确的内容，请联系 <a href="mailto:admin@hormone.wiki">admin@hormone.wiki</a>。</p>` +
  `<p>完整版的免责声明请见 <a href="/${pathName}/about/disclaimer">关于我们/免责声明</a>。</p>`

const commonDisclaimerStrSummary =
  'Hormone.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。'

const commonDisclaimerStrDetail =
  '<p>Hormone.wiki 的内容仅供参考，可能存在过时或不准确的信息，请谨慎甄别。</p>' +
  '<p>除标注为 Hormone.wiki 的内容外，其他文章来自读者投稿，仅反映投稿者观点，不代表 Hormone.wiki 或其维护者立场。</p>' +
  disclaimerStr

export const zhHansCfg = {
  label: '简体中文',
  lang: `${lang}`,
  link: `/${pathName}/`,
  pathName: `${pathName}`,
  themeConfig: {
    nav: [
      {
        text: '查看文档',
        link: `/${pathName}/docs/`,
      },
      {
        text: '实用工具',
        items: [
          {
            text: '激素换算器',
            link: `/${pathName}/tools/hormone-converter`,
          },
        ],
      },
      {
        text: '关于我们',
        items: [
          {
            text: '关于本站',
            link: `/${pathName}/about/`,
          },
          {
            text: '免责声明',
            link: `/${pathName}/about/disclaimer`,
          },
          {
            text: '版权声明',
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
    siteDescription: '一份 Hrt 百科',
    lang: `${lang}`,
    include: [`${pathName}/docs`, `${pathName}/tools`, `${pathName}/about`],
  
    disclaimerPaths: [
      {
        path: `/${pathName}/docs/`,
        summaryHtml: commonDisclaimerStrSummary,
        detailHtml: commonDisclaimerStrDetail,
      },
    ],
    disclaimerToggleExpandText: '展开',
    disclaimerToggleCollapseText: '收起',
    disclaimerHideText: '我知道了',
    disclaimerShowText: '浮动显示',
    editLink: {
      pattern: `${githubRepoLink}/edit/main/${sitePattern}/:path`,
      text: '在 GitHub 上编辑此页面', // label localization
    },
    outline: { label: '本页大纲', level: 'deep' },
    lastUpdated: { text: '最后更新' },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '目录',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    authorLabel: '作者',
    lastUpdatedLabel: '最后更新',
    anonymousAuthor: '匿名',
    wordCountLabel: '字数',
    readingTimeLabel: '预计阅读时间',
        minutesSuffix: '分钟',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档',
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                displayDetails: '显示详细列表',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  // 无障碍（ARIA）标签，用于描述键盘导航操作
                  navigateUpKeyAriaLabel: '上箭头',
                  navigateDownKeyAriaLabel: '下箭头',
                  selectKeyAriaLabel: '回车',
                  closeKeyAriaLabel: '退出',
                },
              },
            },
          },
        },
        _render: render,
      },
    },
    getChangelogTitle: '页面历史',
    getContributorsTitle: '贡献者',
  },
}