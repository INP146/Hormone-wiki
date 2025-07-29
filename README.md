<p align="center">
  <img src="example/docs/public/logo.svg" alt="Logo" width="180" />
</p>

# Welcome to Hormone.wiki

欢迎来到 **Hormone.wiki**. 这是一份给跨性别人群的 HRT 百科。希望能为有需要的人提供一点帮助。

**Hormone.wiki**是一个基于个人经验和网络资料整理的荷尔蒙知识共享平台，旨在为跨性别人群提供一些学习资料。这里涵盖 HRT 相关的基础知识、药物信息、经验分享、理论研究等内容，帮助大家更方便地获取和理解这些信息。

网站当前正处于建设初期，内容尚未完善，欢迎补充。

## 🙏 致谢

本项目基于以下开源项目与平台构建：

- [VitePress](https://github.com/vuejs/vitepress)
- [VitePress-Theme-Project-Trans](https://github.com/project-trans/vitepress-theme-project-trans)
- [Cloudflare Pages](https://pages.cloudflare.com/)
- 字体：[猫啃粉圆](https://github.com/NightFurySL2001/TangYuan-font)、[寒蝉全圆](https://github.com/Warren2060/ChillRound)
- 其他开源项目

在此一并致谢！

## 🚀 本地开发与构建

在项目根目录执行以下命令：

```sh
pnpm i           # 安装依赖
pnpm build       # 构建主题
cd example
pnpm dev         # 启动本地开发环境
pnpm build       # 构建 VitePress 页面

```

构建输出目录为：`example/docs/.vitepress/dist`

## 🌍 Cloudflare Pages 自动部署

1. Fork 本仓库
2. 登录 Cloudflare，进入 Pages
3. 新建 Pages 项目，关联仓库
4. 设置构建命令：

```sh
git fetch --unshallow && pnpm i && pnpm build && cd example && pnpm build
```

5. 设置输出目录：`example/docs/.vitepress/dist`

每次提交后将自动构建并部署至 Cloudflare 全球网络。

## ©️ 版权声明

### 源码许可（MIT License）

本仓库源码基于以下开源项目开发：

- [VitePress](https://github.com/vuejs/vitepress) — MIT License  
- [VitePress-Theme-Project-Trans](https://github.com/project-trans/vitepress-theme-project-trans) — MIT License
- [Hormone.wiki](http://hormone.wiki) 基于上述项目进行二次开发与整合，并保留相应修改的版权。

整个网站的源码，包括主题样式、组件、构建脚本等，**统一遵循 [MIT 许可证](https://opensource.org/licenses/MIT)发布**，您可以自由使用、修改与分发，但需保留原始及修改者的版权声明。详见[LICENSE](https://github.com/INP146/Hormone-wiki/blob/main/LICENSE)。

### 内容授权（CC BY 4.0）

[![知识共享许可协议](https://i.creativecommons.org/l/by/4.0/88x31.png)](https://creativecommons.org/licenses/by-sa/4.0)

除特别说明外，网站内所有署名为 **Hormone.wiki** 的内容，包括：

- 页面中显示作者为 `Hormone.wiki`；
- 源码中标记 `author: Hormone.wiki`；

均遵循 [知识共享署名 4.0 国际许可协议（CC BY 4.0）](https://creativecommons.org/licenses/by/4.0/deed.zh) 发布。

这意味着您可以：
- 复制、转载本站文章；
- 进行合理修改或改编；
- 商业使用或引用部分内容。

但请在明显位置标注来源为 Hormone.wiki，并附上原文链接。

---
