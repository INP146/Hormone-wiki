<script setup lang="ts">
  import { useData } from 'vitepress'
  import { ref, watch, computed } from 'vue'
  
  // 获取页面数据
  const { frontmatter, theme } = useData()
  
  // 计算阅读时间的函数
  function calculateReadingTime(wordCount: number) {
    const wordsPerMinute = 500
    return Math.ceil(wordCount / wordsPerMinute)
  }
  
  // 响应式变量
  const wordCount = ref(frontmatter.value.wordCount || 0)
  const readingTime = ref(calculateReadingTime(wordCount.value))
  
  // 监听 wordCount 更新
  watch(() => frontmatter.value, (newFrontmatter) => {
    wordCount.value = newFrontmatter.wordCount || 0
    readingTime.value = calculateReadingTime(wordCount.value)
  })
  
  // 国际化文本
  const wordCountLabel = computed(() => theme.value?.wordCountLabel ?? 'Words')
  const readingTimeLabel = computed(() => theme.value?.readingTimeLabel ?? 'Estimated reading time')
  const minutesSuffix = computed(() => theme.value?.minutesSuffix ?? 'min')
</script>

<template>
  <div class="inline-flex items-center gap-4">
    <div class="inline-flex items-center gap-1">
      <span class="i-octicon:pencil-16" />
      <span>{{ wordCountLabel }}: {{ wordCount }}</span>
    </div>
    <div class="inline-flex items-center gap-1">
      <span class="i-octicon:book-16" />
      <span>{{ readingTimeLabel }}: {{ readingTime }} {{ minutesSuffix }}</span>
    </div>
  </div>
</template>

<style scoped>
</style>