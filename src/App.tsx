import Aside from "./components/Aside";
import Main from "./components/Main";
import "./App.css";
import { useState, useEffect } from "react";
import RenameModal from "./components/RenameModal";

interface Note {
  id: string;
  name: string;
  content: string;
}

export default function App() {
  const [notes, updateNotes] = useState<Note[]>([]);
  const [currentNoteId, setCurrentNote] = useState<string>("love");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputContent, setInputContent] = useState<string>("");

  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <div className="app">
      <Aside
        notes={notes}
        updateNotes={updateNotes}
        setCurrentNote={setCurrentNote}
        setIsModalOpen={setIsModalOpen}
      />
      <Main
        notes={notes}
        updateNotes={updateNotes}
        currentNoteId={currentNoteId}
      />
      <RenameModal
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        inputContent={inputContent}
        setInputContent={setInputContent}
      />
    </div>
  );
}
