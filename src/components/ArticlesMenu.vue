<script setup lang="ts">
  import { useRoute } from 'vitepress'
  import { computed } from 'vue'
  import { data } from './articlesmenu.data'
  
  const route = useRoute()

  interface MenuNode {
    link: string
    text: string
    order: number
    children: MenuNode[]
  }

  const articles = computed(() => {
    const base = route.path
    const items = data.filter(item => item.url.startsWith(base) && item.url !== base)

    const root: MenuNode = { link: base, text: '', order: 0, children: [] }
    const map: Record<string, MenuNode> = { [base]: root }

    for (const item of items)
      map[item.url] = { link: item.url, text: item.title, order: item.order, children: [] }

    for (const item of items) {
      const parentUrl = item.url.replace(/[^/]+\/?$/, '')
      const parentNode = map[parentUrl] ?? root
      parentNode.children.push(map[item.url])
    }

    const sortTree = (node: MenuNode) => {
      node.children.sort((a, b) => a.order - b.order)
      node.children.forEach(sortTree)
    }
    sortTree(root)

    const flatten = (nodes: MenuNode[], depth = 1): { link: string, text: string, depth: number }[] =>
      nodes.flatMap(n => [
        { link: n.link, text: n.text, depth },
        ...flatten(n.children, depth + 1),
      ])

    return flatten(root.children)
  })
</script>

<template>
  <ul>
    <li v-for="article in articles" :key="article.link" :style="{ marginLeft: (article.depth - 1) * 20 + 'px' }">
      <a :href="article.link">{{ article.text }}</a>
    </li>
  </ul>
</template>