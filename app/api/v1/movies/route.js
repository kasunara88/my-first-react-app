import { NextResponse } from "next/server";
import clientPromise from "@/app/libs/mongodb";

export const GET = async (req) => {
  //Get movies from database
  try {
    const client = await clientPromise();

    const db = client.db("sample_mflix");

    //Fetch Movies From the database
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 
    );
  }
};

// const Movies = [
//   {
//     id: 1,
//     title: "Harry Porter",
//     rating: 4.5,
//     genre: "Fantasy",
//     year: 2001,
//     director: "David Yates",
//     cast: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
//     plot: "A young wizard finds his place in the world.",
//   },
//   {
//     id: 2,
//     title: "The Lord of the Rings",
//     rating: 4.8,
//     genre: "Fantasy",
//     year: 2001,
//     director: "Peter Jackson",
//     cast: ["Elijah Wood", "Ian McKellen", "Viggo Mortensen"],
//     plot: "A young hobbit finds his place in the world.",
//   },
//   {
//     id: 3,
//     title: "The Matrix",
//     rating: 4.7,
//     genre: "Sci-Fi",
//     year: 1999,
//     director: "Lana Wachowski",
//     cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
//     plot: "A young hacker finds his place in the world.",
//   },
//   {
//     id: 4,
//     title: "The Shawshank Redemption",
//     rating: 4.9,
//     genre: "Drama",
//     year: 1994,
//     director: "Frank Darabont",
//     cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
//     plot: "A young banker finds his place in the world.",
//   },
//   {
//     id: 5,
//     title: "The Godfather",
//     rating: 4.9,
//     genre: "Crime",
//     year: 1972,
//     director: "Francis Ford Coppola",
//     cast: ["Marlon Brando", "Al Pacino", "James Caan"],
//     plot: "A young mobster finds his place in the world.",
//   },
//   {
//     id: 6,
//     title: "The Dark Knight",
//     rating: 4.8,
//     genre: "Action",
//     year: 2008,
//     director: "Christopher Nolan",
//     cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
//     plot: "A young vigilante finds his place in the world.",
//   },
//   {
//     id: 7,
//     title: "The Lion King",
//     rating: 4.6,
//     genre: "Animation",
//     year: 1994,
//     director: "Roger Allers",
//     cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
//     plot: "A young lion finds his place in the world.",
//   },
//   {
//     id: 8,
//     title: "The Avengers",
//     rating: 4.7,
//     genre: "Action",
//     year: 2012,
//     director: "Joss Whedon",
//     cast: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson"],
//     plot: "A young superhero finds his place in the world.",
//   },
// ];
