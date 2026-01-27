import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import SidebarButton from "./buttons/SidebarButton";
import "./Main.css";
import type { Note } from "../types/note";
import PreviewButton from "./buttons/PreviewButton";

export default function Main({
  notes,
  updateNotes,
  currentNoteId,
}: {
  notes: Note[];
  updateNotes: Dispatch<SetStateAction<Note[]>>;
  currentNoteId: string;
}) {
  const [previewMode, turnPreviewMode] = useState<boolean>(false);

  useEffect(() => {
    console.log(previewMode);
  }, [previewMode]);

  return (
    <main>
      <div className="note-toolbar">
        <SidebarButton />
        <PreviewButton turnPreviewMode={turnPreviewMode} />
      </div>
      <div className="note-editor">
        <textarea
          onChange={(e) => {
            updateNotes(
              notes.map((note) => {
                if (note.id === currentNoteId) {
                  note.content = e.target.value;
                  return note;
                }
                return note;
              }),
            );
          }}
          id="textarea"
          value={notes.find((note) => note.id === currentNoteId)?.content || ""}
        ></textarea>
      </div>
    </main>
  );
}
