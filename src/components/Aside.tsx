import { useEffect, useState } from "react";
import NewNoteButton from "./buttons/NewNoteButton";
import "./Aside.css";

interface Note {
  name: string;
  id: string;
}

export default function Aside({
  setCurrentNote,
}: {
  setCurrentNote: (noteId: string) => void;
}) {
  const [notes, setNotes] = useState<Note[]>([]);
  const [selectedNote, setSelectedNote] = useState<number>();

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <aside>
      <div className="all-notes-label">All Notes</div>
      <NewNoteButton notes={notes} setNotes={setNotes} />
      <div className="notes-container">
        <div>
          {notes.map((note: Note, index: number) => (
            <div
              key={index}
              id={note.id}
              className={`note ${index === selectedNote ? "selected" : ""}`}
              onClick={() => {
                setSelectedNote(index);
                setCurrentNote(note.id);
              }}
            >
              {note.name}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
