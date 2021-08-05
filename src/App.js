import "./styles.css";

import { Switch, Route } from "react-router-dom";
import { AppContext } from "./context";
import { useState } from "react";

import Navbar from "./Navbar";
import Home from "./Home";
import Search from "./Search";
import Watch from "./Watch";

export default function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <AppContext.Provider value={{ query, setQuery }}>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
        </Switch>
      </AppContext.Provider>
    </div>
  );
}
