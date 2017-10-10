'use strict';

module.exports = function(ctx) {
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


    server.get('/', (req, res, next) => {
        res.send(404, "Not Found!!");
        next()
    })
};