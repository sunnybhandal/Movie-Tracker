import { MongoClient } from "mongodb";
import { parse } from "mongodb-uri";

export default async function connectToDatabase() {
  const uri = process.env.DB_URI;
  const uriObject = parse(uri);

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = client.db(uriObject.database);
  return db;
}
