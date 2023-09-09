import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Leaderboard from './pages/Leaderboard';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 

function App() {
  return (
    <div className="App">
      {/* <Router>
      <Navbar />
      <div className="line">
      </div>
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
      <Footer />
      </Router> */}
      <Leaderboard currentUser={1}></Leaderboard>
    </div>
  );
}

export default App;
