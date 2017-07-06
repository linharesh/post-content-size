var express = require('express');
var app = express();

app.post('/reads', function (req, res) {
    console.log(req.headers['content-length'] + ' bytes');
    res.send('{"table": {"objectType": "ReadAck","response": "success"},"modifiable": true}');
});

app.listen(80, function () {});