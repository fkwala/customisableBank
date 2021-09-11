import React from 'react';
import './style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import defaultMode from './defaultMode';
import editingMode from './editingMode';
import modeSwitch from './modeSwitch';


function app() {
  return (
    <Router>
      <div className="App">
        <modeSwitch />
        <Switch>
          <Route path="/" component={defaultMode} />
          <Route path="/editing" component={editingMode} />
        </Switch>
      </div>
    </Router>
  );
}

export default app;
