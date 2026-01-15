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
}: {
  currentNoteId: string;
  notes: Note[];
  setNotes: (notes: Note[]) => void;
  updateNotesContent: Dispatch<SetStateAction<Notes>>;
}) {
  const deleteNote = () => {
    console.log(currentNoteId);
    setNotes(notes.filter((note) => note.id !== currentNoteId));
    updateNotesContent((prev) => {
      const { [currentNoteId]: removed, ...rest } = prev;
      return rest;
    });
  };

  return (
    <div className={`dropdown-menu dropdown-menu-note-id-${currentNoteId}`}>
      <button className="dropdown-menu-item can-focus">Star</button>
      <button className="dropdown-menu-item can-focus">Rename</button>
      <button className="dropdown-menu-item can-focus" onClick={deleteNote}>
        Delete
      </button>
    </div>
  );
}
