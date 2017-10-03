'use strict'

module.exports = function(ctx) {

    // extract context from passed in object
    const db     = ctx.db,
          server = ctx.server

    // assign collection to variable for further use
    const collection = db.collection('fortuneCollection')

    /**
     * Read
     */
    server.get('/fortunes', (req, res, next) => {

        let limit = parseInt(req.query.limit, 10) || 10, // default limit to 10 docs
            skip  = parseInt(req.query.skip, 10) || 0, // default skip to 0 docs
            query = req.query || {}

        // remove skip and limit from query to avoid false querying
        delete query.skip
        delete query.limit

        // find todos and convert to array (with optional query, skip and limit)
        collection.find(query).skip(skip).limit(limit).toArray()
            .then(docs => res.send(200, docs))
            .catch(err => res.send(500, err))

        next()

    })
}