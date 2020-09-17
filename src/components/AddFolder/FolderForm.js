import React, { Component } from "react";
import NotefulContext from "../NotefulContext/NotefulContext";
import config from "../../config";
import BackButton from "../../components/BackButton/BackButton";

export default class FolderForm extends Component {
  static contextType = NotefulContext;

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.goBack("/");
    const formInput = e.target.name.value;

    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ name: formInput }),
    })
      .then((res) => {
        return res.json();
      })
      .then((folder) => {
        this.context.createFolder(folder);
      });
  };

  render() {
    return (
      <>
        <BackButton {...this.props} />
        <div className="FolderForm">
          <form
            onSubmit={(e) => this.handleSubmit(e)}
            className="FolderForm_field"
          >
            <h2>Create a folder</h2>
            <label htmlFor="Folder_name">Folder Name</label>
            <input name="name" id="Folder_name" type="text" />
            <div className="FolderForm_button">
              <button className="FolderForm_submit" type="submit">
                Add Folder
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}
