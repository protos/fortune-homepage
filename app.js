var express = require('express');
var fs = require('fs');

var app = express();
var fortunesArray = [];

app.get('/', function (req, res) {

    function getRandomInteger() {
        var min = Math.ceil(0);
        var max = Math.floor(fortunesArray.length);
        return Math.floor(Math.random() * (max - min) + min);
    };

    res.send(fortunesArray[getRandomInteger()]);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');

    fs.readFile('fortune.dat', 'utf8', function(err, data) {
        console.log ('data: ' + data);
        fortunesArray = data.split('###');
    })
});