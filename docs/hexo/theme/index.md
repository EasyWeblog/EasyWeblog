# Hexo x Butterfly主题配置与魔改
## 简言

Butterfly是一款公认最好的Hexo卡片风格主题，可玩性强，使用人数多。可以说，Butterfly就像蝴蝶一样遍布了互联网。本文会通过范例 - 效果 - 配置的方式帮助您配置与魔改您的Butterfly。
![Butterfly官方图](/hexo/theme/img/butterfly.png "Butterfly官方宣传图")

## 大佬们的博客
HEO:<https://blog.zhheo.com>

Akilar:<https://akilar.top>

当然冰老师的博客也非常的棒。

HEO的博客魔改程度过于大，结构更改过于繁杂，非常难改，目前我们只能提供稳定的老版本Nav，老版本的home-top与不稳定的top-img提取主色调+特效。

新版的带有TodayCard的home-top正在魔改中,新版的nav因css适配过于繁杂已被编写组取消。

（人话：能力不行，TodayCard已经实现了但有BUG，Nav Bug多到不行，看着这么多css有点晕，所以不改了。）
## 安装Butterfly

#### 稳定版【建议】

<br/>
在你的 Hexo 根目录里

```powershell
git clone -b master https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```

测试版可能存在 bug，追求稳定的请安装稳定版

如果想要安装比较新的 dev 分支，可以

```powershell
git clone -b dev https://github.com/jerryc127/hexo-theme-butterfly.git themes/butterfly
```
::: tip
升级方法：在主题目录下，运行 'git pull'
:::

### Git安装（Gitee）
<br/>

#### 稳定版【建议】
<br/>
在你的 Hexo 根目录里

```powershell
git clone -b master https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

测试版可能存在 bug，追求稳定的请安装稳定版

如果想要安装比较新的 dev 分支，可以

```powershell
git clone -b dev https://gitee.com/immyw/hexo-theme-butterfly.git themes/butterfly
```

::: tip
升级方法：在主题目录下，运行 'git pull'
:::


## 安装必要插件
如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：
```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```
## 应用主题
打开hexo根目录下的`config.js`,把主题改为`butterfly`:
```yaml
theme: butterfly
```
## 开始写作
### 创建新文章
在Hexo根目录下的`soruce/_posts`创建一个Markdown文件。
### FrontMatter
<https://butterfly.js.org/posts/dc584b87/#Front-matter>FrontMatter在官网中有很明确的解释。
### Markdown
Markdown的功能被我们称为"排版"，您可以在Markdown官网查看编写方式（很简单的啦~别这么严肃。）
## 更新建议

为了减少升级主题后带来的不便，请使用以下方法（建议，可以不做）。

在 hexo 的根目录创建一个文件 `_config.butterfly.yml`，并把主题目录的 `_config.yml` 内容复制到 `_config.butterfly.yml` 去。**( 注意: 复制的是主题的 _config.yml ,而不是 hexo 的 _config.yml)**
::: tip 注意
不要把主题目录的 `_config.yml` 删掉。

以后只需要在 _config.butterfly.yml进行配置就行。
Hexo会自动合并主题中的`_config.yml`和 `_config.butterfly.yml`里的配置，如果存在同名配置，会使用`_config.butterfly.yml`的配置，其优先度较高。
:::

## 创建页面
在Hexo根目录打开命令行，输入：
```powershell
hexo new page [页面名称(随便取，最好英文)]
```
### 自带功能页面
模板往往会开发一些自带功能的页面，我们称为”自带功能页面“，它往往无需多余配置，您可以在创建的页面内使用它。
Butterfly主题自带的页面有tags，categories，link。
您只需在Hexo根目录完成"创建页面"内的操作，打开 `source/[您输入的页面名称]/index.md` 在FrontMatter内添加`type: "自带页面名称"`即可。

### 友情链接设置
在Hexo博客目录中的`source/_data`（如果没有 `_data` 文件夹，请自行创建），创建一个文件`link.yml`
```yaml
- class_name: 友情链接
  class_desc: 那些人，那些事
  link_list:
    - name: Hexo
      link: https://hexo.io/zh-tw/
      avatar: https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg
      descr: 快速、简单且强大的网志框架

- class_name: 网站
  class_desc: 值得推荐的网站
  link_list:
    - name: Youtube
      link: https://www.youtube.com/
      avatar: https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png
      descr: 视频网站
    - name: Weibo
      link: https://www.weibo.com/
      avatar: https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png
      descr: 中国最大社交分享平台
    - name: Twitter
      link: https://twitter.com/
      avatar: https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png
      descr: 社交分享平台
```
class_name 和 class_desc 支持 html 格式书写，如不需要，也可以留空。

## 自定义页面
通常情况下您仅需按照您参考的教程进行配置即可。若您想开发页面，您可使用markdown与HTML。
