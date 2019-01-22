import React from 'react';

import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from 'screens/Home';

export default () =>
  <div>
    <Router>
      <Route exact path="/" exact component={Home} />
    </Router>
  </div>