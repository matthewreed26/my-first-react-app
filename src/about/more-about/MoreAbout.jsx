import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import MoreAboutChoice from './more-about-choice/MoreAboutChoice';

function MoreAbout() {
  let match = useRouteMatch();
  return(
    <div>
      <ul>
        <li>
          <Link className="App-link" to={`${match.url}/me`}>Me!</Link>
        </li>
        <li>
          <Link className="App-link" to={`${match.url}/my_react_hype`}>
            My Hype for React!
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:about_choice`} component={MoreAboutChoice}/>
        <Route path={match.path}>
          <h3>Select a Link Above</h3>
        </Route>
      </Switch>
    </div>
  );
}
  
export default MoreAbout;