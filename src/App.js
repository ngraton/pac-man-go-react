import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GamePage from './pages/GamePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NewGamePage from './pages/NewGamePage';
import NotFound404Page from './pages/NotFound404Page';
import ForNavBar from './components/ForNavBar';

function App() {
  return (
    <div>
      <Router>
        <ForNavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/newgame' component={NewGamePage} />
          <Route exact path='/game/:gameID' component={GamePage} />
          <Route component={NotFound404Page} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
