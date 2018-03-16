const express = require('express');
const fs = require('fs');

const app = express();
let fortunesArray = [];


let readFile = (filePath) => {
    fs.readFile(filePath, 'utf8', function(err, data) {
        fortunesArray = data.split('###');
    })    
};


let getRandomInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
};


app.get('/', function (req, res) {
    res.send(fortunesArray[getRandomInteger(0, fortunesArray.length)]);
});


app.listen(3000, function () {
    console.log('Fortune app listening on port 3000!');
});