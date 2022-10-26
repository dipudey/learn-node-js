const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

const dbName = 'learn_nodejs'

async function connect() {
    await client.connect();
    const db = await client.db(dbName)
    return db;
}

module.exports = connect;