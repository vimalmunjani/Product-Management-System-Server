const mongoose = require('mongoose');
const config = require('../config/config');
const logger = require('../utils/logger');

let log = (message) => {
    logger(__filename, message);
}

const options = {
    useNewUrlParser: true,
    // reconnectTries: Number.MAX_VALUE,
    // poolSize: 10
  };

const connection = mongoose.connect(config.db_uri, options);

connection.then((db) => {
    console.log('connected to db')
    log('connected to DB');
    return db
}).catch(() => {
    log('Error connecting to DB',e);
    process.exit(1);
});

module.exports = connection;
                