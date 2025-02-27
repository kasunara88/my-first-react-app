import exp from "constants";
import { MongoClient } from "mongodb";

const OPTION = {};
const MONGODB_URI = process.env.MONGODB_URI;
const client = new MongoClient(MONGODB_URI, OPTION);

//Database Instance
export const db = client.db("sample_mflix");
export const clientPromise = () => {
  if (!MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable : "MONGODB_URI"');
  }

  const client = new MongoClient(MONGODB_URI, OPTION);
  return client.connect();
};

// Compare this snippet from app/libs/mongodb.js:
