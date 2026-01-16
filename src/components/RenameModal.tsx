import "./RenameModal.css";

export default function RenameModal({
  isModalOpen,
  closeModal,
  inputContent,
  setInputContent,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
  inputContent: string;
  setInputContent: (content: string) => void;
}) {
  if (!isModalOpen) return null;

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
