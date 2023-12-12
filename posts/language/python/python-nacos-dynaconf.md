---
title: Nacos与Dynaconf神仙组合，打造纯动态配置
short_title: Nacos与Dynaconf动态配置
# 这是页面的图标
icon: python
# 这是侧边栏的顺序
order: 1
# 设置写作时间
date: 2023-12-12
# 一个页面可以有多个分类
category:
- python
tag:
- settings
- nacos
- dynaconf
sticky: true
star: true
isOriginal: true
---


## 概述

[Nacos](https://nacos.io/zh-cn/index.html) 是一个动态服务发现、配置管理和服务管理平台，支持多种服务类型和特性，帮助您快速构建、交付和管理云原生应用。 
[Dynaconf](https://www.dynaconf.com/) 是一个用 Python 实现的轻量级配置管理库，它支持多种格式的配置文件，并且可以动态修改配置。

这个两位一组合，可以实现纯动态配置，无需重启服务，就可以修改配置。

## nacos sdk

在阅读了官方仓库的[nacos-sdk-python](https://github.com/nacos-group/nacos-sdk-python)源码之后总感觉差强人意，不支持异步，issues和PR也很多没人处理。看了实现也不算难，花了几天时间自己实现了一个[use-nacos](https://github.com/use-py/use-nacos/)

```python
from use_nacos import NacosClient

client = NacosClient(...)

# publish config
client.config.publish("test_config", "DEFAULT_GROUP", "test_value")
# get config
assert client.config.get("test_config", "DEFAULT_GROUP") == "test_value"


# subscribe config

def config_update(config):
    print(config)


client.config.subscribe(
    "test_config",
    "DEFAULT_GROUP",
    callback=config_update
)
```

在配置这块，内置了基于内存和本地文件的缓存，可以应对配置中心服务宕机的情况。

## 刷新配置

`config_update` 回调函数，可以实现云端配置更改后立刻拿到最新配置。

但是如何在不重启服务的情况下更新程序的配置呢？

在之前写[多环境配置文件管理](/posts/language/python/python-settings2.html)的时候。我提到了使用`dynaconf`，而笔者一直以来项目中配置管理也都是在用它。(笔者还是贡献者之一😁)它支持动态修改配置，并且支持多种格式的配置文件。

有了它我不仅可以环境变量修改配置，也可以通过nacos动态修改配置后刷新程序配置。

下面演示下在`FastAPI`中使用`dynaconf`和`use-nacos`实现动态配置刷新。

### 安装

```bash
pip install dynaconf use-nacos
```

### 使用
```python
from contextlib import asynccontextmanager

from fastapi import FastAPI
from config import settings
from use_nacos import NacosAsyncClient


@asynccontextmanager
async def lifespan(app: FastAPI):
    nacos = NacosAsyncClient(...)

    config_subscriber = await nacos.config.subscribe(
        data_id="test-config",
        group="DEFAULT_GROUP",
        callback=lambda conf: settings.update(conf),
        serialized=True
    )
    yield
    config_subscriber.cancel()


app = FastAPI(lifespan=lifespan)


@app.get("/")
def home():
    return {"message": settings.kwargs}


if __name__ == '__main__':
    import uvicorn
    uvicorn.run("app:app", port=8000)
```

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20231212172835.png)

当我在nacos中修改配置后，FastAPI会立刻拿到最新的配置。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20231212172929.png)

