import "./RenameModal.css";

export default function RenameModal({
  isModalOpen,
  closeModal,
}: {
  isModalOpen: boolean;
  closeModal: () => void;
}) {
  if (!isModalOpen) return null;

  return (
    <div
      className="rename-modal-overlay"
      onClick={() => {
        closeModal();
      }}
    ></div>
  );
}
