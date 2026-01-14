import { useState } from "react";
import SidebarButton from "./buttons/SidebarButton";
import "./Main.css";

export default function Main({ currentNote }: { currentNote: string }) {
  const [text, setText] = useState<string>("");

  return (
    <main>
      <div className="note-toolbar">
        <SidebarButton />
      </div>
      <div className="note-editor">
        <textarea
          onChange={(e) => {
            setText(e.target.value);
          }}
          id="textarea"
          value={text}
        ></textarea>
      </div>
    </main>
  );
}
