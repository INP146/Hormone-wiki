<script setup lang="ts">
import { useData } from 'vitepress'
import { useStorage } from '@vueuse/core'

const props = defineProps<{
  fontName: string
  fontI18nName: Record<string, string>
}>()

const activeFont = useStorage('activeFont', '')
const { lang } = useData()
</script>

<template>
  <div class="VPMenuLink" @click="activeFont = fontName">
    <button class="link" :class="[activeFont === fontName && 'active']">
      {{ fontI18nName[lang] || fontName }}
    </button>
  </div>
</template>

<style scoped>
.link {
  width: 100%;
  text-align: left;
  display: block;
  border-radius: 6px;
  padding: 0 12px;
  line-height: 32px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-1);
  white-space: nowrap;
  transition:
    background-color 0.25s,
    color 0.25s;
}

.link:hover {
  color: var(--vp-c-brand-1);
  background-color: var(--vp-c-default-soft);
}

.link.active {
  color: var(--vp-c-brand-1);
  background-color: unset;
  cursor: default;
}
</style>