import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

import Login from './components/Login.jsx';
import PlayerView from './components/PlayerView.jsx';
import SpectatorView from './components/SpectatorView.jsx';
import TopNavBar from './components/TopNavBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Router>
        <div>
          
          <ul>
            <li><a href="/login">Login Page</a></li>
            <li><Link to="/playerView">Player View</Link></li>
            <li><Link to="/spectatorView">Spectator View</Link></li>
          </ul> 

          <Route path="/login" component={Login}/>
          <Route path="/playerView" component={PlayerView}/>
          <Route path="/spectatorView" component={SpectatorView}/>

        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));