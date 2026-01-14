import Aside from "./components/Aside";
import Main from "./components/Main";
import "./App.css";
import { useState } from "react";

export default function App() {
  const [currentNote, setCurrentNote] = useState<string>("love");

  const [notes, updateNotes] = useState<Record<string, string>>({});

  return (
    <div className="app">
      <Aside setCurrentNote={setCurrentNote} />
      <Main currentNote={currentNote} notes={notes} updateNotes={updateNotes} />
    </div>
  );
}
