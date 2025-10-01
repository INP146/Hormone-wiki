import { baseConfig, themeConfig, render } from '../shared.ts'

const lang = 'zh-Hant'
const pathName = 'zh-hant'
const githubRepoLink = themeConfig.githubRepoLink
const sitePattern = themeConfig.sitePattern

const disclaimerStr =
  '<p>Hormone.wiki 提供的內容來源於編者經驗及網絡資料，僅供參考，不構成醫療、法律或其他專業建議，不能替代專業人士意見。請在需要時諮詢相關專業人士。</p>' +
  '<p>Hormone.wiki 提及的機構、服務或產品資訊僅供參考，不代表推薦或保證，Hormone.wiki 無法確保其真實性或可靠性，請謹慎核實。</p>' +
  `<p>若存在任何錯誤或不準確的內容，請聯繫 <a href="mailto:admin@hormone.wiki">admin@hormone.wiki</a>。</p>` +
  `<p>完整版的免責聲明請見 <a href="/${pathName}/about/disclaimer">關於我們／免責聲明</a>。</p>`

const commonDisclaimerStrSummary =
  'Hormone.wiki 的內容僅供參考，可能存在過時或不準確的資訊，請謹慎辨別。'

const commonDisclaimerStrDetail =
  '<p>Hormone.wiki 的內容僅供參考，可能存在過時或不準確的資訊，請謹慎辨別。</p>' +
  '<p>除標註為 Hormone.wiki 的內容外，其他文章來自讀者投稿，僅反映投稿者觀點，不代表 Hormone.wiki 或其維護者立場。</p>' +
  disclaimerStr

export const zhHantCfg = {
  label: '繁体中文',
  lang: `${lang}`,
  link: `/${pathName}/`,
  pathName: `${pathName}`,
  themeConfig: {
    nav: [
      {
        text: '網站首頁',
        link: `/${pathName}/`,
      },
      {
        text: '查看文件',
        link: `/${pathName}/docs/`,
      },
      {
        text: '實用工具',
        items: [
          {
            text: '荷爾蒙換算器',
            link: `/${pathName}/tools/hormone-converter`,
          },
        ],
      },
      {
        text: '關於我們',
        items: [
          {
            text: '關於本站',
            link: `/${pathName}/about/`,
          },
          {
            text: '免責聲明',
            link: `/${pathName}/about/disclaimer`,
          },
          {
            text: '版權聲明',
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
    siteDescription: '一份 HRT 百科',
    lang: `${lang}`,
  
    include: [`${pathName}/docs`, `${pathName}/tools`, `${pathName}/about`],
  
    disclaimerPaths: [
      {
        path: `/${pathName}/docs/`,
        summaryHtml: commonDisclaimerStrSummary,
        detailHtml: commonDisclaimerStrDetail,
      },
    ],
    disclaimerToggleExpandText: '展開',
    disclaimerToggleCollapseText: '收起',
    disclaimerHideText: '我知道了',
    disclaimerShowText: '浮動顯示',
    editLink: {
      pattern: `${githubRepoLink}/edit/main/${sitePattern}/:path`,
      text: '在 GitHub 上編輯此頁面', // label localization
    },
    outline: { label: '本頁大綱', level: 'deep' },
    lastUpdated: { text: '最後更新' },
    darkModeSwitchLabel: '深色模式',
    sidebarMenuLabel: '目錄',
    returnToTopLabel: '返回頂部',
    docFooter: {
      prev: '上一頁',
      next: '下一頁',
    },
    authorLabel: '作者',
    lastUpdatedLabel: '最後更新',
    anonymousAuthor: '匿名',
    wordCountLabel: '字數',
    readingTimeLabel: '預計閱讀時間',
    minutesSuffix: '分鐘',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜尋文件',
                buttonAriaLabel: '搜尋文件',
              },
              modal: {
                noResultsText: '無法找到相關結果',
                resetButtonTitle: '清除查詢條件',
                displayDetails: '顯示詳細列表',
                footer: {
                  selectText: '選擇',
                  navigateText: '切換',
                  closeText: '關閉',
                  // 無障礙（ARIA）標籤，用於描述鍵盤導航操作
                  navigateUpKeyAriaLabel: '上箭頭',
                  navigateDownKeyAriaLabel: '下箭頭',
                  selectKeyAriaLabel: '回車',
                  closeKeyAriaLabel: '退出',
                },
              },
            },
          },
        },
        _render: render,
      },
    },
    getChangelogTitle: '頁面歷史',
    getContributorsTitle: '貢獻者',
  },
}