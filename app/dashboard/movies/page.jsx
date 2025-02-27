import { Suspense } from "react";
import Link from "next/link";
import { Eye, Loader2, LayoutGrid, Plus } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MovieData from "./movie-data";

export default function MoviePage() {
  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Movie Management
          </h1>
          <p className="text-muted-foreground mt-2">
            Manage your movie catalog and streaming availability
          </p>
        </div>
        <div className="flex gap-3">
          <Link href="/movies">
            <Button variant="ghost" className="gap-2 hover:bg-accent/50">
              <Eye className="h-4 w-4" />
              Preview as User
            </Button>
          </Link>
          <Link href="/dashboard/add-movie">
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Add New Movie
            </Button>
          </Link>
        </div>
      </div>

      <Card className="shadow-lg border-0 bg-gradient-to-br from-background/95 via-background to-background/60">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl">Movie Catalog</CardTitle>
              <CardDescription className="mt-1">
                Currently showing all available movies in your library
              </CardDescription>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <LayoutGrid className="h-4 w-4" />
              <span>Grid View</span>
            </div>
          </div>
        </CardHeader>

        <CardContent className="px-0">
          <Suspense
            fallback={
              <div className="flex flex-col items-center justify-center h-64 gap-3">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <p className="text-muted-foreground text-sm">
                  Loading movie database...
                </p>
              </div>
            }
          >
            <div className="border-t pt-4">
              <MovieData />
            </div>
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
