
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<user>:<pw>@cluster0.hst04.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const adminDB = client.db("admin");
    const listDatabases = await adminDB.admin().listDatabases();
    // console.log("Databases:",listDatabases);

    const collection = client.db("test").collection(" persons");
    await collection.insertOne({ name: "John", age: 30 });

    const document = await collection.find({ name: "John" }).toArray();
    console.log(document);

    await collection.updateMany({ name: "John" }, { $set: { name: "Smith" } });

    const upDocument = await collection.find({ name: "Smith" }).toArray();
    console.log(upDocument);

    await collection.deleteMany({ name: "Smith" });
    
    console.log( await collection.find({ name: "Smith" }).toArray()  )  ;

  } catch (e) {
    console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.error);
run();
