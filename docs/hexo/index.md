# Hexo环境配置
## Hexo介绍
Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 Markdown（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。
在正确安装Node.js的情况下我们的安装十分简单快速，正如官网所说：
>### 安装 Hexo 相当简单，只需要先安装下列应用程序即可：
>
>Node.js (Node.js 版本需不低于 10.13，建议使用 Node.js 12.0 及以上版本)
>
>Git
>
>如果您的电脑中已经安装上述必备程序，那么恭喜您！你可以直接前往 安装 Hexo 步骤。

## Hexo的安装与配置
在Windows中打开git，在linux中打开终端，cd到您想安装博客的位置，输入：
```bash
npm install hexo-cli -g
```
等待片刻后输入
```bash
hexo init && hexo server
```
按照终端中的指引打开本地网页便可。

### 可能会出现的问题
若Linux终端输出 -bash: hexo: command not found ,您可以尝试着输入:
```bash
npx hexo s
```

