var express = require('express');
var app = express();
var fs = require('fs');

var contentSize = 0;

app.post('/reads', function (req, res) {
    contentSize = contentSize + Number(req.headers['content-length']);
    console.log(' $ #  $ #  $ #  $ #  $ #  $ # ');
    console.log(contentSize+ ' bytes');
    res.send("hello people!");
});

app.listen(80, function () {});