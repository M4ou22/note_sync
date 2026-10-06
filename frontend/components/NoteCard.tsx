"use client";

import React from "react";
import { Edit2, Trash2 } from "lucide-react";
import { Note } from "@/types";

interface NoteCardProps {
  note: Note;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
  index: number;
}

function formatRelativeTime(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();

  const differenceInSeconds = Math.round(
    (date.getTime() - now.getTime()) / 1000
  );

  const formatter = new Intl.RelativeTimeFormat("en", {
    numeric: "auto",
  });

  const units = [
    { unit: "year" as const, seconds: 31536000 },
    { unit: "month" as const, seconds: 2592000 },
    { unit: "week" as const, seconds: 604800 },
    { unit: "day" as const, seconds: 86400 },
    { unit: "hour" as const, seconds: 3600 },
    { unit: "minute" as const, seconds: 60 },
    { unit: "second" as const, seconds: 1 },
  ];

  for (const { unit, seconds } of units) {
    if (Math.abs(differenceInSeconds) >= seconds) {
      return formatter.format(
        Math.round(differenceInSeconds / seconds),
        unit
      );
    }
  }

  return "just now";
}

export function NoteCard({
  note,
  onEdit,
  onDelete,
  index,
}: NoteCardProps) {
  const formattedDate = formatRelativeTime(note.updatedAt);

  return (
    <div
      className="note-card group animate-slide-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Title and Actions */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="flex-1 line-clamp-1 font-display text-lg font-semibold text-foreground">
          {note.title}
        </h3>

        <div className="flex items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100">
          {/* Edit */}
          <button
            onClick={() => onEdit(note)}
            className="rounded-lg p-2 transition-colors hover:bg-muted"
            title="Edit note"
            aria-label="Edit note"
          >
            <Edit2 className="h-4 w-4 text-muted-foreground" />
          </button>

          {/* Delete */}
          <button
            onClick={() => onDelete(note)}
            className="rounded-lg p-2 transition-colors hover:bg-destructive/10"
            title="Delete note"
            aria-label="Delete note"
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </button>
        </div>
      </div>

      {/* Note Content */}
      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {note.content}
      </p>

      {/* Updated Time */}
      <p className="text-xs text-muted-foreground/70">
        Updated {formattedDate}
      </p>
    </div>
  );
}