import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Error404 from './Pages/Error404';
import './App.css';

function App() {
  return (
    <div>

      <Navbar />

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
