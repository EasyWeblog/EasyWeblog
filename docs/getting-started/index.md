# 安装Node.js
## 简言

Node.JS是搭建静态博客必须配置的环境，如果配置不当将会带来未知的错误，建议仔细阅读。

## Windows安装Node.js

打开[Node.js官网](https://nodejs.org/zh-cn/)下载博客框架所支持的版本即可(一般情况下选择长期维护版)，按照引导点击Next即可。

## Linux安装Node.js
### 安装 nvm 
nvm可以使您方便的管理您的Node.JS
``bash
bash -c "$(curl -fsSL https://gitee.com/RubyKids/nvm-cn/raw/master/install.sh)"
``
重启终端即可生效
安装 Node.js 最新版本:
``` bash
nvm install --[nodejs版本号]
```
如：
```bash
nvm install 19.0.1
```
#### nvm的其他作用
若您安装了两个或多个版本的Node.JS时，您可以使用以下命令指定使用的NodeJS版本，如：
``` bash
nvm use [NodeJS版本号]
```
您还可使用nvm删除NodeJS，如：
```bash
nvm uninstall [NodeJS版本号]
```

## 测试安装是否成功

打开cmd输入`node -v`输出结果为安装版本即可。
若没有安装成功（概率很小）请设置环境变量（电脑基础知识）或重新安装。

