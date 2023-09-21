const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://van20persies:ganstasunit@cluster0.nl5ppte.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
});

client.connect();

module.exports = client;