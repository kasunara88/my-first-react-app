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
  // const [imdbRating, setIMBbRating] = useState(0);
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
    const plot = formData.get("plot")?.toString();
    const poster = formData.get("poster")?.toString();
    const imdb = Number(formData.get("imdb"));

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
        imdb: { rating: imdb },
      });
      setLoading(false);
      if (resp.success) {
        toast({
          variant: "success",
          title: "Movie added Successfully!",
          description: "Movie was added to FlexZone Dashboard",
        });
      }
    }
  };

  return (
    <Card className="max-w-2xl mx-auto drop-shadow-lg">
      <CardHeader className="border-b">
        <CardTitle className="text-2xl">Add Movies</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Fill in the details below to add a new movie to the FlexZone database
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmitForm}>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="font-medium">
                Movie Title <span className="text-red-600">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter the movie title"
                required
                className="focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="year" className="font-medium">
                Movie Year <span className="text-red-600">*</span>
              </Label>
              <Input
                id="year"
                name="year"
                type="number"
                required
                placeholder="Enter the year"
                className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none]"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plot" className="font-medium">
              Plot Summary <span className="text-red-500">*</span>
            </Label>
            <Textarea
              id="plot"
              name="plot"
              placeholder="A compelling summary of the movie's storyline..."
              required
              className="min-h-[100px] focus-visible:ring-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="genres" className="font-medium">
                Genres <span className="text-red-500">*</span>
              </Label>
              <MultiSelect
                list={genresList}
                placeholder="Select Movie Genres"
                selectedItems={genres}
                onValueChange={setGenres}
                className="focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Select up to 5 genres
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="rated" className="font-medium">
                Rating
              </Label>
              <Select onValueChange={(val) => setRated(val)}>
                <SelectTrigger className="focus-visible:ring-primary">
                  <SelectValue placeholder="Select Rating" />
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
          </div>
          <div>
            <Label htmlFor="imdb">IMDb Rating</Label>
            <Input
              id="imdb"
              name="imdb"
              max="10.0"
              step="0.1"
              type="number"
              placeholder="Enter imdb rating"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="poster" className="font-medium">
              Poster URL <span className="text-red-500">*</span>
            </Label>
            <Input
              id="poster"
              name="poster"
              type="url"
              placeholder="Enter the poster URL"
              required
              className="focus-visible:ring-primary"
            />
            <p className="text-xs text-muted-foreground mt-1">
              Must be a valid HTTPS URL
            </p>
          </div>
        </CardContent>
        <CardFooter className="border-t py-6">
          <div className="w-full flex justify-end gap-4">
            <Button
              type="reset"
              variant="outline"
              className="min-w-[120px]"
              disabled={loading}
            >
              Reset
            </Button>
            <Button
              type="submit"
              className="min-w-[120px] bg-slate-600 hover:bg-primary/90"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Adding...
                </>
              ) : (
                "Add Movie"
              )}
            </Button>
          </div>
        </CardFooter>
      </form>
    </Card>
  );
}

//className="w-full flex justify-end space-x-2"
