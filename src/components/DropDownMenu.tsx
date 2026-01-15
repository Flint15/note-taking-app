import "./DropDownMenu.css";

export default function DropDownMenu({
  currentNoteIndex,
}: {
  currentNoteIndex: number;
}) {
  return (
    <div className={`dropdown-menu dropdown-menu-note-id-${currentNoteIndex}`}>
      <button className="dropdown-menu-item can-focus">Star</button>
      <button className="dropdown-menu-item can-focus">Rename</button>
      <button className="dropdown-menu-item can-focus">Delete</button>
    </div>
  );
}
