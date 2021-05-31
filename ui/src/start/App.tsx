import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

export interface IBoolbShelfProps {
}

const App: React.FC<IBoolbShelfProps> = () => {

  return (

    <Router>
      <div>
        <ul>
          <li><Link to="/a">a</Link></li>
          <li><Link to="/b">b</Link></li>
          <li><Link to="/">default</Link></li>
        </ul>
      <Switch>
        <Route path="/a">
          <h1>route a</h1>
        </Route>
        <Route path="/b">
          <h1>route b</h1>
        </Route>

        <Route path="*">
          <h1>Default rout e</h1>
        </Route>
      </Switch>
      </div>
    </Router>

  );
};

export default App;
