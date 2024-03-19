import { MongoClient, ServerApiVersion } from "mongodb";
const uri =
  "mongodb+srv://yoseftutian:05484gps@shklimcluster.w6r058d.mongodb.net/?retryWrites=true&w=majority&appName=ShklimCluster";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let cluster;
try {
  cluster = await client.connect();
} catch (e) {
  console.error(e);
}

const db = cluster.db("totahim");
export const productsCollection = db.collection("products");
export const usersCollection = db.collection("users");

export default db;
