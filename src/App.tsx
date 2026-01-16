import Aside from "./components/Aside";
import Main from "./components/Main";
import "./App.css";
import { useState } from "react";
import RenameModal from "./components/RenameModal";

type Notes = Record<string, string>;

export default function App() {
  const [currentNote, setCurrentNote] = useState<string>("love");
  const [notesContent, updateNotesContent] = useState<Notes>({});
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="app">
      <Aside
        setCurrentNote={setCurrentNote}
        updateNotesContent={updateNotesContent}
        setIsModalOpen={setIsModalOpen}
      />
      <Main
        currentNote={currentNote}
        notesContent={notesContent}
        updateNotesContent={updateNotesContent}
      />
      <RenameModal
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
