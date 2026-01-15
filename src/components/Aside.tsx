import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import NewNoteButton from "./buttons/NewNoteButton";
import "./Aside.css";
import NoteMenuButton from "./buttons/NoteMenuButton";
import DropDownMenu from "./DropDownMenu";

interface Note {
  name: string;
  id: string;
}

type Notes = Record<string, string>;

export default function Aside({
  setCurrentNote,
  updateNotesContent,
}: {
  setCurrentNote: (noteId: string) => void;
  updateNotesContent: Dispatch<SetStateAction<Notes>>;
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
            <div key={index} id={note.id} className="note">
              <div
                className={`note-name-container ${
                  index === selectedNote ? "selected" : ""
                }`}
                onClick={() => {
                  setSelectedNote(index);
                  setCurrentNote(note.id);
                }}
              >
                {note.name}
              </div>
              <NoteMenuButton currentNoteId={note.id} />
              <DropDownMenu
                currentNoteId={note.id}
                notes={notes}
                setNotes={setNotes}
                updateNotesContent={updateNotesContent}
              />
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
