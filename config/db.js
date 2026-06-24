const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config()
const mongoose = require('mongoose');

let ConnectionString = "mongodb+srv://user:tahseen123@cluster0.vz0ta36.mongodb.net/carstore?retryWrites=true&w=majority&appName=Cluster0"
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

module.exports = async function () {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(ConnectionString, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log("==== Backend successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);

    // Ensures that the client will close when you finish/error
    await mongoose.disconnect();
  }
}