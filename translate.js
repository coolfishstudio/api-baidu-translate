var http = require('http'),
    querystring = require("querystring");

//翻译api
exports.translate = function(from, to, q, callback){
    var params = {
        client_id: CLIENT_ID,//开发者在百度开发者中心注册得到的授权API key
        from: from || 'auto',//源语言语种：语言代码或auto
        to: to || 'auto',//目标语言语种：语言代码或auto
        q: q || ''//待翻译内容
    };
    var data = querystring.stringify(params);//处理一下
    var options = {
        host: 'openapi.baidu.com',
        port: 80,
        path: '/public/2.0/bmt/translate?' + data,//发送接口数据，GET请求
        method: 'GET'
    };
    var req = http.request(options, function(res){
        res.setEncoding('utf8');//编码格式注意为utf-8
        res.body = '';
        res.on('data', function(data) {
            res.body += data;
        });
        res.on('end', function() {
            info = JSON.parse(res.body);
            var err = null;
            if(info.error_code == '52001'){
                err = {status: '52001', content: '超时'};
            }
            if(info.error_code == '52002'){
                err = {status: '52002', content: '翻译系统错误'};
            }
            if(info.error_code == '52003'){
                err = {status: '52003', content: '未授权的用户'};
            }
            callback(err, res.body);
        });
        res.on('error', function(err) {
            callback(err, {});
        });
    });
    req.write(data);
    req.end();
};

