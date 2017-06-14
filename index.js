var express = require('express');
var app = express();
var fs = require('fs');




app.post('/reads', function (req, res) {

var stream = fs.createWriteStream("my_file.txt");
        stream.once('open', function(fd) {
        stream.write("My first row\n");
        stream.write("My second row\n");
        //stream.write(req);
        stream.end();
    });
    console.log("opa");
    res.send("hello people!");

});


app.listen(80, function () {});