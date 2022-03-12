require('dotenv').config();

const {MongoClient,
  ServerApiVersion
} = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@bloktechanneke.hqr4o.mongodb.net/bloktechAnneke?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1
});

const connectDb = async () => {
  try {
    await client.connect();
    return client;
    console.log('DB connected');
  } catch (error) {
    console.log('ging iets mis');
    throw error;
  }
}

module.exports = {
  connectDb
};

