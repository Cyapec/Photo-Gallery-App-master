import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Gallery } from "./pages/Gallery/Gallery";
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import ButtonAppBar from "./components/ButtonAppBar/ButtonAppBar";
import { Copyright } from "./components/Footer/Footer";

function App():JSX.Element {
  return (
    <>
      <Router>
        <ButtonAppBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </Router>
      <Copyright/>
    </>
  );
}

export default App;
