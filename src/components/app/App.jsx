import React from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "../../layouts/layout/Layout";

import Home from "../../pages/home/Home";
import Classes from "../../pages/classes/Classes";
import Community from "../../pages/community/Community";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route path="/classes">
            <Classes />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
