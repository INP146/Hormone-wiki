// composables/logoToast.ts
import { ref, onUnmounted } from 'vue'

const originalText = ref('')
let timer: ReturnType < typeof setTimeout > | null = null
let spanEl: HTMLSpanElement | null = null

function getLogoSpan(): HTMLSpanElement | null {
  if (spanEl) return spanEl
  spanEl = document.querySelector('.VPNavBarTitle .title span') as HTMLSpanElement
  return spanEl
}

/**
 * 显示临时 Logo 提示
 * @param text 要显示的文本内容
 * @param duration 停留时间（毫秒）
 */
export function logoToast(text: string, duration = 3000) {
  const el = getLogoSpan()
  if (!el) return
  
  if (!originalText.value) {
    originalText.value = el.innerText
  }
  
  el.innerText = text
  
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    el.innerText = originalText.value
  }, duration)
}

onUnmounted(() => {
  if (timer) clearTimeout(timer)
  const el = getLogoSpan()
  if (el && originalText.value) el.innerText = originalText.value
})