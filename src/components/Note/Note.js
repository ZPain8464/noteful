import React from "react";
import Context from "../NotefulContext/NotefulContext";
import BackButton from "../BackButton/BackButton";
import config from "../../config";

import PropTypes from "prop-types";

export default class Note extends React.Component {
  static contextType = Context;

  handleDelete = (noteid, callback) => {
    this.props.history.push("/");
    fetch(`${config.API_ENDPOINT}/notes/${noteid}`, {
      method: "DELETE",
      "content-type": "application/json",
    })
      .then((res) => {
        res.json();
      })
      .then((data) => {
        callback(noteid);
      });
  };

  render() {
    const { notes } = this.context;
    const noteList = this.props.match.params.noteid
      ? notes.filter((n) => n.id === this.props.match.params.noteid)
      : notes;
    const renderNote = noteList.map((n, i) => {
      return (
        <React.Fragment key={i}>
          <div className="Note_name">
            <h2>{n.name}</h2>
            <button
              onClick={(e) =>
                this.handleDelete(
                  this.props.match.params.noteid,
                  this.context.deleteNote
                )
              }
              className="Note_delete"
            >
              X
            </button>
          </div>
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
          <BackButton {...this.props} />
        </div>
        <div className="Note">{renderNote}</div>
      </>
    );
  }
}

Note.propTypes = {
  match: PropTypes.object.isRequired,
};
