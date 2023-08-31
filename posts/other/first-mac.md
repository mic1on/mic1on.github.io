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

### 配置pip国内源

```bash
cd ~
mkdir .pip
cd .pip
vim pip.conf
```

```ini
[global]
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
[install]
trusted-host=pypi.tuna.tsinghua.edu.cn
```

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

- 配置agnoster主题后如何隐藏目录

```bash
vim ~/.oh-my-zsh/themes/agnoster.zsh-theme
```
找到`prompt_dir`函数

old:
```zsh
prompt_dir() {
  prompt_segment blue $CURRENT_FG '%~'
}
```

new:
```zsh
prompt_dir() {
  prompt_segment blue $CURRENT_FG '%c'
}
```

- alias

```ssh
alias goproxy='export HTTP_PROXY=http://127.0.0.1:7890; export HTTPS_PROXY=http://127.0.0.1:7890; export ALL_PROXY=socks5://127.0.0.1:7891; git config --global http.proxy http://127.0.0.1:7890; git config --global https.proxy http://127.0.0.1:7890'

alias disproxy='unset http_proxy https_proxy; git config --global --unset http.proxy; git config --global --unset https.proxy'

alias gc='git clone'
alias pi='poetry install'
```


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

### vscode

#### 平滑移动

```bash
# For VSCode
defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool false

# For VSCode Insiders
defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool false
```

修改 `系统偏好设置` > `键盘` 更改 `按键重复` 与 `重复前延迟`


## 常用软件

### Alfred

Mac的效率神器

### SnippetsLab

### Termius
