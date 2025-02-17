import { getMovies } from '../libs/apis/server';
export default async function DashboardPage() {
  // add shaadcn card
  const { movies } = await getMovies();

  return (
    <main>
      {/* Navbar */}
      <nav className="bg-blue-300 w-full h-16 flex justify-start items-center">
        <div className="container">
          <h1 className="text-black font-bold text-xl">FlixZone Dashboard</h1>
        </div>
      </nav>

      {/*body sextion */}
      <div className="container mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg::grid-col-3 xl:grid-cols-4 gap-4">
          {movies?.length &&
            movies.map((movie) => (
              <div key={movie.id} className="h-96 bg-green-400">
                {movie?.title}
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
