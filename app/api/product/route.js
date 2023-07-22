import { MongoClient, ServerApiVersion } from "mongodb";
import { NextResponse } from "next/server";


const uri = "mongodb+srv://stock-management-system:0eKUJOPamUDRmYfA@cluster0.echthx4.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



export async function GET(request) {
  try {
    const database = client.db('stock');
    const inventory = database.collection('inventory')
    // await client.connect();
    const allproducts = await inventory.find().toArray()
    return NextResponse.json({allproducts})
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


export async function POST(request) {
  try {
    const body = await request.json();

    console.log("body", body)
    const database = client.db('stock');
    const inventory = database.collection('inventory')
    // await client.connect();
    const product = await inventory.insertOne(body)
    return NextResponse.json({product, "ok": true})
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}