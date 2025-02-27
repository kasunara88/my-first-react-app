import { db } from "@/lib/mongodb";
import MovieTable from "./movie-table";

export const revalidate = 60;
// Movie data server component
//Server Action call directly to mongodb

export default async function MovieData() {
  try {
    const moviesQuery = await db
      .collection("movies_n")
      .find({})
      .sort({ metacritic: -1 })
      .limit(50)
      .toArray();

    if (moviesQuery) {
      //Refine movies query to a array
      const refineMovies = moviesQuery.map((movie) => ({
        id: movie._id.toString(),
        title: movie.title,
        year: movie.year,
        plot: movie.plot,
        rate: movie.rated,
        genres: movie.genres,
        poster: movie.poster,
        imdb: movie.imdb,
      }));
      //Pass Movie refine data to movies table
      // Return MovieTable
      return <MovieTable movies={refineMovies} />;
    }
  } catch (error) {
    console.log("Error", error);
    return (
      <div className="flex justify-center items-center h-[186.5px]">
        <p className="text-red-700 font-medium animate-pulse duration-1000">
          No Movie Available
        </p>
      </div>
    );
  }
}
