'use strict';

module.exports = function(ctx) {
    /**
     * Module Dependencies
     */
    const http = require('http');
    const https = require('https');
    const config  = require('./config');

    const db     = ctx.db,
          server = ctx.server;

    const fortunePromise = db.collection('fortuneCollection').find().toArray();
    const dictionaryPromise = db.collection('englishDutchDict').find().toArray();

    server.get('/random-fortune', (req, res, next) => {
        fortunePromise.then((fortunes) => {
            let index = Math.floor(Math.random() * fortunes.length - 1);
            res.send(200, fortunes[index]);

        })
        .catch((err) => {
            res.send(200, "Something horrible has happened !!!");
        });
        next()
    });


    server.get('/random-translations', (req, res, next) => {
        const amount = req.query.amount? req.query.amount: 1;
        var translationArray = [];

        dictionaryPromise.then((translations) => {
            for (let k = 0; k < amount; k++) {
                let index = Math.floor(Math.random() * translations.length - 1);
                translationArray.push(translations[index]);
            }
            res.send(200, translationArray);
        })
        .catch((err) => {
            res.send(200, "Something horrible has happened !!!");
        });

        next()
    });


    server.get('/all-fortunes', (req, res, next) => {
        fortunePromise.then((fortunes) => {
            res.send(200, fortunes);
        })
        .catch((err) => {
            res.send(200, "Something horrible has happened !!!");
            next()
        });
    });

    server.get('/space-station-location', (req, res, next) => {
        http.get(config.spaceStationUrl, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.send(JSON.parse(data));
            })
        }).on('error', (err) => {
            res.send(200, "Space station error. It has crashed.");
        });
    });


    server.get('/paypal-price', (req, res, next) => {
        https.get(config.stockPaypalPriceUrl, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.send(JSON.parse(data));
            })
        }).on('error', (err) => {
            res.send(200, "No paypal price received");
        });
    });


    server.get('/ebay-price', (req, res, next) => {
        https.get(config.stockEbayPriceUrl, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });

            resp.on('end', () => {
                res.send(JSON.parse(data));
            })
        }).on('error', (err) => {
            res.send(200, "No ebay price received");
        });
    });


    server.get('/', (req, res, next) => {
        res.send(404, "Not Found!!");
        next()
    })
};
