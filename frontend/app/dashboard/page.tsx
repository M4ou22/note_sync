"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, LogOut, FileText } from "lucide-react";

import { useAuth } from "@/contexts/AuthContext";
import { useNotes } from "@/contexts/NotesContext";
import { NoteCard } from "@/components/NoteCard";
import { NoteModal } from "@/components/NoteModal";
import { DeleteConfirmModal } from "@/components/DeleteConfirmModal";
import { Note } from "@/types";

export default function DashboardPage() {
  const router = useRouter();

  const { user, signOut, isAuthenticated } = useAuth();
  const { notes, deleteNote } = useNotes();

  const [isNoteModalOpen, setIsNoteModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<Note | null>(null);
  const [deletingNote, setDeletingNote] = useState<Note | null>(null);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin");
    }
  }, [isAuthenticated, router]);

  const handleSignOut = () => {
    signOut();
    router.push("/");
  };

  const handleEdit = (note: Note) => {
    setEditingNote(note);
    setIsNoteModalOpen(true);
  };

  const handleDelete = (note: Note) => {
    setDeletingNote(note);
  };

  const confirmDelete = () => {
    if (deletingNote) {
      deleteNote(deletingNote.id);
      setDeletingNote(null);
    }
  };

  const handleCloseModal = () => {
    setIsNoteModalOpen(false);
    setEditingNote(null);
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
{/* NoteSync Logo */}
<button
  onClick={() => router.push("/")}
  className="flex items-center gap-2"
>
  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-sm">
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paper */}
      <rect
        x="7"
        y="4"
        width="18"
        height="23"
        rx="3"
        fill="white"
      />

      {/* Note lines */}
      <path
        d="M11 10H21"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11 14H19"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M11 18H16"
        stroke="#6366F1"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Pencil */}
      <path
        d="M20.5 21.5L25.5 16.5L28 19L23 24L19.5 25L20.5 21.5Z"
        fill="#4F46E5"
      />

      {/* Pencil tip */}
      <path
        d="M19.5 25L20.5 21.5L23 24L19.5 25Z"
        fill="#312E81"
      />
    </svg>
  </span>

  <span className="text-xl font-semibold tracking-tight">
    <span className="text-foreground">Note</span>
    <span className="text-primary">Sync</span>
  </span>
</button>

          {/* User / Sign Out */}
          <div className="flex items-center gap-3">
            <span className="hidden text-sm text-muted-foreground sm:block">
              {user?.name}
            </span>

            <button
              onClick={handleSignOut}
              className="rounded-xl p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
              title="Sign out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Page Heading */}
        <div className="mb-8 flex items-center justify-between gap-4">

          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Your Notes
            </h1>

            <p className="mt-1 text-muted-foreground">
              {notes.length === 0
                ? "No notes yet. Create your first one!"
                : `${notes.length} note${notes.length === 1 ? "" : "s"}`}
            </p>
          </div>

          <button
            onClick={() => setIsNoteModalOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-primary px-4 py-3 font-medium text-white transition hover:opacity-90"
          >
            <Plus className="h-5 w-5" />

            <span className="hidden sm:inline">
              New Note
            </span>
          </button>
        </div>

        {/* Empty State */}
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border px-6 py-20 text-center">

            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>

            <h2 className="text-xl font-semibold text-foreground">
              No notes yet
            </h2>

            <p className="mt-2 max-w-sm text-muted-foreground">
              Start capturing your ideas, thoughts, and reminders by creating
              your first note.
            </p>

            <button
              onClick={() => setIsNoteModalOpen(true)}
              className="mt-6 flex items-center gap-2 rounded-xl bg-primary px-5 py-3 font-medium text-white transition hover:opacity-90"
            >
              <Plus className="h-5 w-5" />
              Create your first note
            </button>
          </div>
        ) : (

          /* Notes Grid */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {notes.map((note, index) => (
              <NoteCard
                key={note.id}
                note={note}
                index={index}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </main>

      {/* Create / Edit Note Modal */}
      <NoteModal
        isOpen={isNoteModalOpen}
        onClose={handleCloseModal}
        note={editingNote}
      />

      {/* Delete Confirmation */}
      <DeleteConfirmModal
        isOpen={!!deletingNote}
        onClose={() => setDeletingNote(null)}
        onConfirm={confirmDelete}
        noteTitle={deletingNote?.title || ""}
      />
    </div>
  );
}