import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";


export async function GET(request) {


const uri = "mongodb+srv://stock-management-system:0eKUJOPamUDRmYfA@cluster0.echthx4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

  try {
    const database = client.db('test');
    const userCollection = database.collection('user')


    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
  

    const users = await userCollection.find().toArray()

   
    
    
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
    return NextResponse.json({users})
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

