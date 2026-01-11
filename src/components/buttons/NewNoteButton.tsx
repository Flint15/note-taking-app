interface Note {
  name: string;
  id: string;
}

export default function NewNoteButton({
  notes,
  setNotes,
}: {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
}) {
  return (
    <button
      onClick={() => {
        setNotes([...notes, { name: "love", id: crypto.randomUUID() }]);
        console.log(notes);
      }}
    >
      New Note
    </button>
  );
}
