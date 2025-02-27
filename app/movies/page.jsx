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
  // add shaadcn card
  const moviesQuery = await getMovies();

  return (
    <div className="container space-y-4 my-7">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold">FlexZone Movies</h1>
        <Link href="/dashboard/movies">
          <Button variant="outline">
            <LayoutDashboard />
            Dashboard
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg::grid-col-3 xl:grid-cols-4 gap-4">
        {moviesQuery?.length &&
          moviesQuery.map((movie) => (
            <div key={movie._id} className="h-[510px]">
              {movie?.id}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>
                    {movie?.title}{" "}
                    <span className="text-xs text-neutral-400 font-normal">
                      {movie?.year ?? "N/A"}
                    </span>
                  </CardTitle>
                  <CardDescription className="sr-only">
                    {movie?.title}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-center bg-black w-full h-[270px] mb-4 rounded">
                    {movie?.poster && (
                      <Image
                        src={movie?.poster}
                        alt={movie?.title}
                        width={200}
                        height={400}
                        className="h-full w-auto object-contain"
                        priority={false}
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between h-[145px]">
                    {/*Movie Plot */}
                    <p className="line-clamp-3">{movie?.plot}</p>
                    {/*Movie Genres*/}
                    <div className="text-sm text-blue-900 font-semibold">
                      {movie?.genres?.length && movie?.genres?.join("/")}
                    </div>

                    <div className="flex flex-row justify-between items-center">
                      <Badge variant="success" className="font-medium">
                        Rated:{movie?.rated ?? "N/A"}
                      </Badge>
                      <div
                        className="flex flex-row gap-1 items-center"
                        title="IMdb rating"
                      >
                        <FaStar className="text-yellow-500" />

                        <span className="text-sm font-semibold">
                          {movie?.imdb?.rating ?? 0}/10{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between"></CardFooter>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
