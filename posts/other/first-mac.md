---
title: MAC 个人配置(连载)
icon: mac
order: 1
date: 2023-07-31
category:
- mac
tag:
- mac
- dev
isOriginal: true
---

## 开发环境

### 配置SSH

> 检查是否存在ssh key

```bash
ls -al ~/.ssh
```

> 创建SSH Key(存在即跳过此步骤)

```bash
ssh-keygen -t rsa -C "jcnd@163.com"
```

> 将SSH Key添加到ssh-agent

```bash
eval $(ssh-agent -s)
ssh-add ~/.ssh/id_rsa
```

> 复制key

```bash
pbcopy < ~/.ssh/id_rsa.pub
```

> 将ssh key添加至github

> 验证连接
```bash
ssh -T git@github.com
```

## 开发软件

### homebrew
官网：https://brew.sh/

- 安装
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

- 常用命令
```bash
# 安装软件
brew install curl

# 卸载软件
brew uninstall curl

# 更新自己
brew update

# 更新软件
brew upgrade
```


### iTerm2 + oh-my-zsh
比较好的教程，这里不做赘述：https://zhuanlan.zhihu.com/p/290737828

### 安装node相关

- 安装多环境node管理工具`n`

```bash
brew install n
```

```bash
# 列出远端node版本
n ls-remote

# 安装指定版本的node
n i 20.5.0
```

- pnpm

```bash
npm i pnpm -g
```
