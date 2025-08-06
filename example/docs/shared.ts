export const baseConfig = {
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  useFolderLinkFromIndexFile: true,
  collapsed: true,
  documentRootPath: '/docs',
}

export const themeConfig = {
  disableChangelog: false,
  disableContributors: false,
  githubRepoLink: 'https://github.com/INP146/Hormone-wiki',
  sitePattern: `example/docs`,
  mapAuthors: [
    {
    name: 'INP146',
    username: 'INP146',
    mapByEmailAliases: ['inp1458@gmail.com'],
    avatar: 'https://github.com/INP146.png',
    }
  ]
}

export function render(src: string, env: any, md: any): string {
  if (env.frontmatter?.search === false)
    return ''
  let html = md.render(src, env)
  if (env.frontmatter?.title)
    html = md.render(`# ${env.frontmatter.title}\n`) + html
  return html
}