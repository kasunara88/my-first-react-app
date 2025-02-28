"use client";

import { useState, useEffect } from "react";
import {
  Loader2,
  AlertCircle,
  Clapperboard,
  Calendar,
  Film,
  Star,
  Image,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
  const [rated, setRated] = useState(movie?.rated);
  const [imdbRating, setIMBbRating] = useState(movie.imdb?.rating ?? 0);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    if (movie) {
      const initialGenres =
        movie.genres?.map((g) => (typeof g === "object" ? g.value : g)) || [];
      setGenres(initialGenres);
    }
  }, [movie]);

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
      <DialogContent className="max-w-2xl rounded-xl shadow-xl">
        <DialogHeader className="border-b pb-4">
          <div className="flex items-center gap-3">
            <Clapperboard className="h-6 w-6 text-primary" />
            <div>
              <DialogTitle className="text-2xl font-bold">
                Edit Movie
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-1">
                Update details for {movie?.title}
              </p>
            </div>
          </div>
        </DialogHeader>

        <form onSubmit={handleSubmitForm} className="space-y-6 px-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title Field */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Film className="h-4 w-4 text-muted-foreground" />
                Movie Title
              </Label>
              <Input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="pl-10 focus:ring-primary"
                placeholder="The Dark Knight"
              />
            </div>

            {/* Year Field */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                Release Year
              </Label>
              <Input
                type="number"
                value={year}
                onChange={(e) => setYear(Number(e.target.value))}
                className="pl-10 [appearance:textfield]"
                placeholder="2024"
              />
            </div>
          </div>

          {/* Plot Summary */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <AlertCircle className="h-4 w-4 text-muted-foreground" />
              Plot Summary
            </Label>
            <Textarea
              value={plot}
              onChange={(e) => setPlot(e.target.value)}
              className="min-h-[120px] focus:ring-primary"
              placeholder="A compelling summary of the movie's storyline..."
            />
            <div className="flex justify-between items-center text-sm text-muted-foreground">
              <span>{plot?.length || 0}/500 characters</span>
              <span>Minimum 50 characters</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Genres */}
            <div className="space-y-2">
              <Label>Genres</Label>
              <MultiSelect
                list={genresList}
                selectedItems={genres}
                onValueChange={setGenres}
                placeholder="Select genres..."
                className="border-2 border-muted focus:border-primary"
              />
              {/* <p className="text-sm text-muted-foreground">
                {5 - genres.length} selections remaining
              </p> */}
            </div>

            {/* Content Rating */}
            <div className="space-y-2">
              <Label>Content Rating</Label>
              <Select value={rated} onValueChange={setRated}>
                <SelectTrigger className="h-12 px-4 text-md focus:ring-primary">
                  <SelectValue placeholder="Select Rating" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {RATINGS.map((rating) => (
                    <SelectItem
                      key={rating}
                      value={rating}
                      className="text-md py-3"
                    >
                      {rating}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* IMDb Rating */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Star className="h-4 w-4 text-muted-foreground" />
              IMDb Rating
            </Label>
            <div className="relative">
              <Input
                value={imdbRating}
                onChange={(e) => setIMBbRating(Number(e.target.value))}
                type="number"
                step="0.1"
                className="pl-10 focus:ring-primary"
                placeholder="8.5"
              />
              <Star className="absolute left-3 top-3 h-4 w-4 text-yellow-500" />
            </div>
          </div>

          {/* Poster URL */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Image className="h-4 w-4 text-muted-foreground" />
                Poster URL
              </Label>
              <Input
                value={poster}
                onChange={(e) => setPoster(e.target.value)}
                type="url"
                className="focus:ring-primary"
                placeholder="https://example.com/poster.jpg"
              />
            </div>
            {poster && (
              <div className="border rounded-lg p-2 bg-muted/10">
                <img
                  src={poster}
                  alt="Poster preview"
                  className="h-40 w-28 object-cover rounded-md mx-auto"
                  onError={(e) => {
                    e.target.src = "/placeholder-poster.svg";
                  }}
                />
              </div>
            )}
          </div>

          {/* Form Actions */}
          <div className="flex justify-end gap-4 pt-6 border-t">
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="px-6 py-3 text-md"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 py-3 text-md bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
