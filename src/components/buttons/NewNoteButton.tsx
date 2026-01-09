export default function NewNoteButton({
  notes,
  setNotes,
}: {
  notes: string[];
  setNotes: (notes: string[]) => void;
}) {
  return (
    <button
      onClick={() => {
        setNotes([...notes, "love"]);
      }}
    >
      New Note
    </button>
  );
}
