<script setup lang="ts">
  import { useData } from 'vitepress'
  import { computed, onMounted, ref, watchEffect } from 'vue'
  import ReadingTime from './ReadingTime.vue'
  
  const { frontmatter, page, theme, lang } = useData()
  
  // 计算页面的最后更新时间
  const date = computed(() => new Date(frontmatter.value.lastUpdated ?? page.value.lastUpdated))
  const isoDatetime = computed(() => date.value.toISOString())
  const datetime = ref('')
  
  // 避免 hydration 错误，在组件挂载后执行
  onMounted(() => {
    watchEffect(() => {
      datetime.value = new Intl.DateTimeFormat(
        theme.value.lastUpdated?.formatOptions?.forceLocale ? lang.value : undefined,
        theme.value.lastUpdated?.formatOptions ?? {
          dateStyle: 'short',
          timeStyle: 'short',
        },
      ).format(date.value)
    })
  })
  
  // 作者信息
  const authors = computed(() => {
    let author = (frontmatter.value?.author ?? []) as string[]
    if (!Array.isArray(author)) author = [author]
    return author
  })
  
  // 国际化文本
  const authorLabel = computed(() => theme.value?.authorLabel ?? 'Author')
  const lastUpdatedLabel = computed(() => theme.value?.lastUpdatedLabel ?? 'Last updated')
  const anonymousLabel = computed(() => theme.value?.anonymousAuthor ?? 'Anonymous')
  
  // 显示作者文本
  const displayAuthors = computed(() => {
    if (authors.value.length === 0) {
      return anonymousLabel.value
    } else {
      return authors.value.join(', ')
    }
  })
</script>

<template>
  <div class="mb-10 mt-4 flex flex-wrap gap-4">
    <div v-if="!theme.HideAuthors" class="inline-flex items-center gap-1">
      <span class="i-octicon:person" />
      <span>{{ authorLabel }}:</span>
      <span>{{ displayAuthors }}</span>
    </div>
    
    <div v-if="!theme.HideLastUpdated" class="inline-flex items-center gap-1">
      <span class="i-octicon:calendar-16" />
      <span>{{ lastUpdatedLabel }}:</span>
      <time :datetime="isoDatetime">{{ datetime }}</time>
    </div>
    
    <ClientOnly>
      <ReadingTime v-if="!theme.HideReadingTime" />
    </ClientOnly>
  </div>
</template>