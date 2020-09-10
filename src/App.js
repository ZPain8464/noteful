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
            <Route path="/" component={Folders} />
          </aside>
          <section>
            <Route exact path={["/", "/folder/:folderid"]} component={Notes} />
            <Route exact path={["/note/:noteid"]} component={Note} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
