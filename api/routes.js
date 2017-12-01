'use strict';

module.exports = function(ctx) {
    /**
     * Module Dependencies
     */
    const http = require('http');
    const config  = require('./config');

    const db     = ctx.db,
          server = ctx.server;

    const fortunePromise = db.collection('fortuneCollection').find().toArray();

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


    server.get('/', (req, res, next) => {
        res.send(404, "Not Found!!");
        next()
    })
};