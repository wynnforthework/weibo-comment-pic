# 微博评论图片下载

> 刷微博时，看到一条微博的评论特别精彩，但是2、3万条评论，慢慢翻下去不太现实，第一反应是python爬虫抓去评论，但是看了一些做法，weibo open api每个ip能抓的数量有限，而且请求回来的数据是随机的，很多重复，而另一个做法是利用chromedriver去控制浏览器，模拟浏览器请求，把数据存储到redis里，步骤太繁琐了，最后尝试着用油猴脚本。

```
https://m.weibo.cn/status/4251992165887811
```

![img](https://github.com/wynnforthework/weibo-comment-pic/blob/master/test.gif)
