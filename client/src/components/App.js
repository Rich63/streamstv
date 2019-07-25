import React from 'react';
import { Router, Route, Switch } from "react-router-dom";

import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamShow from "./streams/StreamShow";

import Header from "./Header";
import history from "../history";

const App = () => {
  return (
    <div className="ui container">
      <Router history={ history }>
        <Header />
        <Switch>  
          <Route path="/" exact component={ StreamList } />
          <Route path="/streams/new" exact component={ StreamCreate } />
          <Route path="/streams/edit/:id" exact component={ StreamEdit } />
          <Route path="/streams/delete/:id" exact component={ StreamDelete } />
          <Route path="/streams/:id" exact component={ StreamShow } />
        </Switch>
      </Router>
    </div>
  );
};

export default App;

/*
  Remember any time that it feels like react Rotterdam is showing a component that
  it shouldn't show. Chances are you've got one of these little query parameters
  on here and that's probably what is throwing off your route matching.

  And you can very easily solve this by just adding in a Switch method from 
  react-router-dom to wrap all of your different routes.
*/