var baidu_api = require('./translate');

baidu_api.translate('zh', 'en', '你好 世界', function(err, result){
	console.log(err, result);
});

baidu_api.translate('en', 'zh', 'Hello world', function(err, result){
	console.log(err, result);
});

/**
* 运行 node example.js 
* 结果为：
* {"from":"en","to":"zh","trans_result":[{"src":"Hello world","dst":"\u4f60\u597d\u4e16\u754c"}]}
* {"from":"zh","to":"en","trans_result":[{"src":"\u4f60\u597d \u4e16\u754c","dst":"Hello world"}]}
*/