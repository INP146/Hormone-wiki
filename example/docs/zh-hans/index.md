---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hormone.wiki
titleTemplate: Home
author: Hormone.wiki
lang: zh-Hans

head:
  - - meta
    - name: keywords
      content: 荷尔蒙, HRT, 跨性别, 健康, 内分泌, 激素, 雌二醇, 维基
  - - meta
    - name: description
      content: 这是一个基于个人经验和网络资料整理的荷尔蒙知识共享平台，旨在为跨性别人群提供一些学习资料。

hero:
  name: "<b><span class='hormone'>&nbsp Hormone.wiki &nbsp</span></b>"
  text: "一份 HRT 百科"
  tagline: 欢迎来到<span class='hormone-non-rainbow'> Hormone.wiki.</span> 这是一份给跨性别人群的 HRT 百科。希望能为有需要的人提供一点帮助。
  image:
    src: /logo.svg
    alt: Progynova
  actions:
    - theme: brand
      text: 📄查看文档
      link: ./docs/
    - theme: alt
      text: 🛠️实用工具
      link: ./tools/
    - theme: alt
      text: 🌚凑个对称
      link: ./about/
    - theme: alt
      text: ℹ️关于我们
      link: ./about/


---
<script setup>
import { HomeContent } from '@INP146/vitepress-theme-hormone/components'
</script>
<HomeContent>

<div class="home custom-block">
<p class="custom-block-title">INFO</p>
<p style="">
这是一个基于个人经验和网络资料整理的荷尔蒙知识共享平台，旨在为跨性别人群提供一些学习资料。这里涵盖 HRT 相关的基础知识、药物信息、经验分享、理论研究等内容，帮助大家更方便地获取和理解这些信息。当然，所有内容仅供参考，希望能为有需要的人提供一点帮助。
</p>
</div>

<div class="home custom-block">
<p class="custom-block-title">INFO</p>
<p style="">
网站当前正处于建设初期，内容尚未完善，欢迎补充。</p>
</div>

</HomeContent>
