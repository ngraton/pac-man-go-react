import React from 'react';
import './App.css';
import OpenLayersMap from './components/OpenLayersMap';
import {BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Route exact path='/maps' component={OpenLayersMap} />

      </Router>
    </div>
  );
}

export default App;
