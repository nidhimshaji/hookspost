import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contacts";
import { Route, Switch } from "react-router-dom";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/:post_id" component={Post} />
      </Switch>
    </div>
  );
}

export default App;
