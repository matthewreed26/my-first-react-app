import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ClockApp from './clock-app/ClockApp';
import About from './about/About';

function App() {
    return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Clocks</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/">
                <ClockApp />
              </Route>
            </Switch>
          </header>
        </div>
      </div>
    </Router>
    );
}

export default App;
