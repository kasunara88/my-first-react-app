import { getMovies } from "@/lib/apis/server";
import { Eye } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default async function MoviePage() {
  const moviesQuery = await getMovies();
  console.log("MOVIES", moviesQuery);

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <Link href="/movies">
          <Button variant="outline">
            <Eye />
            View as User
          </Button>
        </Link>
      </div>
    </div>
  );
}
