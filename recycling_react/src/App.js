import React from 'react'; 
import './App.css'; 
import Navbar from './components/Navbar'; 
import Home from './pages/Home'; 
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'; 
import Form from "./components/Form";
import './styles/Form.css'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Form' element={<Form />} />
      </Routes>
      </Router>
    </div>
  );
}

export default App;
