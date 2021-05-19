---
title: Minimal @vuepress/theme-blog setup
summary: |
  This post contains simple instructions and steps which can help you
  to get started with your own blog. This guide was added to demonstrate
  minimal setup needed to build personal blog very fast and cheap
date: 2020-01-01
author: daggerok
tags:
- JavaScript
- VuePress
---

[[toc]]

## Create blog project

* Create project dir
  ```bash
  mkdir -p /tmp/vuepress-theme-blog && cd $_
  ```
* Initialize npm project
  ```bash
  npm init -y
  ```
* Install required packages
  ```bash
  npm i -E vuepress @vuepress/theme-blog
  npm i -E @vuepress/plugin-back-to-top
  npm i -E @vuepress/plugin-medium-zoom
  ```
* Prepare blog files structure
  ```bash
  mkdir -p src/.vuepress -p src/_posts
  touch src/.vuepress/config.js
  touch _posts/2021-01-01-minimal-blog-setup.md
  ```
  ```
  src
  ├── .vuepress
  │   └── config.js
  └── _posts
      └── 2021-01-01-minimal-blog-setup.md
  ```
* Update next files like presented to complete task:
  * `src/.vuepress/config.js`
     
    @[code lang=js](@/src/.vuepress/config.js)
     
  * `src/_posts/2021-01-01-minimal-blog-setup.md`

    @[code lang=js](@/src/_posts/2021-01-01-minimal-blog-setup.md)
     
  * `package.json`
    
    @[code lang=json](@/package.json)

## Reference
* Read according blog post [https://daggerok.github.io/vuepress-theme-blog/]() for details
* [https://vuepress-theme-blog.ulivz.com/#installation]()
* [https://vuepress-theme-blog.ulivz.com/config/]()
* [https://billyyyyy3320.com/en/2020/01/25/intro-to-vuepress-blog-theme-and-plugin/]()
* [https://github.com/billyyyyy3320/Billy]()
* [https://z3by.github.io/vuepress-tools/plugins/]()
