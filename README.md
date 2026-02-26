# UwekezajiTZ

Blog na kituo cha rasilimali kwa wawekezaji wa Tanzania (Swahili-first). Mada kuu: hisa za DSE, mutual funds (UTT, NMB n.k), hati fungani na elimu ya fedha.

## Kuanzisha mradi

1) Hakikisha una Node.js 18+ na pnpm.
2) Sakinisha utegemezi: `pnpm install`
3) Anza dev server: `pnpm dev` (chaguo-msingi huendesha kwenye http://localhost:4321)
4) Jenga toleo la uzalishaji: `pnpm build`
5) Kagua uzalishaji: `pnpm preview`

## Muundo muhimu

- `src/content/blog/` — makala za markdown.
- `src/pages/` — ukurasa mkuu, blog, tagi, mada (DSE, Mutual Funds), kuhusu, wasiliana.
- `src/components/blog/` — kadi za makala, tag pill, breadcrumbs, TOC, related.
- `src/consts.ts` — metadata ya tovuti (title, description, URL).

## Kuongeza makala mpya

1) Unda faili jipya ndani ya `src/content/blog/` (mfano `jina-la-makala.md`).
2) Tumia frontmatter hapa chini kisha andika maudhui (800–1500 maneno, tumia H2/H3 na sehemu ya Maswali Yanayoulizwa Mara kwa Mara).

```md
---
title: "Kichwa cha Makala"
description: "Muhtasari mfupi (meta description)."
pubDate: 2025-08-01
updatedDate: 2025-08-05 # hiari
author: "UwekezajiTZ"      # hiari
tags: ["DSE","Mutual Funds","Elimu ya Fedha"]
heroImage: "/images/blog-post/post-1.webp" # hiari
faq:
  - question: "Swali 1?"
    answer: "Jibu fupi."
  - question: "Swali 2?"
    answer: "Jibu fupi."
draft: false
---

## Utangulizi
Mwili wa makala hapa...
```

3) Tumia viungo vya ndani kama `/blog/slug-ya-makala-nyingine` kusaidia msomaji.
4) `pnpm dev` kuangalia muonekano; `pnpm build` kuhakikisha hakuna makosa kabla ya kutuma.

## Vipengele vya SEO

- Canonical na `site` zimetumia `https://uwekezaji.co.tz`.
- RSS inapatikana kwenye `/rss.xml`; sitemap hutolewa kiotomatiki.
- Kila makala ina JSON-LD Article + FAQ (ukijaza `faq`).

## Maelezo mengine

- Lugha chaguo-msingi: Swahili (`lang="sw"`), eneo muda: `Africa/Dar_es_Salaam`.
- UI bado inategemea Astro + Tailwind + shadcn-style components.
