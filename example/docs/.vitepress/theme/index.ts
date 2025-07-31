// docs/.vitepress/theme/index.ts
// https://vitepress.dev/guide/custom-theme
import PtjsTheme from '@project-trans/vitepress-theme-project-trans/theme'
import HormoneConverter from '../../components/HormoneConverter.vue'

import 'uno.css'
import './style.css'
import './style/index.css'

export default {
  extends: PtjsTheme,
  enhanceApp({ app }) {
    app.component('HormoneConverter', HormoneConverter)
  }
}
