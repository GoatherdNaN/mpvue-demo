/**
 * node服务
 * 
 */
var express = require('express');
var getSignature = require('./getSignature.js');
var app = express();

app.get('/signature', (req,res) => {
    const min_behot_time = req.query.min_behot_time;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //允许请求资源的方式
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    res.header('Access-Control-Allow-Credentials', 'true');
    res.send(getSignature(min_behot_time));
});

app.listen('3000', function(err) {
    if (err) {
        return;
    }
    console.log('Listening at localhost:3000');
});
