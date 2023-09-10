import React from 'react'
import {Link} from 'react-router-dom'; 
import Banner from '../images/final-t2t-home-background.png'; 
import '../styles/Home.css'; 

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}> 
        <div className="headerContainer">
            <h1> Welcome Back, Raul! </h1>
            <p> Ready to recycle? </p>
            <Link to="/updatescore">
                <button> Log My Recycling </button>
            </Link>
        </div>
    </div>
  )
}

export default Home