const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://je0mestre:anderson2007007@cluster0.rv26p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const client = new MongoClient(url);
const dbName = 'db_cerveja';
const db = client.db(dbName);
const collection = db.collection('cervejas');

const init = async () => {
      await client.connect();
}
init()
  .then(console.log(""))
  .catch(client.close());
  //.finally(() => client.close());

module.exports = collection;