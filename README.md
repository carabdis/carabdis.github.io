# Daijing Shi · Personal website

静态学术个人主页，含中英文切换、研究方向、三项研究工作、论文/代码链接与邮箱。
不需要安装依赖、运行构建或配置后台。双击 `index.html` 即可本地预览。

## 上传至 GitHub Pages

1. 在 GitHub 的 **carabdis** 账号下新建公开仓库 **carabdis.github.io**。
2. 将本文件夹**内部的全部文件**上传到仓库根目录。根目录应直接看到 `index.html`、`assets/` 和 `README.md`，不要再套一层 `carabdis.github.io/` 文件夹。
3. 提交到 `main` 分支。
4. 打开仓库 **Settings → Pages → Build and deployment**。
5. Source 选择 **Deploy from a branch**；Branch 选择 **main**，文件夹选择 **/ (root)**，点击 **Save**。
6. 等待 GitHub Pages 部署完成；Settings → Pages 会显示实际网站地址。目标地址为 **https://carabdis.github.io/**。

官方说明：https://docs.github.com/en/pages/quickstart

如果网页上传界面没有显示隐藏文件 `.nojekyll`，其余静态文件仍可发布；也可用 Git 上传，或在仓库中手动创建一个名为 `.nojekyll` 的空文件。

## 文件结构

- `index.html`：主页内容、论文信息和中文翻译。
- `assets/style.css`：颜色、字体、排版与移动端适配。
- `assets/site.js`：语言切换与年份。
- `assets/favicon.svg`：网站图标。
- `.nojekyll`：声明按静态文件发布。
- `README.md`：本说明。

## 内容修改

英文内容直接修改 HTML；对应元素的 `data-zh` 属性保存中文翻译。
论文题目与作者名保留英文。语言偏好只保存在访客自己的浏览器里。
所有站内资源都使用相对路径，可在本地打开，也可用于项目型 GitHub Pages。

邮箱：daijingshi@pku.edu.cn  
GitHub：https://github.com/carabdis

## 论文信息的处理

研究方向基于三篇论文：MCHA、全模拟忆阻存内计算去噪、NB-LDPC 存内计算纠错。
主页侧重架构、数据流、通信与流水设计，不将研究归结为某一种存储介质。
MCHA 标注为研究稿件和开源项目，没有推定其会议录用或正式发表状态。
两篇已发表论文使用 DOI 链接。未附带本地论文 PDF、专利文件或毕业论文大纲。
VAE 验证表述为部分网络硬件映射与软硬件协同，未宣称整网已在单芯片执行。
没有加入未提供的照片、履历、奖励或导师信息。

## 隐私与依赖

没有分析跟踪、第三方字体、外部脚本或访客数据收集。
站内静态资源均包含在此文件夹中；论文与代码链接需要互联网访问。

