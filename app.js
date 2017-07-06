var express = require('express');
var bodyParser = require('body-parser')
var fs = require('fs');

var app = express();

//app.use(bodyParser.urlencoded({ extended: false }))
//app.use(bodyParser.urlencoded({limit: '200mb', extended: true}));
//app.use(bodyParser.json())

app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

app.post('/reads', function (req, res) {
    console.log(req.headers['content-length'] + ' bytes');
    fs.writeFile('output.json', JSON.stringify(req.body, null, 2), function (err) {
        if (err) 
            return console.log(err);
        console.log("The output file was saved!");
    });
    res.send('{"table": {"objectType": "ReadAck","response": "success"},"modifiable": true}');
});

app.listen(80, function () {});
