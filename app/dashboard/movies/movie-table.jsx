"use client";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { useState } from "react";
import EditMovieForm from "./edit-movie-form";
import { updateMovie, deleteMovie } from "@/lib/actions/movie";
import DeleteMovieDialog from "./delete-movie-dialog";
import {
  Star,
  Calendar,
  Film,
  Ticket,
  Clapperboard,
  Trash2,
  Edit,
} from "lucide-react";
import Image from "next/image";

export default function MovieTable({ movies }) {
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setDeleting] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [deletingMovie, setDeletingMovie] = useState(null);
  const router = useRouter();
  const handleEdit = (movie) => {
    console.log("Edit", movie);
    setEditingMovie(movie);
  };

  const handleEditSubmit = async (movie) => {
    const { id, title, year, plot, rated, genres, poster, imdb } = movie;
    setIsSaving(true);
    const resp = await updateMovie(id, {
      title,
      year,
      plot,
      rated,
      genres,
      poster,
      imdb,
    });
    setIsSaving(false);
    if (resp?.success) {
      setEditingMovie(null);
      router.refresh();
    }
  };

  const handleDelete = (movie) => {
    setDeletingMovie(movie);
  };

  const handleDeleteConfirm = async (movieId) => {
    setDeleting(true);
    const resp = await deleteMovie(movieId);
    setDeleting(false);

    if (resp?.success) {
      setDeletingMovie(null);
      router.refresh();
    }
  };
  return (
    <div className="w-full overflow-x-auto">
      <Table className="min-w-full table-auto border border-gray-200">
        {/* Table Header */}
        <TableHeader className="bg-gray-100">
          <TableRow>
            <TableHead className="  px-4 py-2 font-semibold text-left">
              Cover
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-left">
              Movie Title
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-left">
              Year
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-left">
              Rating
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-left">
              IMDb
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-left">
              Genres
            </TableHead>
            <TableHead className="px-4 py-2 font-semibold text-center">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {movies.map((movie) => (
            <TableRow
              key={movie.id}
              className="odd:bg-white even:bg-gray-50 hover:bg-gray-100"
            >
              <TableCell className="px-4 py-2">
                <div className="h-[70px] w-[50px] overflow-hidden bg-gray-200 rounded-md flex items-center justify-center">
                  {movie.poster ? (
                    <img
                      src={movie.poster}
                      alt={`${movie.title} poster`}
                      className="h-full w-auto object-cover"
                    />
                  ) : (
                    <span className="text-xs text-gray-500">No Image</span>
                  )}
                </div>
              </TableCell>
              <TableCell className="px-4 py-2">
                {movie?.title ?? "N/A"}
              </TableCell>
              <TableCell className="px-4 py-2">
                {movie?.year ?? "N/A"}
              </TableCell>
              <TableCell className="px-4 py-2">
                {movie?.rate ?? "N/A"}
              </TableCell>
              <TableCell className="px-4 py-2">
                <div className="flex items-center justify-end gap-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                  <span>{movie?.imdb?.rating?.toFixed(1) ?? "N/A"}</span>
                </div>
              </TableCell>
              <TableCell className="px-4 py-2">
                {movie?.genres.join(", ") ?? "N/A"}
              </TableCell>
              <TableCell className="px-4 py-2 text-center">
                <div className="flex justify-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 gap-1"
                    onClick={() => handleEdit(movie)}
                  >
                    <Edit className="h-3.5 w-3.5" />
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="destructive"
                    size="sm"
                    className="h-8 gap-1"
                    onClick={() => handleDelete(movie)}
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit and Delete Modals */}
      {editingMovie && (
        <EditMovieForm
          movie={editingMovie}
          open={true}
          onSubmit={handleEditSubmit}
          onCancel={() => setEditingMovie(null)}
          loading={isSaving}
        />
      )}
      {deletingMovie && (
        <DeleteMovieDialog
          movie={deletingMovie}
          open={true}
          onCancel={() => setDeletingMovie(null)}
          onConfirm={() => handleDeleteConfirm(deletingMovie?.id)}
          loading={isDeleting}
        />
      )}
    </div>
  );
}
