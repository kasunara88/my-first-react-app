"use server";
import clientPromise from "@/lib/mongodb";
//Movies related server actions
export const createMovie = async (movie) => {
  try {
    const client = await clientPromise(); // Mongodb Client
    const db = client.db("sample_mflix"); // Database Instance

    //Create Movie Query
    const result = await db.collection("movies_n").insertOne(movie);

    console.log(`A Movie was inserted with the _id: ${result.insertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongo insert failed", error);
    return { success: false, error };
  }
};
