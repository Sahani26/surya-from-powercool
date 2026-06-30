// lib/mongodb.ts
import { MongoClient, Db } from "mongodb";

const uri: string = process.env.MONGODB_URI as string;
const dbName: string = (process.env.MONGODB_DB as string) || "mydb";

if (!uri) {
  throw new Error("Please add MONGODB_URI to your environment variables");
}

// Explicit types for TypeScript
let cachedClient: MongoClient | null = null;
let cachedDb: Db | null = null;

export async function connectToDatabase(): Promise<{ client: MongoClient; db: Db }> {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db(dbName);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}
