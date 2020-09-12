import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Folders from "./components/Folders/Folders";
import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import "./DummyStore/DummyStore";

// Add state to Routes

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  selectedFolder = (folder) => {
    this.setState({
      folders: folder,
    });
  };

  selectedNote = (note) => {
    this.setState({
      notes: note,
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <main>
          <aside>
            <Route
              path="/"
              render={(routerProps) => (
                <Folders
                  {...routerProps}
                  {...this.state.folders}
                  selFolder={(folder) => this.selectedFolder(folder)}
                />
              )}
            />
          </aside>
          <section>
            <Route
              exact
              path={["/", "/folder/:folderid"]}
              render={(routerProps) => (
                <Notes
                  {...routerProps}
                  selNote={(note) => this.selectedNote(note)}
                />
              )}
            />
            <Route
              exact
              path={["/note/:noteid"]}
              render={(routerProps) => (
                <Note
                  {...routerProps}
                  folder={this.state.folders}
                  note={this.state.notes}
                />
              )}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
