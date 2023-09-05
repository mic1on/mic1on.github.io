---
title: 微信小程序抓包及自动化
icon: spider
order: 1
date: 2023-09-04
category:
- 爬虫
tag:
- 小程序抓包
- 抓包
- 自动化
sticky: true
star: true
isOriginal: true
---


## 背景

最近在做有关发票管理的微信小程序，主要功能是记录平时消费记录及对应的发票，方便收集管理并在月末的时候统一报销。其中小程序中有一个打印消费记录及发票的功能，目前的实现方式是将上传的图片和PDF在后端合并生成新的PDF在小程序预览打开。然后在右上角选择内网打印机进行打印。

## 问题

本来这一切感觉都还可以，当然两个月的使用下来也发现一些问题：

- 由于是内网打印机，所以需要在内网环境下才能打印，这就导致了如果在外面的话就无法打印了。
- 在不同系统的手机中打印的交互逻辑又不同。
- 惠普小程序提供远程打印，但是需要每次把生成的PDF发给`文件传输助手`，然后在惠普小程序里选择文件。

为此我也尝试了做一下`远程打印`。第一版的远程打印比较鸡肋，采用的是把文件打包通过发邮件的方式发给绑定的打印机专属邮箱`xxxx@eprint.com`，邮箱发送后，稍等会自动打印。

这种方式也存在弊端，首先文件数量受限制，其次从发送邮件到成功打印有时候要等数分钟甚至不会打印，难以排查问题，这个方案在没有上线之前就被否决了。

于是我尝试寻找新的解决方案，最好是在当前我开发的小程序上直接点击打印就可以在任何地方打印。没有复杂的交互，点击即开始打印。

## 解决方案

还得是从官方的惠普小程序入手，在该小程序中，通过选择文件或者网盘的文件即可打印，这个方案看起来比较靠谱，所以我需要抓到惠普小程序的打印请求，然后在我的小程序中模拟这个请求。

### 抓包

这个不太难，在Iphone上安装`Stream`抓包工具，然后在小程序中打开惠普小程序，选择文件，然后在抓包工具中就可以看到惠普小程序的请求了。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230904111220.png =300x)

核心就两个请求：`上传文件`、`调用打印`。

有关上传文件可以看下之前的博文[微信小程序上传文件](/posts/language/python/python-requests-uploader.html)。

调用打印也没有逆向的过程，唯一有难点的是`Authorization`，这个是通过`wx.login`获取的，我没有办法直接模拟，所以只能通过抓包的方式获取到。根据`login`接口的返回可以发现，token的有效期非常短，只有7200秒，也就是两个小时，所以我需要在两个小时内完成打印。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230904133328.png)

对于我而言其实问题不大，因为之前也说过处理最后打印的时间是比较集中在月末进行的，两个小时内打印完应该是没问题的。所以我只需要在每次需要打印的时候，抓一下包，把`Authorization`保存下来，然后在两个小时内就可以一直使用了。

## 自动化

虽然我已经实现了打印机的远程调用，在小程序端只需要点击`云打印`即可调用家里打印机进行打印，但正如上述所说，我必须两小时内做完，要是中途喝杯咖啡可能就又要抓包，复制token，设置token了。既然没办法完全自动化，那就相对自动化吧。

我想到的方案是在惠普小程序请求登录的时候自动将登陆的token配置到我的小程序中。也就是token失效只需要打开一下惠普小程序，然后在我的小程序中就又可以云打印了。

### 自动化实现

使用`proxyman`可以很方便hook请求，在`login`请求后得到`token`后，往我的小程序后端中发送一个请求，将`token`保存下来。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230904142644.png)

```js
async function onResponse(context, url, request, response) {
  
  // 从response中获取token
  var token = response.body.token.access_token
      
  var url = "http://127.0.0.1:8000/api/consumption/set_eprint_token/";
  var param = {
    body: {
      "token": token
    },
    headers: {
      "Content-Type": "application/json"
    }
  }
  // 发给我的小程序后端
  var output = await $http.post(url, param);
  return response;
}
```

更多的脚本可以参考[proxyman官方文档](https://docs.proxyman.io/scripting/script)。

这时候我只需在我的小程序后端新增这个接口，将token保存下来即可。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230904155151.png)

## 总结

本文提供了一个解决微信小程序远程打印问题的详细方案，包括抓包和相对自动化实现，使得我能够在任何地方便捷地进行打印操作。如果有更好的方案欢迎留言讨论。
