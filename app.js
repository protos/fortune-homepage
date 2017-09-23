var express = require('express');
var fs = require('fs');

var app = express();
var fortunesArray = [];


var readFile = (filePath) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
        //console.log ('data: ' + data);
        fortunesArray = data.split('###');
    })    
}

var getRandomInteger = (min, max) => {
//    var min = Math.ceil(0);
//    var max = Math.floor(fortunesArray.length);
    return Math.floor(Math.random() * (max - min) + min);
};


app.get('/', function (req, res) {
    res.send(fortunesArray[getRandomInteger(0, fortunesArray.length)]);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
    readFile('fortune.dat');
});