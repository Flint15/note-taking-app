import { type Dispatch, type SetStateAction } from "react";
import "./DropDownMenu.css";

interface Note {
  name: string;
  id: string;
}

type Notes = Record<string, string>;

export default function DropDownMenu({
  currentNoteId,
  notes,
  setNotes,
  updateNotesContent,
  setIsModalOpen,
}: {
  currentNoteId: string;
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  updateNotesContent: Dispatch<SetStateAction<Notes>>;
  setIsModalOpen: (state: boolean) => void;
}) {
  const deleteNote = () => {
    console.log(currentNoteId);
    setNotes(notes.filter((note) => note.id !== currentNoteId));
    updateNotesContent((prev) => {
      const { [currentNoteId]: removed, ...rest } = prev;
      return rest;
    });
  };

  const renameNote = () => {
    setNotes(
      notes.filter((note) => {
        if (note.id === currentNoteId) {
          return (note.name = "Blue");
        }
        return note;
      })
    );
    document
      .querySelector(`.dropdown-menu-note-id-${currentNoteId}`)
      ?.classList.toggle("active");
    setIsModalOpen(true);
  };

  return (
    <div className={`dropdown-menu dropdown-menu-note-id-${currentNoteId}`}>
      <button className="dropdown-menu-item can-focus">Star</button>
      <button className="dropdown-menu-item can-focus" onClick={renameNote}>
        Rename
      </button>
      <button className="dropdown-menu-item can-focus" onClick={deleteNote}>
        Delete
      </button>
    </div>
  );
}
