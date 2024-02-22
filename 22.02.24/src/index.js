import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Page from './page';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<div>
  <Router>
    <Switch>
      <Route path='/page'>
        <Page />
      </Route>
    </Switch>
  </Router>
</div>);

