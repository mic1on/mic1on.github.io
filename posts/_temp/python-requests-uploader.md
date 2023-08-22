---
title: requests大文件上传
icon: python
order: 1
date: 2023-08-22
category:
- python
tag:
- requests
- upload
sticky: true
star: true
isOriginal: true
---

阅读本文，你将获得：

- requests大文件上传的方法
- 带进度条的文件上传方法


为了更为方便的测试，我们现在本地docker搭建[httpbin](https://httpbin.org/)服务，`httpbin`是一个测试http请求的服务，可以用来测试各种http请求，包括文件上传。

```bash
docker run -p 8888:80 -d kennethreitz/httpbin
```

通过`httpbin`的`/post`接口测试文件上传，`httpbin`会将上传的文件返回，方便我们测试。

## requests大文件上传

以往我们使用`requests`上传文件，都是通过`files`参数来上传文件，但是`files`参数有个缺点，就是文件会被读取到内存中，如果文件过大，会导致内存溢出。

```python{4}
import requests

url = 'http://localhost:8888/post'
files = {'file': open('test.txt', 'rb')}  # 读取文件到内存中
r = requests.post(url, files=files)
print(r.text)
```

为此我们需要像requests中`stream`下载文件一样，使用"`stream`"上传文件，这样文件就不会被读取到内存中。

通过阅读`requests`源码，我发现当`files`参数有值时，会进入`_encode_files`方法。在这个方法里，会将文件一次性读取到内存中，再通过`encode_multipart_formdata`方法写入body参数。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230822084053.png)
