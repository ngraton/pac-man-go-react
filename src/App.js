import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import GamePage from './pages/GamePage';
import PlayPage from './pages/PlayPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewGamePage from './pages/NewGamePage';
import NotFound404Page from './pages/NotFound404Page';
import ForNavBar from './components/ForNavBar';
// import ForAPI from './api/ForAPI';

function App() {

  const logout = () => {
    localStorage.clear()
    return <Redirect to="/login" />
  }

  return (
    <div>
      <Router>
        <ForNavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/logout' render={logout} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/newgame' component={NewGamePage} />
          <Route exact path='/game/:gameID' component={GamePage} />
          <Route exact path='/play' component={PlayPage} />
          <Route component={NotFound404Page} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
