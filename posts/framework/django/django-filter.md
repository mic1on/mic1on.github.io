---
# 这是文章的标题
title: django-filter源码阅读
shortTitle: django-filter源码阅读
# 这是页面的图标
icon: django
# 这是侧边栏的顺序
order: 4
# 设置写作时间
date: 2023-07-18
# 一个页面可以有多个分类
category:
- django
# 一个页面可以有多个标签
tag:
- drf
- django-filter
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在文章收藏中
star: true
isOriginal: true
---



> 阅读本文需要了解DRF的基本使用，最好实际使用过它。如果不了解，请先阅读[DRF官方文档](https://www.django-rest-framework.org/)或源码
> 
> name         : django-filter
> 
> version      : 22.1
> 
> description  : Django-filter is a reusable Django application for allowing users to filter querysets dynamically. 


## 1.介绍

在使用djang-filter时，我们需要定义过滤器声明类，这个类继承自django-filter库中的FilterSet类，然后在这个类中定义我们需要的过滤器，然后回到视图中使用这个FilterSet类，就可以实现过滤功能了。

它可以低入侵、显式声明、功能强大、易扩展地实现过滤功能。

```python
# filters.py

class TalentFilter(FilterSet):
    nick_name = django_filters.CharFilter(field_name='nick_name', lookup_expr='icontains')

    class Meta:
        models = Talent
```

```python
# views.py

class TalentViewSet(CustomModelViewSet):
    # ...
    filterset_class = TalentFilter
    filter_backends = [filters.DjangoFilterBackend]
```

仅此，就可以实现对nick_name字段的模糊查询了。

大概了解了使用及其能实现的强大功能，接下来我将抽丝剥茧阅读源码，看看它是如何实现的。

## 2. 源码阅读

### 2.1 filter_backends

这一切都要从DRF中的`filter_backends`说起，它是一个用于指定过滤器后端类的列表，它的作用是依次调用过滤器的filter_queryset方法，最终返回过滤后的queryset（后文使用QS代替）。

```python
def filter_queryset(self, queryset):
    for backend in list(self.filter_backends):
        queryset = backend().filter_queryset(self.request, queryset, self)
    return queryset
```

所以我们如果要在DRF中真正用起来`django-filter`，就必须将`django-filter`的过滤器后端类添加到`filter_backends`中。它的名字叫`DjangoFilterBackend`

> django_filters.rest_framework.backends.DjangoFilterBackend

### 2.2 DjangoFilterBackend

上文说到，DRF通过调用Backend的`filter_queryset`方法拿到最终queryset，所以该类中必须实现`filter_queryset`方法。从这个方法入手即可。

```python
def filter_queryset(self, request, queryset, view):
    """该方法作为获取查询qs的入口方法"""

    # 先拿到视图中声明的filterset_class，并将其实例化
    filterset = self.get_filterset(request, queryset, view)
    if filterset is None:
        # 如果视图里没有声明filterset_class，则直接返回原始qs
        return queryset

    if not filterset.is_valid() and self.raise_exception:
        raise utils.translate_validation(filterset.errors)
    # 验证通过后返回qs，此处的qs是调用了filter_queryset方法后的qs
    return filterset.qs
```

首先它需要拿到视图中定义的`filterset_class`，`filterset_class`是我们自行编写的，正如上文中的**TalentFilter**，实例化它后调用`is_valid`方法验证数据，最后返回`qs`。

那带来一个问题，它是如何知道我们需要按怎样的方式进行过滤，过滤哪些字段呢？

### 2.3 FilterSet

`filterset`中有两个核心类：**BaseFilterSet**、**FilterSet**

FilterSet正如其名，他是一个过滤器的集合，集成于它后，只需要在该类底下声明我们需要过滤的字段及规则即可按照我们的规则进行过滤。

所以，它的核心就是：

1. 收集声明的过滤器
2. 过滤器的过滤

#### 2.3.1 收集声明的过滤器

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230718133040.png)

metaclass会改变类的创建方式，它会在类创建时，将类中的属性进行收集，然后将收集到的属性存储在`base_filters`中。

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230718133723.png)

#### 2.3.2 过滤器的过滤

在`FilterSet`子类中声明过滤规则，其属性都必须使用`django_filter`中的Filter，如：

```python
nick_name = django_filters.CharFilter(field_name='nick_name', lookup_expr='icontains')
```

在上述FilterSet收集了`nick_name`过滤器后，就需要调用其声明的`CharFilter`类中的`filter`方法进行过滤。


最终，在FilterSet中，调用`filter_queryset`方法完成对所有声明的Filter的过滤。

- FilterSet中的filter_queryset方法，入口方法

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230718140117.png)


- CharFilter中的filter方法

![](https://miclon-job.oss-cn-hangzhou.aliyuncs.com/img/20230718140155.png)

FilterSet子类有多个Filter时，会依次调用每个Filter的filter方法，最终返回过滤后的qs。

### 2.4 总结

总结一下整个`django_filter`模块的核心组件：

1. Filter类：声明过滤器的规则
2. FilterSet类：收集声明的过滤器，调用过滤器的filter方法进行过滤
3. DjangoFilterBackend类：由DRF发起调用，随后找到视图中filterset_class声明的FilterSet类，调用filter_queryset方法，拿到过滤后的qs。

当然`django_filter`不仅仅只有以上三个组件，还有如Field类是专门用于Admin端HTML展示的，笔者对Django的template毫无兴趣，这里就不做展开了。
