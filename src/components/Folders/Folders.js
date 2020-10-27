import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext/NotefulContext";
import PropTypes from "prop-types";

import "../../config";

class Folders extends Component {
  static contextType = NotefulContext;

  render() {
    const { folders } = this.context;

    return (
      <div className="Folders">
        <ul>
          {folders.map((folder) => (
            <li key={folder.id}>
              <Link
                to={`/folder/${folder.id}`}
                className={
                  folder.id === this.props.match.params.folderid ? "active" : ""
                }
              >
                {folder.folder_name}
              </Link>
            </li>
          ))}
        </ul>
        <Link to="/add-folder">
          <div className="AddFolder">
            <button className="AddFolder_button">+ Folder</button>
          </div>
        </Link>
      </div>
    );
  }
}
Folders.propTypes = {
  match: PropTypes.object.isRequired,
};
export default Folders;
