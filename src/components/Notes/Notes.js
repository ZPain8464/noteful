import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext/NotefulContext";
import config from "../../config";

export default class Notes extends Component {
  static contextType = NotefulContext;

  handleDelete = (noteid, cb) => {
    fetch(`${config.API_ENDPOINT}/notes/${noteid}`, {
      method: "DELETE",
      "content-type": "application/json",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        cb(noteid);
      });
  };

  render() {
    const { notes } = this.context;
    // use ^ context variable and this.state.notes.filter w/ setState
    // to remove a note from state and update context

    const noteList = this.props.match.params.folderid
      ? notes.filter((n) => n.folderId === this.props.match.params.folderid)
      : notes;
    return (
      <div className="Notes">
        <ul>
          {noteList.map((note) => (
            <li key={note.id}>
              <Link to={`/note/${note.id}`}>{note.name}</Link>
              <button
                onClick={() =>
                  this.handleDelete(note.id, this.context.deleteNote)
                }
                className="Notes_delete"
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
