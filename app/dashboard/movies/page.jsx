import Link from "next/link";
import { Eye } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import MovieData from "./movie-data";

export default function MoviePage() {
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
      <Card>
        <CardHeader>
          <CardTitle>Movies Management</CardTitle>
          <CardDescription>View and Manage your movies here.</CardDescription>
        </CardHeader>
        <CardContent>
          <MovieData />
        </CardContent>
      </Card>
    </div>
  );
}
