---
title: "如何添加页面"
titleZh: "如何添加页面"
description: "如何添加 BioHack 知识库页面：选择模板、填写字段、引用来源，并且不要加入操作方案。"
entityType: "navigation"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 2
---

## 1. 复制模板

模板在仓库根目录的 `templates/`，每种实体一个文件：化合物、器械、公司、临床试验、研究、厂商、法规、术语、主题、指南和对比。模板本身不发布。

## 2. 保存页面

英文文件放在 `src/content/docs/`。对应的简体中文文件放在 `src/content/docs/zh-cn/`，路径相同。Starlight 用这一对生成 `hreflang`。缺少中文文件时，站内链接检查会失败（`errorOnFallbackPages`）。

链接使用小写短横线。顶层目录是九个领域：`biochemical/`、`neurohacking/`、`bionic/`、`cyborg/`、`genetic/`、`longevity/`、`quantified-self/`、`microbiome/`、`lifestyle/`，以及 `overview/`、`regulation/` 和其他横向栏目。

## 3. 填写前言

必填包括 `title`、`description`（40–200 个字符）、`entityType`、`lastReviewed` 和 `status`（`draft`、`reviewed` 或 `stub`）。存根页设置 `noindex: true`。不是 `navigation` 或 `policy` 的已审阅页面，`sources` 里至少要有一条，含 `url`、`title` 和 `accessed`。

在页面引用具体研究设计之前，`evidenceLevel` 保持 `unrated`。不要用另一篇维基页面给主张评级。

## 4. 只写打开过的内容

转述或引用你打开过的文件，并记下查阅日期。核对不了的事实就不要写，或者把页面标成 `stub`，并写上**存根，需要来源**。

不要加入剂量、滴定、注射或植入步骤、配制步骤或购买地点。将来的厂商页只记录法规和质量事件，不是商店。

## 5. 检查

`node scripts/check-content.mjs` 检查上述规则。`npm run build` 会运行 Starlight 链接校验，内部链接或标题锚点坏了就会失败。
