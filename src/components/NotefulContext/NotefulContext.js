import React from "react";

const NotefulContext = React.createContext({
  notes: [],
  folders: [],
  deleteNote: () => {},
  createFolder: () => {},
  createNote: () => {},
  updateNote: () => {},
});

export default NotefulContext;
