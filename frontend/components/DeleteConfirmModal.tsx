"use client";

import React from "react";
import { AlertTriangle, X } from "lucide-react";

interface DeleteConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  noteTitle: string;
}

export function DeleteConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  noteTitle,
}: DeleteConfirmModalProps) {
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
      <div className="relative w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-border p-5">
          <h2 className="text-lg font-semibold text-foreground">
            Delete Note
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-muted-foreground transition hover:bg-muted hover:text-foreground"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="mb-5 flex items-start gap-4">

            <div className="rounded-full bg-destructive/10 p-3">
              <AlertTriangle className="h-6 w-6 text-destructive" />
            </div>

            <div>
              <p className="mb-1 text-foreground">
                Are you sure you want to delete this note?
              </p>

              <p className="text-sm text-muted-foreground">
                &quot;{noteTitle}&quot; will be permanently deleted. This
                action cannot be undone.
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 rounded-xl border border-border px-5 py-3 font-medium text-foreground transition hover:bg-muted"
            >
              Cancel
            </button>

            <button
              type="button"
              onClick={onConfirm}
              className="flex-1 rounded-xl bg-destructive px-5 py-3 font-medium text-destructive-foreground transition hover:opacity-90"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}