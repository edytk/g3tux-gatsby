---
title: 'Hello World! Making this blog with Gatsby'
date: "2019-05-02"
draft: false
path: "/articles/2019-04-02"
category: "articles"
tags: ["javascript"]
project: "unsorted"
---

Saya baru saja mendevelop ulang website personal saya menggunakan [Gatsby](https://gatsbyjs.org) dan memindahkan hosting yang semula menggunakan [Github Pages](https://pages.github.com) menjadi [Netlify](https://netlify.com). Selain itu, saya juga membeli domain baru yang semula menggunakan subdomain dari [gaptek.net](https://gaptek.net) menjadi beralamatkan [ET[dot]MK](https://et.mk) yang mana merupakan singkatan dari nama panjang saya ``Edy Tama Kusumajaya``, hehe. Sebagai bagian dari pergantian domain tersebut, tentu saya ingin mengarahkan semua traffic yang semula dari ``dev.gaptek.net`` berpindah ke ``et.mk``.


Hello, this is my first blog post with a new domain and platform. The post is being written in markdown and implemented using [Gatsby](https://www.gatsbyjs.org).


## Why Gatsby?

There are [a lot of static site generators](https://www.staticgen.com/) to choose from. Jekyll, Hugo, Next, and Hexo are some of the big ones, and I've heard of some interesting ones like Eleventy as well. At first, I thought I'd just want something that outputs straight HTML, and that a heavy JavaScript app couldn't possibly be better than simple HTML and CSS.

However, I realized that an SSG like Gatsby utilizes the power of code/data splitting, pre-loading, pre-caching, image optimization, and all sorts of performance enhancements that would be difficult or impossible to do with straight HTML.

Since I primarily write JavaScript these days, I definitely wanted an SSG that runs on Node.js, and if it uses React, even better. I tested out a few sites that run on Gatsby and yeah - they were fast. Blazingly fast.

A few things I really like about Gatsby:

- No page reloads - this site is now a SPA (single page app), and clicking on any internal page from within the website doesn't need to load a completely new resource
- Image optimization - all the images are automatically stripped of metadata, optimized, resized, lazy-loaded, and compressed
- Pre-fetch resources - Gatsby detects what links are available on a given page and loads that data into the cache
- Bundling and minification - code is minified, bundled, and served
- Server side rendered at build time
- Anyone can edit my posts! If you see a typo or an error, just fork the repo and make the change!
- Every time I push to the repo, the site gets automatically deployed.

Very little boilerplate code was necessary to get started with Gatsby. I just forked the [Gatsby Advanced Starter](https://github.com/vagr9k/gatsby-advanced-starter/), a very simple, minimalist, completely UI-free foundation after my own heart, and started working with it.

I should mention I moved my host from [Github Pages](https://pages.github.com/) to [Netlify](https://www.netlify.com/), which is awesome. I really can't say enough about them. I'm highly impressed with how quick and easy it is to set up anything I want.