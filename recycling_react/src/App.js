import React from 'react';
import Logo2 from './Logo2.svg';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router components with Routes
import './Navbar.css'; // Import the CSS file



function App() {
  return (
    <body>
    <div className="App">
      <Router>
        <header className="App-header">
          <img src={Logo2} className="App-logo" alt="logo" />
            <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">Our App</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto justify-content-center">
                  <div className='container'>
                    <div className='nav_1'>
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    </div>
                    <div className='nav_1'>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    </div>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Routes> {/* Use Routes to define your routes */}
            <Route path="/" element={<Home />} /> {/* Use element prop to render components */}
            <Route path="/about" element={<About />} />
          </Routes>
        </header>
      </Router>
    </div>
    </body>
  );
}

export default App;