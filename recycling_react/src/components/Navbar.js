import React from 'react'; 
import t2tLogo from '../images/t2t-transparent.svg'; 
import {Link} from 'react-router-dom'; 
import '../styles/Navbar.css'; 
import '../styles/Form.css';
import Form from '../pages/Form';

function Navbar() {
  return (
    <div className="navbar">
        <div className="leftSide">
            <img src={t2tLogo} />
        </div>
        <div className="rightSide">
            <Link to="/Form"> Form </Link>
            <Link to="/leaderboard"> Leaderboard </Link>
            <Link to="/rewards"> Rewards </Link>
            <Link to="/login"> Login </Link>
        </div>


    </div>
  );
}

export default Navbar