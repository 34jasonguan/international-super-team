import React, { useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Leaderboard from './pages/Leaderboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Leaderboard currentUser={1}></Leaderboard>
      {/* <Home /> Render the Home component */}
      {/* <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
      </Router> */}
        {/* <img src={logo} className="App-logo" alt="logo"></img>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
