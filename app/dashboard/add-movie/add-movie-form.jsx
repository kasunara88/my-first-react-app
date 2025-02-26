"use client";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";
import { createMovie } from "@/lib/actions/movie";
import { useToast } from "@/hooks/use-toast";

export default function AddMovieForm() {
  const [genres, setGenres] = useState([]);
  const [rated, setRated] = useState("");
  const [loading, setLoading] = useState("");
  const { toast } = useToast();
  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString();
    const year = Number(formData.get("year"));
    //const year = formData.get("year").toString();
    const plot = formData.get("plot")?.toString();
    const poster = formData.get("poster")?.toString();
    // const genres = formData.getAll("genres");
    // const rated = formData.get("rated").toString();
    // console.log("Form Data", formData);
    // console.log("Title", title);
    // console.log("Year", year);
    // console.log("Plot", plot);
    // console.log("Genres", genres);
    // console.log("Rated", rated);

    if (title && year && plot && rated && poster) {
      // console.log({ title, year, plot, rated, genres });
      setLoading(true);
      const resp = await createMovie({
        title,
        year,
        plot,
        rated,
        genres,
        poster,
      });
      setLoading(false);
      if (resp.success) {
        toast({
          variant: "success",
          title: "Movie added!",
          description: "Movie was added to FlexZone Dashboard",
        });
      }
    }
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Add Movies</CardTitle>
        <CardDescription>Add a movie to the FlexZone database</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmitForm}>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Movie Title</Label>
            <Input
              id="title"
              name="title"
              placeholder="Enter the movie title"
            />
          </div>
          <div>
            <Label htmlFor="year">Movie Year</Label>
            <Input id="year" name="year" placeholder="Enter the year" />
          </div>
          <div>
            <Label htmlFor="plot">Movie Plot</Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="Enter the movie plot"
            />
          </div>
          <div>
            <Label htmlFor="genres">Movie Genres</Label>
            <MultiSelect
              list={genresList}
              placeholder="Select Movie Genres"
              onValueChange={setGenres}
            />
          </div>
          <div>
            <Label htmlFor="rated">Movie Rated</Label>
            <Select onValueChange={(val) => setRated(val)}>
              <SelectTrigger>
                <SelectValue placeholder="Select Movie Rated" />
              </SelectTrigger>
              <SelectContent>
                {RATINGS.map((rating) => (
                  <SelectItem key={rating} value={rating}>
                    {rating}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="poster">Poster URL</Label>
            <Input
              id="poster"
              name="poster"
              type="text"
              defaultValue="https://m.media-amazon.com/images/M/MV5BNTdkOTFlZj…mZkMDg0ZjFhY2Y4XkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg"
              placeholder="Enter the poster URL"
            />
          </div>
        </CardContent>
        <CardFooter className="w-full flex justify-end space-x-2">
          <Button type="reset" variant="outline">
            Clear Form
          </Button>
          <Button type="submit" disabled={loading}>
            {loading && <Loader2 className="animate-spin" />} Add Movie
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
