import React from "react";
import { Router, Route } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import EpisodeDetails from "./components/EpisodeDetails";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/episode-details" component={EpisodeDetails}/>
    </App>
  </Router>
);

// export
export { router };
