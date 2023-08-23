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

- requests大文件上传原理
- 大文件上传的方法
- 带进度的文件上传方法



为了更为方便的测试，我们现在本地docker搭建[httpbin](https://httpbin.org/)服务，`httpbin`是一个测试http请求的服务，可以用来测试各种http请求，包括文件上传。

```bash
docker run -p 8888:80 -d kennethreitz/httpbin
```

通过`httpbin`的`/post`接口测试文件上传，`httpbin`会将上传的文件返回，方便我们测试。

## 理解requests大文件上传原理

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

所以，我们的思考的方向就不应该使用`files`字段处理文件上传。当然，这句话是基于大文件的前提。

除了`files`字段，那就只剩`data`字段了，继续阅读源码后，在[prepare_body](https://github.com/psf/requests/blob/147c8511ddbfa5e8f71bbf5c18ede0c4ceb3bba4/requests/models.py#L495)方法中检测了传入的`data`字段，当它不满足以下条件时

```python
is_stream = all([
    hasattr(data, '__iter__'),
    not isinstance(data, (basestring, list, tuple, Mapping))
])
```

且`files`字段为空时，会进入[_encode_params](https://github.com/psf/requests/blob/147c8511ddbfa5e8f71bbf5c18ede0c4ceb3bba4/requests/models.py#L107)方法，检测如果`data`存在`read`方法时，就直接返回`data`。

而在后续`http`模块中的`_send_output`方法会检测`data`是否存在`read`方法，如果存在就会调用`read`方法，将数据`yield`出去。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230823092126.png)

而在下游循环读取分片数据，发送sock请求。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230823092308.png)

看懂了它的原理，我们只需要*假模假式*地构造一个`data`参数，让它满足`read`方法即可。

```python
import requests


class File:
    def __init__(self, filename):
        self.filename = filename

    def read(self, size=-1):
        with open(self.filename, 'rb') as file:
            return file.read(size)

    def __len__(self):
        return 100


url = 'http://localhost:8888/post'
r = requests.post(url, data=File("train_data.json"))
print(r.text)
```

debugger模式下，我们可以看到数据正在被分片读取，发送到sock中。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230823093856.png)

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230823093938.png)

理解了原理，自己造轮子实现未免太麻烦，我们可以使用`requests-toolbelt`中的`MultipartEncoder`来实现。

## 使用requests-toolbelt实现大文件上传

而反观`requests-toolbelt`的源码，它的实现原理也是一样的。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230823094204.png)

具体的代码示例文档有很多，本文不做大幅度的展示。

```python
from requests_toolbelt import MultipartEncoder
import requests

url = 'http://127.0.0.1:8888/post'

encoder = MultipartEncoder(
    fields={'file': ("train_data.json", open("train_data.json", 'rb'), 'application/octet-stream')}
)

headers = {'Content-Type': encoder.content_type}
response = requests.post(url, data=encoder, headers=headers)
response.raise_for_status()
print(response.json())
```


## 带进度的文件上传

`MultipartEncoderMonitor`可以通过回调函数来监控文件上传进度，我们可以通过它来实现带进度的文件上传。计算进度的方法很简单，就是当前已读取的字节数除以文件总字节数。

```python
class MultipartEncoderMonitor(object):
    ...
    def read(self, size=-1):
        # 调用原始的read方法，读取分片数据
        string = self.encoder.read(size)
        # 累加已读取的字节数
        self.bytes_read += len(string)
        # 调用回调函数
        self.callback(self)
        return string
```

具体实现：

```python
from requests_toolbelt import MultipartEncoder, MultipartEncoderMonitor
import requests

url = 'http://127.0.0.1:8888/post'


def callback(m):
    progress = (m.bytes_read / m.len) * 100
    print("\r 文件上传进度：%d%%(%d/%d)" % (progress, m.bytes_read, m.len), end=" ")


encoder = MultipartEncoder(
    fields={'file': ("train_data.json", open("train_data.json", 'rb'), 'application/octet-stream')}
)
monitor = MultipartEncoderMonitor(encoder, callback)

headers = {'Content-Type': monitor.content_type}
response = requests.post(url, data=monitor, headers=headers)
response.raise_for_status()
print(response.json())

```


## 总结

本文介绍了requests大文件上传的原理，理解为何不采用`files`参数来直接上传文件，理解了`requests`是如何通过`data`参数来实现大文件分片读取上传的，以及如何使用`requests-toolbelt`实现大文件上传，以及如何实现带进度的文件上传。
