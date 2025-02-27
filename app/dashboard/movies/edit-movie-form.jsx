"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { MultiSelect } from "@/components/multi-select";
import { GENRES, RATINGS } from "@/lib/constants";

export default function EditMovieForm({
  movie,
  open,
  onSubmit,
  onCancel,
  loading,
}) {
  const [title, setTitle] = useState(movie?.title);
  const [year, setYear] = useState(movie?.year);
  const [plot, setPlot] = useState(movie?.plot);
  const [poster, setPoster] = useState(movie?.poster);
  const [genres, setGenres] = useState(movie?.genres);
  const [rated, setRated] = useState(movie?.rated);
  const [imdbRating, setIMBbRating] = useState(movie.imdb?.rating ?? 0);

  const genresList = GENRES.map((genre) => ({
    label: genre,
    value: genre,
  }));

  const handleSubmitForm = (e) => {
    e.preventDefault();
    //Save the updated movie to database
    onSubmit({
      ...movie,
      title,
      year,
      plot,
      genres,
      poster,
      rated,
      imdb: { rating: imdbRating },
    });
  };
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Movie</DialogTitle>
          <DialogDescription>Update the Selected Movie</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmitForm}>
          <div className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="font-medium">
                  Movie Title
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter the movie title"
                  className="focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="year" className="font-medium">
                  Movie Year
                </Label>
                <Input
                  id="year"
                  name="year"
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  type="number"
                  placeholder="Enter the year"
                  className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none]"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="plot" className="font-medium">
                Plot Summary
              </Label>
              <Textarea
                id="plot"
                name="plot"
                value={plot}
                onChange={(e) => setPlot(e.target.value)}
                placeholder="A compelling summary of the movie's storyline..."
                className="min-h-[100px] focus-visible:ring-primary"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="genres" className="font-medium">
                  Genres
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
                <Select value={rated} onValueChange={(val) => setRated(val)}>
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
                value={imdbRating} // Controlled input
                onChange={(e) => setIMBbRating(Number(e.target.value))} // Controlled input
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="poster" className="font-medium">
                Poster URL
              </Label>
              <Input
                id="poster"
                name="poster"
                type="name"
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                placeholder="Enter the poster URL"
                className="focus-visible:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">
                Must be a valid HTTPS URL
              </p>
            </div>

            <div className="border-t py-6">
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
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
