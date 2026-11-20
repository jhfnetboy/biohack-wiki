---
title: "更正政策"
titleZh: "更正政策"
description: "如何报告 BioHack 知识库中的错误，以及来源支持不了某句时编辑会改什么。本页不是医疗建议，也不能代替原始文件。"
entityType: "policy"
domain: "cross-cutting"
domains:
  - "cross-cutting"
evidenceLevel: "unrated"
lastReviewed: "2026-11-20"
status: "reviewed"
sidebar:
  order: 1
---

如果某句话是错的、没有来源或已经过时，请在 [jhfnetboy/biohack-wiki](https://github.com/jhfnetboy/biohack-wiki) 开 issue 或提交 pull request。请写明页面、原句，以及与之矛盾的文件。

编辑应当：

1. 删掉或改写该句，使它与打开过的来源一致。
2. 增补或替换 `sources` 条目，包括查阅日期。
3. 更新 `lastReviewed`。
4. 如果剩下的内容不再支持“已审阅”，就把状态改成 `stub` 并设置 `noindex: true`。

不要把已知错误留在页面上，等以后再改。更正通过 git 成为公开历史。本种子不另设更正日志。

关于网站本身的安全问题也可以使用同一个 issue 跟踪器。本站没有账号，也不保存读者档案。
