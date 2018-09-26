'use strict';

module.exports = {
    name: 'starter-api',
    version: '0.0.1',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3001,
    db: {
        fortuneUri: 'mongodb://localhost:27017/fortunes',
        // dictionaryUri: 'mongodb://localhost:27017/dictionary'
    },
    spaceStationUrl: 'http://api.open-notify.org/iss-now.json',
    stockEbayPriceUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=EBAY&apikey=0SHSCD7B8E86NMFH',
    stockPaypalPriceUrl: 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=PYPL&apikey=0SHSCD7B8E86NMFH'
};
