---
title: vue前端版本更新后消息通知的实现
shortTitle: 发版后消息通知的实现
icon: vue
order: 2
# 设置写作时间
date: 2023-06-01
category:
- vue
# 一个页面可以有多个标签
tag:
- upgrade
- vue
- vite
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
isOriginal: true
---

### 问题及需求

前端版本迭代后，用户如果不刷新页面，无法及时获取到最新的版本，这时候就需要一个消息通知的功能，告知用户当前版本已经过期，需要刷新页面。

想要实现这个功能，需要解决以下几个问题：

1. 如何判断当前版本是否过期？
2. 如何在用户不刷新页面的情况下，实时获取到最新的版本后，通知用户刷新页面？

### 解决方案

- 如何判断当前版本是否过期？

项目采用vue3+vite进行开发，可以通过vite打包时，生成`version.json`文件，文件包含了当前版本号，可以通过发起请求获取到该文件，然后与当前本地缓存的版本号进行比较，如果不一致，则说明当前版本已经过期。

为此，笔者翻阅了[vite-plugin](https://vitejs.cn/guide/api-plugin.html#authoring-a-plugin)的开发文档，通过插件开放的几个钩子函数，可以实现在打包时，生成`version.json`文件，同时也可以将版本号插入到`index.html`中，方便前端获取。

为了让插件更加通用，笔者将插件开发成了一个npm包，[vite-plugin-version-output](https://www.npmjs.com/package/vite-plugin-version-output)，可以通过npm安装使用。

::: tabs
@tab pnpm
```bash
pnpm install -D vite-plugin-version-output
```
@tab yarn
```bash
yarn add -D vite-plugin-version-output
```
@tab npm
```bash
npm install -D vite-plugin-version-output
```
:::

在使用时，只需要在`vite.config.ts`中引入插件即可：

```typescript
// vite.config.ts
import { defineConfig } from 'vite'
import { vitePluginVersionOutput } from 'vite-plugin-version-output'

export default defineConfig({
  plugins: [
    vitePluginVersionOutput({
      // name: 'test-app',
      // version: '0.0.1',
      json: {
        enable: true,
        fileName: 'version.json'
      },
      html: {
        enable: true,
        toMeta: true,
        toConsole: true,
        toGlobal: true
      },
    })
  ],
})
```

具体的配置说明可以移步到[github](https://github.com/mic1on/vite-plugin-version-output)。

- 如何在用户不刷新页面的情况下，实时获取到最新的版本后，通知用户刷新页面？

有了获取最新版本号的能力，接下来只需要在项目里，在某个条件下(路由切换/定时轮询)的时候，发起请求获取最新版本号，然后与本地缓存的版本号进行比较，如果不一致，则说明当前版本已经过期，需要通知用户刷新页面。

```javascript
import axios from 'axios'
import { useSessionStorage } from '@vueuse/core'

const useVersion = defineStore(
  'version',
  {
    state: () => ({
      version: useSessionStorage('version', null),
      needUpgrade: false
    }),
    actions: {
      async check() {
        const resp = await axios.get('version.json').catch(err => {
          console.error('checkVersion error: ', err)
          this.needUpgrade = false
        })
        // 当本地不存在 version 时，将 version 设置为当前版本
        if (this.version === null) {
          this.version = resp.data.version
          this.needUpgrade = false
        } else {
          // 比对本地版本与远程版本
          this.needUpgrade = this.version !== resp.data.version ? true : false
        }
      },
      async clear() {
        this.version = null
        this.needUpgrade = false
      },
      async upgrade() {
        window.location.reload()
      }
    }
  }
)

export default useVersion
```

代码还是非常简单的，通过`useSessionStorage`来缓存版本号，然后通过`check`方法，发起请求获取最新版本号，与本地缓存的版本号进行比较，如果不一致，`needUpgrade`设置为`true`，否则设置为`false`。

那接下来只需要在业务层写个弹窗，提示用户当前版本已经过期，需要刷新页面即可。

### 最终实现效果

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/15-25-13.gif)


### 参考

- [Vite实现版本更新检查](https://juejin.cn/post/7168673001020325919)
