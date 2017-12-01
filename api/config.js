'use strict';

module.exports = {
    name: 'fortune-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    db: {
        uri: 'mongodb://localhost:27017/fortunes',
    },
    spaceStationUrl: 'http://api.open-notify.org/iss-now.json'
};