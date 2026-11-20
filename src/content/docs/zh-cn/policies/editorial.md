---
title: "编辑与来源政策"
titleZh: "编辑与来源政策"
description: "BioHack 知识库发布什么：第一手来源、证据等级、存根，以及它不会做出的主张。"
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 0
---

## 什么算来源

已审阅的事实句必须指向该页 `sources` 列表中的一条。优先使用文件本身：机构页面、法规、处方信息、试验登记或论文。二手综述只有在标成 `type: secondary`、并且页面不把它当成原始数据时才可以使用。

另一篇 BioHack 知识库页面是上下文，不是证据。

## 归档标签

`layer`（`observe` 观察、`intervene` 干预、`augment` 增强）、`purpose`（`restoration` 恢复、`enhancement` 增强、`both` 两者）和 `maturity`（`commercial`、`clinical-partial`、`early-clinical`、`research`、`highly-experimental`、`unknown`）用来组织页面。它们不能代替 `evidenceLevel`，也不是结局。在来源支持更紧的词之前，成熟度用 `unknown`。

## 证据等级

`A` 人体随机对照，`B` 人体观察性，`C` 动物，`D` 体外，`E` 轶事。页面没有引用该研究设计时用 `unrated`。药物获批本身不足以把页面标成 `A`，除非页面总结的就是那些试验。

## 存根

核对不了的事实就做成存根。正文包含**存根，需要来源**，`status` 为 `stub`，`noindex` 为 `true`，从而不进入站点地图。存根仍可以引用已经核对过的句子。存根横幅表示页面没有完成。

## 禁止的材料

编辑不添加给药方案、滴定计划、注射或植入操作、配制或溶解步骤，以及何处购买某种物质或器械的指引。以后若增加厂商记录，在声称两个主体是同一经营者之前需要两项独立来源，并且仍然不告诉读者如何购买。

编辑不编造研究、样本量、效应量、引语、价格或日期。会议议程不是表决结果，除非打开了表决记录。

## 单薄页面

本种子不包含自动生成的页面。以后的生成器应注意：在至少有三个独立数据字段和一段审阅过的文字之前，不要让页面被索引，否则设置 `noindex`。

## 审阅

`lastReviewed` 是有人最后一次把页面和来源对照的日期。在有真实编辑姓名之前，`reviewedBy` 可以留空。
