---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
title: Hormone.wiki
titleTemplate: Home
author: Hormone.wiki
lang: en

head:
  - - meta
    - name: keywords
      content: Hormones, HRT, Transgender, Health, Endocrinology, Estrogen, Wiki

hero:
  name: "<b><span class='hormone'>&nbsp Hormone.wiki &nbsp</span></b>"
  text: "An HRT wiki"
  tagline: Welcome to <span class='hormone-non-rainbow'>Hormone.wiki.</span> This is an HRT wiki for the transgender community. We hope it can offer some support to those in need.
  image:
    src: /logo.svg
    alt: Progynova
  actions:
    - theme: brand
      text: 📄 Read the Docs
      link: ./docs/
    - theme: alt
      text: 🛠️ Tools
      link: ./tools/
    - theme: alt
      text: 🌚 Symmetry Filler
      link: ./about/
    - theme: alt
      text: ℹ️ About Us
      link: ./about/
---

<script setup>
import { HomeContent } from '@minesleet/vitepress-theme-hormone/components'
</script>

<HomeContent>

<div class="home custom-block">
  <p class="custom-block-title">INFO</p>
  <p style="">
    This is a hormone knowledge-sharing platform compiled from personal experience and online resources. It aims to provide learning materials for the transgender community. It includes foundational HRT knowledge, medication information, personal experiences, theoretical studies, and more — all to help users more easily access and understand this information. Of course, all content is for reference only. We hope it can offer some support to those in need.
  </p>
</div>

<div class="home custom-block">
  <p class="custom-block-title">INFO</p>
  <p style="">
    The site is currently under early development and the content is still incomplete. Contributions are welcome.
  </p>
</div>

</HomeContent>