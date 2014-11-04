api-baidu-translate
===================

nodejs 调用百度翻译api `更新于2014.11.04`

使用 nodejs 来对指定内容进行翻译，主要用到的知识点有两个：

* 使用百度翻译接口 ：http://developer.baidu.com/wiki/index.php?title=%E5%B8%AE%E5%8A%A9%E6%96%87%E6%A1%A3%E9%A6%96%E9%A1%B5/%E7%99%BE%E5%BA%A6%E7%BF%BB%E8%AF%91API
* 使用 node 中的 http.request 接口

运行 node example.js 

结果为：

* {"from":"en","to":"zh","trans_result":[{"src":"Hello world","dst":"\u4f60\u597d\u4e16\u754c"}]}
* {"from":"zh","to":"en","trans_result":[{"src":"\u4f60\u597d \u4e16\u754c","dst":"Hello world"}]}

注意：

```使用的话，请自行修改 translate.js 下的 CLIENT_ID 内容```

