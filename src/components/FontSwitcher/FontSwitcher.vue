<script setup lang="tsx">
import type { HormoneThemeConfig } from '../../config'
import { useFetch, useStorage } from '@vueuse/core'
import { useData } from 'vitepress'
import VPFlyout from 'vitepress/dist/client/theme-default/components/VPFlyout.vue'
import { computed, watchEffect } from 'vue'
import FontSwitcherItem from './FontSwitcherItem.vue'

const { theme } = useData<HormoneThemeConfig>()

const fontsBaseUrl = computed(() => theme.value.fontsBaseUrl)

const { data: fonts } = useFetch<Record<
  string,
  {
    paths: string[]
    fontFamily: string
    i18nName: Record<string, string>
  }
>>(`${fontsBaseUrl.value}/path_map.json`).json()

const activeFont = useStorage('activeFont', '')

watchEffect(() => {
  if (!fonts.value) return

  if (!fonts.value[activeFont.value]) {
    activeFont.value = 'HanChanQuanYuan'
  }

  document.documentElement.style.setProperty(
    '--main-font',
    fonts.value[activeFont.value].fontFamily,
  )
})

const items = computed(() => {
  if (!fonts.value) return []
  return Object.entries(fonts.value).map(([displayName, config]) => ({
    component: (
      <FontSwitcherItem
        fontName={displayName}
        fontI18nName={config.i18nName || {}}
      />
    ),
  }))
})
</script>

<template>
  <VPFlyout icon="i-octicon:typography-16" :items="items" />
  <template v-if="fonts && fonts[activeFont]">
    <link
      v-for="css in fonts[activeFont].paths"
      :key="css"
      rel="stylesheet"
      as="style"
      :href="`${fontsBaseUrl}/${css}/result.css`"
    />
  </template>
</template>

<style lang="css" scoped>
.VPMenuGroup + .VPMenuLink {
  margin: 12px -12px 0;
  border-top: 1px solid var(--vp-c-divider);
  padding: 12px 12px 0;
}
</style>