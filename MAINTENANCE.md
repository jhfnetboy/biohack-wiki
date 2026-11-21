# BioHack Wiki 维护手册（MAINTENANCE）

本文件不含任何密钥的值，只写名字和存放位置。

## 这是什么
- BioHack Wiki：生物黑客与健康目标的教育性知识库（仅供教育，不是医疗建议）。默认英文，另有简体中文（zh-CN）与泰文（th）。
- 线上：https://biohack-wiki.pages.dev
- 仓库：jhfnetboy/biohack-wiki（本仓库）。Astro Starlight 静态站，构建输出 `dist/`。
- Cloudflare Pages 项目名：`biohack-wiki`。项目没有连接 Git，合并 PR 不会自动部署，必须手动部署（见下）。
- 当前状态：所有者已决定先暂停扩充（「这个wiki网站先告一段落」），只做维护。

## 构建
```
npm ci
SITE_URL=https://biohack-wiki.pages.dev npm run build    # 输出 dist/
npm run preview                                          # 本地预览
```

## 部署
```
export CLOUDFLARE_API_TOKEN=...      # 自己的令牌，不要写进仓库
export CLOUDFLARE_ACCOUNT_ID=...
npx wrangler pages deploy dist --project-name biohack-wiki --branch main \
  --commit-hash "$(git rev-parse HEAD)" --commit-message "$(git log -1 --pretty=%s)"
```

## 密钥与环境变量（只列名字）
| 名字 | 存放位置 | 用途 |
| --- | --- | --- |
| `CLOUDFLARE_API_TOKEN` | 部署者本机环境变量 | wrangler 部署。所有者可在 Cloudflare 仪表盘 → My Profile → API Tokens 自建，权限选 Account → Cloudflare Pages → Edit |
| `CLOUDFLARE_ACCOUNT_ID` | 部署者本机环境变量 | 指定账户 |
| `SITE_URL` | 构建时环境变量（非密钥） | 站点绝对地址 |
| `ALLOW_INDEXING` | 构建时环境变量（非密钥） | 收录开关，见下 |

本站运行时没有任何 Cloudflare Pages secret。

## 搜索引擎收录开关
当前：不收录。构建时不设置 `ALLOW_INDEXING`（保持为空）。效果：构建生成的 `_headers` 给所有页面加 `X-Robots-Tag: noindex, nofollow`，页面带 noindex，`src/pages/robots.txt.ts` 生成 `Disallow: /`。开关逻辑在 `astro.config.mjs` 与 `src/lib/indexing.ts`。
- 以后开放收录（所有者确认完全准备好后）：`ALLOW_INDEXING=true SITE_URL=https://biohack-wiki.pages.dev npm run build`，再部署。
- 部署后核对：
```
curl -s https://biohack-wiki.pages.dev/robots.txt
curl -sI https://biohack-wiki.pages.dev/ | grep -i x-robots-tag
```

## 每日自动化
本站目前没有每日自动更新（已暂停扩充）。每日多肽动态改为写进肽百科（https://peptides-wiki.pages.dev ），价格数据写进 VeriSeas。

## 回滚
- 只回滚线上（最快）：Cloudflare 仪表盘 → Workers & Pages → biohack-wiki → Deployments → 选上一个正常的部署 → ⋯ → Rollback to this deployment。
- 回滚代码：开 PR 做 `git revert <提交>`，合并后重新构建并部署。不要强推 main。
- 本站没有数据库；内容全部在仓库里。
