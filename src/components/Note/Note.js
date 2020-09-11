import React from "react";
import DummyStore from "../../DummyStore/DummyStore";
import BackButton from "../BackButton/BackButton";

export default function Note(props) {
  const notes = DummyStore.notes;
  const noteList = props.match.params.noteid
    ? notes.filter((n) => n.id === props.match.params.noteid)
    : notes;
  const renderNote = noteList.map((n, i) => {
    return (
      <React.Fragment key={i}>
        <h2 className="Note_name">{n.name}</h2>
        <p className="Modified_date">
          Modified on {new Date(n.modified).toLocaleDateString()}
        </p>
        <p className="Note_content">{n.content}</p>
      </React.Fragment>
    );
  });
  return (
    <>
      <div className="BackButton_section">
        <BackButton props={props.history} />
      </div>
      <div className="Note">{renderNote}</div>
    </>
  );
}
