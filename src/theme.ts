// 📦 Core dependencies
import type { Theme } from 'vitepress'
import type { VitePressSidebarOptions } from 'vitepress-sidebar/types'
import { onMounted, toRefs } from 'vue'
import { useData, useRoute } from 'vitepress'

// 🎨 Plugin styles
import 'nprogress-v2/dist/index.css'
import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'
import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

// 🧩 VitePress plugin components
import { NolebaseEnhancedReadabilitiesPlugin } from '@nolebase/vitepress-plugin-enhanced-readabilities/client'
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import googleAnalytics from 'vitepress-plugin-google-analytics'
import giscusTalk from 'vitepress-plugin-comment-with-giscus'
import { NProgress } from 'nprogress-v2/dist/index.js'

// 🏗️ Default theme
import DefaultTheme from 'vitepress/theme-without-fonts'

// 🖼️ Custom layout & styles
import Layout from './Layout.vue'
import './style.css'

export type SidebarOptions = VitePressSidebarOptions

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app, router, isClient }) {

    googleAnalytics({
      id: 'G-T9J2G2RNNS',
    }),
    
    app.use(NolebaseEnhancedReadabilitiesPlugin, {
      spotlight: {
        defaultToggle: true,
      },
      locales: {
        en: {
          title: {
            title: 'Interface Settings',
            titleAriaLabel: 'Interface Settings Menu',
          },
          layoutSwitch: {
            title: 'Layout Switch',
            titleAriaLabel: 'Layout Switch Menu',
            titleHelpMessage: 'Switch between different page layouts for optimal reading experience',
            titleScreenNavWarningMessage: 'Some layouts may not display properly on small screens',
            
            optionFullWidth: 'Full Width',
            optionFullWidthAriaLabel: 'Switch to full width layout',
            optionFullWidthHelpMessage: 'Expand both content and sidebar to maximum width',
            
            optionSidebarWidthAdjustableOnly: 'Adjust Sidebar Only',
            optionSidebarWidthAdjustableOnlyAriaLabel: 'Layout with adjustable sidebar only',
            optionSidebarWidthAdjustableOnlyHelpMessage: 'Only the sidebar width is adjustable',
            
            optionBothWidthAdjustable: 'Adjust Both',
            optionBothWidthAdjustableAriaLabel: 'Layout with adjustable sidebar and content',
            optionBothWidthAdjustableHelpMessage: 'Full control over both sidebar and content width',
            
            optionOriginalWidth: 'Original',
            optionOriginalWidthAriaLabel: 'Reset to original layout',
            optionOriginalWidthHelpMessage: 'Use default layout settings',
            
            contentLayoutMaxWidth: {
              title: 'Content Max Width',
              titleAriaLabel: 'Content Max Width',
              titleHelpMessage: 'Adjust the max width of content area',
              titleScreenNavWarningMessage: 'Might not be available on small screens',
              slider: 'Content Width Slider',
              sliderAriaLabel: 'Adjust content width',
              sliderHelpMessage: 'Set max content width in px',
            },
            pageLayoutMaxWidth: {
              title: 'Page Max Width',
              titleAriaLabel: 'Page Max Width',
              titleHelpMessage: 'Adjust the max width of the entire page',
              titleScreenNavWarningMessage: 'Might not be available on small screens',
              slider: 'Page Width Slider',
              sliderAriaLabel: 'Adjust page width',
              sliderHelpMessage: 'Set max page width in px',
            },
          },
          spotlight: {
            title: 'Focus Mode',
            titleAriaLabel: 'Toggle focus mode',
            titleHelpMessage: 'Highlights the current reading section',
            titleScreenNavWarningMessage: 'May not work well on small screens',
            
            optionOn: 'On',
            optionOnAriaLabel: 'Enable focus mode',
            optionOnHelpMessage: 'Helps you concentrate on one section',
            
            optionOff: 'Off',
            optionOffAriaLabel: 'Disable focus mode',
            optionOffHelpMessage: 'Restore normal view',
            
            styles: {
              title: 'Focus Style',
              titleAriaLabel: 'Select focus style',
              titleHelpMessage: 'Choose how the focused section is highlighted',
              titleScreenNavWarningMessage: 'Some styles may not apply on mobile',
              
              optionUnder: 'Underline',
              optionUnderAriaLabel: 'Underline highlight',
              optionUnderHelpMessage: 'Show a line under focused section',
              
              optionAside: 'Aside',
              optionAsideAriaLabel: 'Sidebar highlight',
              optionAsideHelpMessage: 'Show indicator on the side',
            },
          },
        },
        
        'zh-Hans': {
          title: {
            title: '界面设置',
            titleAriaLabel: '界面设置菜单',
          },
          layoutSwitch: {
            title: '布局切换',
            titleAriaLabel: '布局切换菜单',
            titleHelpMessage: '切换不同的页面布局以获得最佳阅读体验',
            titleScreenNavWarningMessage: '在小屏幕上部分布局可能无法正确显示',
            
            optionFullWidth: '全宽',
            optionFullWidthAriaLabel: '切换为全宽布局',
            optionFullWidthHelpMessage: '内容区域与侧边栏最大宽度',
            
            optionSidebarWidthAdjustableOnly: '仅调整侧边栏',
            optionSidebarWidthAdjustableOnlyAriaLabel: '切换为仅可调整侧边栏宽度的布局',
            optionSidebarWidthAdjustableOnlyHelpMessage: '内容宽度固定，仅调整侧边栏',
            
            optionBothWidthAdjustable: '可调内容与侧边栏',
            optionBothWidthAdjustableAriaLabel: '切换为可调整内容和侧边栏的布局',
            optionBothWidthAdjustableHelpMessage: '自定义自由度最大',
            
            optionOriginalWidth: '原始布局',
            optionOriginalWidthAriaLabel: '恢复为原始布局',
            optionOriginalWidthHelpMessage: '使用默认页面布局设置',
            
            contentLayoutMaxWidth: {
              title: '内容最大宽度',
              titleAriaLabel: '设置内容最大宽度',
              titleHelpMessage: '调整主要内容区的最大宽度',
              titleScreenNavWarningMessage: '在小屏幕设备上可能无效',
              slider: '内容宽度滑块',
              sliderAriaLabel: '滑动调整内容最大宽度',
              sliderHelpMessage: '单位为 px',
            },
            pageLayoutMaxWidth: {
              title: '页面最大宽度',
              titleAriaLabel: '设置页面最大宽度',
              titleHelpMessage: '控制整个页面容器的最大宽度',
              titleScreenNavWarningMessage: '在小屏幕设备上可能无效',
              slider: '页面宽度滑块',
              sliderAriaLabel: '滑动调整页面最大宽度',
              sliderHelpMessage: '单位为 px',
            },
          },
          spotlight: {
            title: '聚焦模式',
            titleAriaLabel: '聚焦模式切换',
            titleHelpMessage: '开启后将高亮当前阅读区域',
            titleScreenNavWarningMessage: '小屏幕设备上可能无法正常显示',
            
            optionOn: '开启',
            optionOnAriaLabel: '开启聚焦模式',
            optionOnHelpMessage: '增强段落可读性',
            
            optionOff: '关闭',
            optionOffAriaLabel: '关闭聚焦模式',
            optionOffHelpMessage: '恢复正常显示',
            
            styles: {
              title: '聚焦样式',
              titleAriaLabel: '选择聚焦样式',
              titleHelpMessage: '设置聚焦时的显示方式',
              titleScreenNavWarningMessage: '某些样式在移动设备上可能无效',
              
              optionUnder: '底线高亮',
              optionUnderAriaLabel: '底部高亮样式',
              optionUnderHelpMessage: '在当前段落下方显示一条线',
              
              optionAside: '边栏高亮',
              optionAsideAriaLabel: '边栏高亮样式',
              optionAsideHelpMessage: '在页面边缘显示聚焦指示器',
            },
          },
        },
        
        'zh-Hant': {
          title: {
            title: '介面設定',
            titleAriaLabel: '介面設定選單',
          },
          layoutSwitch: {
            title: '版面配置切換',
            titleAriaLabel: '版面配置選單',
            titleHelpMessage: '切換不同的頁面版面以獲得最佳閱讀體驗',
            titleScreenNavWarningMessage: '部分版面在小螢幕裝置上可能無法正常顯示',
            
            optionFullWidth: '全寬',
            optionFullWidthAriaLabel: '切換為全寬版面',
            optionFullWidthHelpMessage: '內容與側邊欄最大寬度',
            
            optionSidebarWidthAdjustableOnly: '僅調整側邊欄',
            optionSidebarWidthAdjustableOnlyAriaLabel: '僅可調整側邊欄寬度的版面',
            optionSidebarWidthAdjustableOnlyHelpMessage: '內容固定寬度',
            
            optionBothWidthAdjustable: '可調整內容與側邊欄',
            optionBothWidthAdjustableAriaLabel: '可自由調整版面配置',
            optionBothWidthAdjustableHelpMessage: '最大自由度配置',
            
            optionOriginalWidth: '原始配置',
            optionOriginalWidthAriaLabel: '回復預設版面配置',
            optionOriginalWidthHelpMessage: '使用預設頁面佈局',
            
            contentLayoutMaxWidth: {
              title: '內容最大寬度',
              titleAriaLabel: '內容區最大寬度設定',
              titleHelpMessage: '調整主要內容區域寬度上限',
              titleScreenNavWarningMessage: '部分裝置可能無法使用',
              slider: '內容寬度滑桿',
              sliderAriaLabel: '滑動調整內容最大寬度',
              sliderHelpMessage: '單位為 px',
            },
            pageLayoutMaxWidth: {
              title: '頁面最大寬度',
              titleAriaLabel: '整頁寬度設定',
              titleHelpMessage: '控制整體頁面的寬度上限',
              titleScreenNavWarningMessage: '小裝置上可能無效',
              slider: '頁面寬度滑桿',
              sliderAriaLabel: '滑動調整頁面寬度',
              sliderHelpMessage: '單位為 px',
            },
          },
          spotlight: {
            title: '聚焦模式',
            titleAriaLabel: '聚焦模式開關',
            titleHelpMessage: '啟用後會自動高亮目前區塊',
            titleScreenNavWarningMessage: '小螢幕裝置可能無法適配',
            
            optionOn: '開啟',
            optionOnAriaLabel: '開啟聚焦模式',
            optionOnHelpMessage: '提升段落可讀性',
            
            optionOff: '關閉',
            optionOffAriaLabel: '關閉聚焦模式',
            optionOffHelpMessage: '回復正常視圖',
            
            styles: {
              title: '聚焦樣式',
              titleAriaLabel: '選擇聚焦樣式',
              titleHelpMessage: '設定聚焦顯示方式',
              titleScreenNavWarningMessage: '部分樣式可能不支援行動裝置',
              
              optionUnder: '底線高亮',
              optionUnderAriaLabel: '底線樣式',
              optionUnderHelpMessage: '在當前區塊底部加一條線',
              
              optionAside: '側邊高亮',
              optionAsideAriaLabel: '側邊聚焦樣式',
              optionAsideHelpMessage: '在頁面邊緣顯示指示器',
            },
          },
        }
      }
    })

    app.use(NolebaseGitChangelogPlugin, {
      locales: {
        'en': {
          changelog: {
            title: 'Changelog',
            noData: 'No recent changes',
            lastEdited: 'Last edited {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'enUS',
            viewFullHistory: 'View full history',
            committedOn: ' on {{date}}',
          },
          contributors: {
            title: 'Contributors',
            noDate: 'There are no Contributors'
          }
        },
        'zh-Hans': {
          changelog: {
            title: '页面历史',
            noData: '暂无最近变更历史',
            lastEdited: '本页面最后编辑于 {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'zhCN',
            viewFullHistory: '查看完整历史',
            committedOn: '于 {{date}} 提交',
          },
          contributors: {
            title: '贡献者',
            noDate: '还没有贡献者'
          }
        },
        'zh-Hant': {
          changelog: {
            title: '頁面歷史',
            noData: '暫無最近變更歷史',
            lastEdited: '本頁面最後編輯於 {{daysAgo}}',
            lastEditedDateFnsLocaleName: 'zhTW',
            viewFullHistory: '查看完整歷史',
            committedOn: '於 {{date}} 提交',
          },
          contributors: {
            title: '貢獻者',
            noDate: '尚無貢獻者'
          }
        },
      }
    })
  },
  
  if (inBrowser) {
    NProgress.configure({ showSpinner: false })
    router.onBeforeRouteChange = () => {
      NProgress.start() // 开始进度条
    }
    router.onAfterRouteChanged = () => {
      NProgress.done() // 停止进度条
    }
  },
  
  setup() {
    const { frontmatter } = toRefs(useData())
    const route = useRoute()
  
    giscusTalk(
      {
        repo: 'INP146/Hormone-wiki',
        repoId: 'R_kgDOPUppSQ',
        category: 'General',
        categoryId: 'DIC_kwDOPUppSc4Ct5ag',
        mapping: 'pathname',
        inputPosition: 'top',
        lang: 'en',
        locales: {
          'zh-Hans': 'zh-CN',
          'zh-Hant': 'zh-TW',
          'en': 'en',
        },
        homePageShowComment: false,
        lightTheme: 'light',
        darkTheme: 'transparent_dark',
      },
      {
        frontmatter,
        route,
      },true // 全局开启
    )
  },
} satisfies Theme
