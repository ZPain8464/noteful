import React, { Component } from "react";
import { Link } from "react-router-dom";
import DummyStore from "../../DummyStore/DummyStore";

class Folders extends Component {
  render() {
    const folders = DummyStore.folders;
    return (
      <div className="Folders">
        <ul>
          {folders.map((folder) => (
            <li onClick={(e) => this.props.selFolder(folder)} key={folder.id}>
              <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Folders;
