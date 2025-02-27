"use client";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function DeleteMovieDialog({
  open,
  movie,
  onConfirm,
  onCancel,
  loading,
}) {
  return (
    <Dialog open={open} onOpenChange={onCancel}>
      {/* Limit the dialog width for a more focused layout */}
      <DialogContent className="max-w-sm sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <DialogTitle className="whitespace-nowrap">
              Delete Movie
            </DialogTitle>
          </div>
          <DialogDescription className="mt-2">
            Are you sure you want to delete the movie{" "}
            <strong>{movie?.title}</strong>? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onCancel} disabled={loading}>
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={onConfirm}
            disabled={loading}
            className="flex items-center gap-2"
          >
            {/* Show spinner when loading */}
            {loading && <Loader2 className="h-4 w-4 animate-spin" />}
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
