"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";

import { Note } from "@/types";
import { useNotes } from "@/contexts/NotesContext";

interface NoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  note?: Note | null;
}

export function NoteModal({
  isOpen,
  onClose,
  note,
}: NoteModalProps) {
  const { createNote, updateNote } = useNotes();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState<{
    title?: string;
    content?: string;
  }>({});

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    } else {
      setTitle("");
      setContent("");
    }

    setErrors({});
  }, [note, isOpen]);

  const validate = () => {
    const newErrors: {
      title?: string;
      content?: string;
    } = {};

    if (!title.trim()) {
      newErrors.title = "Title is required";
    } else if (title.length > 100) {
      newErrors.title = "Title must be less than 100 characters";
    }

    if (!content.trim()) {
      newErrors.content = "Content is required";
    } else if (content.length > 10000) {
      newErrors.content = "Content must be less than 10,000 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    if (note) {
      updateNote(
        note.id,
        title.trim(),
        content.trim()
      );
    } else {
      createNote(
        title.trim(),
        content.trim()
      );
    }

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">

      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-foreground/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {note ? "Edit Note" : "New Note"}
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              {note
                ? "Update the details of your note."
                : "Capture a thought or idea."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-5"
        >

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Title
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter note title..."
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />

            {errors.title && (
              <p className="mt-2 text-sm text-red-600">
                {errors.title}
              </p>
            )}
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-foreground"
            >
              Content
            </label>

            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Write your note here..."
              rows={7}
              className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
            />

            {errors.content && (
              <p className="mt-2 text-sm text-red-600">
                {errors.content}
              </p>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-border px-5 py-3 font-medium text-foreground transition hover:bg-muted"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              {note ? "Save Changes" : "Create Note"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}