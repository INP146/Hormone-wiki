import { createContentLoader } from 'vitepress'

declare const data: { url: string, title: string, order: number }[]

export { data }

export default createContentLoader('**/*.md', {
  transform: list =>
    list.map(item => ({
      url: item.url,
      title: item.frontmatter.title,
      order: item.frontmatter.order ?? 0,
    })),
})
