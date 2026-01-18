import { useState, type Dispatch, type SetStateAction } from "react";
import "./RenameModal.css";

interface Note {
  id: string;
  pinned: boolean;
  name: string;
  content: string;
}

export default function RenameModal({
  notes,
  updateNotes,
  currentNoteId,
  isModalOpen,
  closeModal,
}: {
  notes: Note[];
  updateNotes: Dispatch<SetStateAction<Note[]>>;
  currentNoteId: string;
  isModalOpen: boolean;
  closeModal: () => void;
}) {
  if (!isModalOpen) return null;

  const [inputContent, setInputContent] = useState<string>("");

  return (
    <div
      className="rename-modal-overlay"
      onClick={() => {
        closeModal();
      }}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
        />
        <div className="buttons">
          <button className="cancel" onClick={closeModal}>
            Cancel
          </button>
          <button
            className="save"
            onClick={() => {
              updateNotes(
                notes.map((note) =>
                  note.id === currentNoteId
                    ? { ...note, name: inputContent }
                    : note,
                ),
              );
              closeModal();
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
