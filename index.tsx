import React, { Component, lazy, Suspense } from 'react';
import { render } from 'react-dom';
import './style.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Hello = lazy(() => import('./Hello'));

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Suspense fallback={<div>Hurray this is fall back</div>}>
              <Route path="/about">
                <div>This is about page</div>
                <Hello />
              </Route>
              <Route path="/users">
                <div>This is Users page</div>
                <Hello />
              </Route>
              <Route path="/">
                <div>This is default page</div>
              </Route>
            </Suspense>
          </Switch>
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
