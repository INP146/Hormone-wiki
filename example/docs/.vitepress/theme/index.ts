// docs/.vitepress/theme/index.ts
import HormoneTheme from '@minesleet/vitepress-theme-hormone/theme'
import { onMounted } from 'vue'

import 'uno.css'
import './style.css'
import './style/index.css'

export default {
  extends: HormoneTheme,
  
  enhanceApp() {
    onMounted(() => {
      const clarityId = 'sr6gytvep4'
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = `https://www.clarity.ms/tag/${clarityId}`
      document.head.appendChild(script)
    })
  }
}