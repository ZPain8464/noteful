import React from "react";
import { Link } from "react-router-dom";
import DummyStore from "../../DummyStore/DummyStore";
// lists notes as <li> on main page
export default function Notes(props) {
  const notes = DummyStore.notes;
  const noteList = props.match.params.folderid
    ? notes.filter((n) => n.folderId === props.match.params.folderid)
    : notes;
  return (
    <div className="Notes">
      <ul>
        {noteList.map((note) => (
          <li onClick={(e) => props.selNote(note)} key={note.id}>
            <Link to={`/note/${note.id}`}>{note.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
