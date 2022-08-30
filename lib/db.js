import { MongoClient } from "mongodb";

const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ugnonbb.mongodb.net/dev-blog?retryWrites=true&w=majority`;

export async function connectToDatabase() {
  const client = await MongoClient.connect(URL);

  return client;
}
