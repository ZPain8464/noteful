import React from "react";
import { Link } from "react-router-dom";
import DummyStore from "../../DummyStore/DummyStore";
// Create back button and render selected folder
export default function Folders() {
  const folders = DummyStore.folders;
  return (
    <div className="Folders">
      <ul>
        {folders.map((folder) => (
          <li key={folder.id}>
            <Link to={`/folder/${folder.id}`}>{folder.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
