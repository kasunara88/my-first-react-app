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
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight leading-tight">
            Movie Management
          </h1>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Manage your movie catalog and streaming availability
          </p>
        </div>
        {/* Actions */}
        <div className="flex gap-3">
          <Link href="/movies">
            <Button
              variant="ghost"
              className="gap-2 hover:bg-accent/50 transition-colors"
            >
              <Eye className="h-4 w-4" />
              Preview as User
            </Button>
          </Link>
          <Link href="/dashboard/add-movie">
            <Button className="gap-2 transition-colors">
              <Plus className="h-4 w-4" />
              Add New Movie
            </Button>
          </Link>
        </div>
      </div>

      {/* Movie Catalog Card */}
      <Card className="shadow-lg border border-border/10 bg-gradient-to-br from-background via-background to-background/60">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-semibold">
                Movie Catalog
              </CardTitle>
              <CardDescription className="mt-1 text-sm md:text-base">
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
          {/* Suspense Fallback */}
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
            {/* Movies Table / List */}
            <div className="border-t border-border px-4 py-4">
              <MovieData />
            </div>
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}
