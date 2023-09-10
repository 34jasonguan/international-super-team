import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import Footer from './components/Footer'; 
import Home from './pages/Home'; 
import Leaderboard from './pages/Leaderboard'; 
import Login from './pages/Login'; 
import Rewards from './pages/Rewards'; 
import About from './pages/About'; 
import UpdateScore from './pages/UpdateScore'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
// Selects the user
const curr = 26;

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <div className="line">
      </div>
      <Routes>
        <Route exact path='/' element={<Home currentUser={curr}/>} />
        <Route exact path='/leaderboard' element={<Leaderboard />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/rewards' element={<Rewards />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/updatescore' element={<UpdateScore />} />
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
