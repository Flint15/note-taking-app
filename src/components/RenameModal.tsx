import { useState } from "react";
import "./RenameModal.css";

export default function RenameModal({
  isModalOpen,
  closeModal,
}: {
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
              console.log(inputContent);
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
