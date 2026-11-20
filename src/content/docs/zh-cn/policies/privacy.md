---
title: "隐私"
titleZh: "隐私"
description: "BioHack 知识库保存什么：静态网站、没有账号、本仓库不含分析脚本，托管方日志不在仓库里。"
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 2
---

本仓库构建的是静态网站。它不包含账号系统、通讯表单或分析脚本。

搜索使用 Pagefind，在浏览器里查询构建好的索引。没有应用服务器，查询也不会发到 BioHack 知识库的服务器。

预期托管方是 Cloudflare Pages。Cloudflare 或你改用的其他托管方可能按其自身政策保留连接日志。这项日志不在本仓库中配置。请用环境变量 `SITE_URL` 设置公开站点地址，以便规范链接和站点地图使用真实源站。

不要把健康信息、处方或身份文件发到 GitHub issue。那些 issue 是公开的。
