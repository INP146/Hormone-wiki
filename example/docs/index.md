---
layout: home
title: Hormone.wiki
titleTemplate: 🌐 Redirecting...
author: Hormone.wiki
head:
  - - meta
    - name: keywords
      content: Hormones, HRT, Transgender, Health, Endocrinology, Estrogen, Wiki
  - - meta
    - name: description
      content: This is a hormone knowledge-sharing platform compiled from personal experience and online resources. It aims to provide learning materials for the transgender community.
---

<script setup lang="ts">
import { useRouter } from 'vitepress'
import { onMounted } from 'vue'

const langMap: Record<string, string> = {
  'zh-cn': 'zh-hans',
  'zh-sg': 'zh-hans',
  'zh-hk': 'zh-hant',
  'zh-mo': 'zh-hant',
  'zh-tw': 'zh-hant',
  'zh-hant': 'zh-hant',
  'en': 'en',
  'en-us': 'en',
  'en-gb': 'en',
}

const fallbackLang = 'zh-hans'

const rawLang =
  typeof navigator !== 'undefined'
    ? (navigator.language || navigator.userLanguage || '').toLowerCase()
    : ''

const lang = langMap[rawLang] || langMap[rawLang.split('-')[0]] || fallbackLang

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.go(`/${lang}/`)
  }, 300)

  if (typeof document !== 'undefined') {
    document.getElementById('target-lang')!.innerText =
      navigator.language || navigator.userLanguage || 'unknown'

    const loadingVariants = ['Loading.', 'Loading..', 'Loading...']
    let i = 0
    const loadingEl = document.getElementById('loading-text')
    setInterval(() => {
      if (loadingEl) loadingEl.textContent = loadingVariants[i % loadingVariants.length]
      i++
    }, 500)
  }
})
</script>

# Redirecting

Your language is detected as **<span id="target-lang">loading</span>**.

We are redirecting you to the appropriate version. If nothing happens, you can choose manually:

- [🇬🇧 English](/zh-hans/)
- [🇨🇳 简体中文](/zh-hans/)
- [🇨🇳 繁體中文](/zh-hant/)

<p id="loading-text" style="font-weight: bold; font-size: 1.1em; margin-top: 1rem;"></p>