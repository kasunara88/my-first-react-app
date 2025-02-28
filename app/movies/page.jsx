import { getMovies } from "@/lib/apis/server";
import { Badge } from "@/components/ui/badge";
import { FaStar } from "react-icons/fa";
import { LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default async function MoviesPublicPage() {
  const moviesQuery = await getMovies();

  return (
    <div className="container max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">FlexZone Movies</h1>
          <p className="text-sm text-muted-foreground mt-1">
            HD Movies at the smallest file size
          </p>
        </div>
        <Link href="/dashboard/movies">
          <Button variant="outline" className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Button>
        </Link>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {moviesQuery?.length > 0 &&
          moviesQuery.map((movie) => (
            <Card
              key={movie._id}
              className="h-full flex flex-col shadow-md rounded-md overflow-hidden"
            >
              {/* Card Header */}
              <CardHeader className="pb-2">
                <CardTitle className="text-base font-semibold leading-tight">
                  {movie?.title}{" "}
                  <span className="ml-2 text-xs text-neutral-400 font-normal">
                    {movie?.year ?? "N/A"}
                  </span>
                </CardTitle>
                <CardDescription className="sr-only">
                  {movie?.title}
                </CardDescription>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex-1 flex flex-col justify-between">
                {/* Poster */}
                <div className="flex justify-center items-center w-full h-56 mb-4 bg-muted rounded-md overflow-hidden">
                  {movie?.poster ? (
                    <Image
                      src={movie.poster}
                      alt={movie.title}
                      width={200}
                      height={300}
                      className="h-full w-auto object-contain"
                      priority={false}
                    />
                  ) : (
                    <div className="text-sm text-center text-muted-foreground">
                      No Image
                    </div>
                  )}
                </div>

                {/* Plot & Genres */}
                <div className="flex flex-col space-y-2">
                  <p className="text-sm line-clamp-3">{movie?.plot}</p>
                  {movie?.genres?.length > 0 && (
                    <div className="text-sm text-blue-900 font-medium">
                      {movie.genres.join(" / ")}
                    </div>
                  )}
                </div>

                {/* Ratings */}
                <div className="mt-3 flex items-center justify-between">
                  <Badge variant="success" className="font-medium">
                    Rated: {movie?.rated ?? "N/A"}
                  </Badge>
                  <div className="flex items-center gap-1" title="IMdb rating">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-semibold">
                      {movie?.imdb?.rating ?? 0}/10
                    </span>
                  </div>
                </div>
              </CardContent>

              {/* Card Footer */}
              <CardFooter className="justify-end pt-2">
                {/* Example: You could add a 'More Info' or 'Watch Now' button here */}
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  );
}

// import { getMovies } from "@/lib/apis/server";
// import { Badge } from "@/components/ui/badge";
// import { FaStar } from "react-icons/fa";
// import { LayoutDashboard } from "lucide-react";
// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Image from "next/image";

// export const dynamic = "force-dynamic";

// export default async function MoviesPublicPage() {
//   // add shaadcn card
//   const moviesQuery = await getMovies();

//   return (
//     <div className="container space-y-4 my-7">
//       <div className="flex flex-row justify-between items-center">
//         <h1 className="text-3xl font-bold">FlexZone Movies</h1>
//         <Link href="/dashboard/movies">
//           <Button variant="outline">
//             <LayoutDashboard />
//             Dashboard
//           </Button>
//         </Link>
//       </div>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg::grid-col-3 xl:grid-cols-4 gap-4">
//         {moviesQuery?.length &&
//           moviesQuery.map((movie) => (
//             <div key={movie._id} className="h-[510px]">
//               {movie?.id}
//               <Card className="h-full">
//                 <CardHeader>
//                   <CardTitle>
//                     {movie?.title}{" "}
//                     <span className="text-xs text-neutral-400 font-normal">
//                       {movie?.year ?? "N/A"}
//                     </span>
//                   </CardTitle>
//                   <CardDescription className="sr-only">
//                     {movie?.title}
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <div className="flex justify-center bg-black w-full h-[270px] mb-4 rounded">
//                     {movie?.poster && (
//                       <Image
//                         src={movie?.poster}
//                         alt={movie?.title}
//                         width={200}
//                         height={400}
//                         className="h-full w-auto object-contain"
//                         priority={false}
//                       />
//                     )}
//                   </div>
//                   <div className="flex flex-col justify-between h-[145px]">
//                     {/*Movie Plot */}
//                     <p className="line-clamp-3">{movie?.plot}</p>
//                     {/*Movie Genres*/}
//                     <div className="text-sm text-blue-900 font-semibold">
//                       {movie?.genres?.length && movie?.genres?.join("/")}
//                     </div>

//                     <div className="flex flex-row justify-between items-center">
//                       <Badge variant="success" className="font-medium">
//                         Rated:{movie?.rated ?? "N/A"}
//                       </Badge>
//                       <div
//                         className="flex flex-row gap-1 items-center"
//                         title="IMdb rating"
//                       >
//                         <FaStar className="text-yellow-500" />

//                         <span className="text-sm font-semibold">
//                           {movie?.imdb?.rating ?? 0}/10{" "}
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//                 <CardFooter className="flex justify-between"></CardFooter>
//               </Card>
//             </div>
//           ))}
//       </div>
//     </div>
//   );
// }
