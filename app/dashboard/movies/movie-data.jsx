import { getMovies } from "@/lib/apis/server";
export default async function MovieData() {
  const moviesQuery = await getMovies();
  console.log("MOVIES", moviesQuery);
  return <div>movie-data</div>;
}
