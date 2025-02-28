"use server";
import { db } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
//Movies related server actions
export const createMovie = async (movie) => {
  try {
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

//Update movie server action
export const updateMovie = async (id, movie) => {
  try {
    //Create Movie Query
    const result = await db
      .collection("movies_n")
      .updateOne(
        { _id: ObjectId.createFromHexString(id) },
        { $set: movie },
        { upsert: true }
      );

    console.log(`A Movie was updated with the _id: ${result.upsertedId}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongo update failed", error);
    return { success: false, error };
  }
};

//Delete movie server action
export const deleteMovie = async (id) => {
  try {
    //Create Movie Query
    const result = await db
      .collection("movies_n")
      .deleteOne({ _id: ObjectId.createFromHexString(id) });

    console.log(`A Movie was deleted: ${result.deletedCount}`);

    if (result.acknowledged) {
      return { success: true };
    } else {
      return { success: false };
    }
  } catch (error) {
    console.log("Mongo delete failed", error);
    return { success: false, error };
  }
};
