import { useState, type Dispatch, type SetStateAction } from "react";
import NewNoteButton from "./buttons/NewNoteButton";
import "./Aside.css";
import NoteMenuButton from "./buttons/NoteMenuButton";
import DropDownMenu from "./DropDownMenu";

interface Note {
  id: string;
  name: string;
  content: string;
}

export default function Aside({
  notes,
  updateNotes,
  setCurrentNoteId,
  setIsModalOpen,
}: {
  notes: Note[];
  updateNotes: Dispatch<SetStateAction<Note[]>>;
  setCurrentNoteId: (noteId: string) => void;
  setIsModalOpen: (state: boolean) => void;
}) {
  const [selectedNote, setSelectedNote] = useState<number>();

  return (
    <aside>
      <div className="all-notes-label">All Notes</div>
      <NewNoteButton notes={notes} updateNotes={updateNotes} />
      <div className="notes-container">
        <div>
          {notes.map((note: Note, index: number) => (
            <div key={index} id={note.id} className="note">
              <div className="note-status">
                <button className="note-status-pinner">
                  <svg
                    className="icon-pinner"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                  >
                    <rect x="0" fill="none" width="16" height="16"></rect>
                    <path d="M4.41 10.17l-4-4 5.65-0.52L8.65 3.1 7.24 1.69l1.42-1.42 7.07 7.07 -1.42 1.42 -1.42-1.43 -2.56 2.58 -0.52 5.66 -4-4L3 14.41 1.59 13 4.41 10.17zM8.21 11.17L8.4 9l3.07-3.1 -1.4-1.41L7 7.6 4.87 7.79 8.21 11.17z"></path>
                  </svg>
                </button>
              </div>
              <div
                className={`note-name-container ${
                  index === selectedNote ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedNote(index);
                  setCurrentNoteId(note.id);
                }}
              >
                {note.name}
              </div>
              <NoteMenuButton
                currentNoteId={note.id}
                setCurrentNoteId={setCurrentNoteId}
              />
              <DropDownMenu
                notes={notes}
                updateNotes={updateNotes}
                currentNoteId={note.id}
                setIsModalOpen={setIsModalOpen}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
