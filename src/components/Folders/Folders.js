import React, { Component } from "react";
import { Link } from "react-router-dom";
import NotefulContext from "../NotefulContext/NotefulContext";
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
                {folder.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Folders;
