import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./App.css";

import Folders from "./components/Folders/Folders";
import Notes from "./components/Notes/Notes";
import Note from "./components/Note/Note";
import NotefulContext from "./components/NotefulContext/NotefulContext";
import config from "./config";

class App extends Component {
  state = {
    notes: [],
    folders: [],
  };

  deleteNote = (noteid) => {
    const newNotes = this.state.notes.filter((nid) => nid.id !== noteid);
    this.setState({
      notes: newNotes,
    });
  };

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/folders`)
      .then((res) => res.json())
      .then((folders) => this.setState({ folders }));
    fetch(`${config.API_ENDPOINT}/notes`)
      .then((res) => res.json())
      .then((notes) => this.setState({ notes }));
  }

  render() {
    const contextValue = {
      notes: this.state.notes,
      folders: this.state.folders,
      deleteNote: this.deleteNote,
    };

    return (
      <div className="App">
        <header>
          <h1>
            <Link to="/">Noteful</Link>
          </h1>
        </header>
        <NotefulContext.Provider value={contextValue}>
          <main>
            <aside>
              <Route
                exact
                path={["/", "/folder/:folderid", "/note/:noteid"]}
                component={Folders}
              />
            </aside>
            <section>
              <Route
                exact
                path={["/", "/folder/:folderid"]}
                component={Notes}
              />
              <Route exact path="/note/:noteid" component={Note} />
            </section>
          </main>
        </NotefulContext.Provider>
      </div>
    );
  }
}

export default App;
