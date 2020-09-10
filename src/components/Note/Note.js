import React from "react";
import DummyStore from "../../DummyStore/DummyStore";

export default function Note(props) {
  const notes = DummyStore.notes;
  const noteList = props.match.params.noteid
    ? notes.filter((n) => n.id === props.match.params.noteid)
    : notes;
  const renderNote = noteList.map((n, i) => {
    return (
      <>
        <h2 key={i} className="Note_name">
          {n.name}
        </h2>
        <p key={i} className="Modified_date">
          Modified on {Date(n.modified)}
        </p>
        <p key={i} className="Note_content">
          {n.content}
        </p>
      </>
    );
  });
  return <div className="Note">{renderNote}</div>;
}
