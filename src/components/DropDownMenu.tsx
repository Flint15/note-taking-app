import "./DropDownMenu.css";

export default function DropDownMenu({
  currentNoteIndex,
}: {
  currentNoteIndex: number;
}) {
  return (
    <div className={`dropdown-menu dropdown-menu-note-id-${currentNoteIndex}`}>
      love
    </div>
  );
}
