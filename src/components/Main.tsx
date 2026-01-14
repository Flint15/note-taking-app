import { useState } from "react";
import SidebarButton from "./buttons/SidebarButton";
import "./Main.css";

export default function Main({
  currentNote,
  notes,
  updateNotes,
}: {
  currentNote: string;
  notes: object;
  updateNotes: (notes: Record<string, string>) => void;
}) {
  const [text, setText] = useState<string>("");
  console.log(notes);
  return (
    <main>
      <div className="note-toolbar">
        <SidebarButton />
      </div>
      <div className="note-editor">
        <textarea
          onChange={(e) => {
            setText(e.target.value);
            updateNotes({ ...notes, [currentNote]: e.target.value });
          }}
          id="textarea"
          value={text}
        ></textarea>
      </div>
    </main>
  );
}
