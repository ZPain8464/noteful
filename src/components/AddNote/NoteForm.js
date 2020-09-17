import React, { Component } from "react";
import NotefulContext from "../NotefulContext/NotefulContext";
import config from "../../config";
import BackButton from "../BackButton/BackButton";
import ValidationError from "../../components/ValidationError/ValidationError";

export default class NoteForm extends Component {
  static contextType = NotefulContext;

  state = {
    noteName: "",
  };

  validateName = (name) => {
    this.setState({
      noteName: name,
    });
    // const noteName = name;
    // if (noteName.length === 0) {
    //   return "Name is required";
    // } else if (noteName.length < 3) {
    //   return "Name must be at least 3 characters long";
    // }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.goBack("/");

    const name = e.target.name.value;
    const content = e.target.content.value;
    const folderId = e.target.folderid.value;
    this.validateName(name);
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        name: name,
        folderId: folderId,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((note) => {
        this.context.createNote(note);
      });
  };

  render() {
    return (
      <>
        <BackButton {...this.props} />
        <div>
          <form onSubmit={(e) => this.handleSubmit(e)} className="Note_form">
            <h2>Create a note</h2>
            <label htmlFor="Note_name">Name</label>
            <input
              name="name"
              type="text"
              onChange={(e) => this.validateName(e.target.value)}
            />
            <ValidationError message={this.validateName()} />
            <label htmlFor="Note_content">Content</label>
            <input type="text" name="content" />
            <label htmlFor="Folder_name">Folder</label>
            <select name="folderid" id="Note_dropdown_select">
              {this.context.folders.map((f, i) => (
                <option key={i} value={f.id}>
                  {f.name}
                </option>
              ))}
            </select>
            <button>Add note</button>
          </form>
        </div>
      </>
    );
  }
}
