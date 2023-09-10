// import React from 'react'
import React, { useState, useRef, useEffect } from 'react';
import {Link} from 'react-router-dom'; 
import Banner from '../images/da-lemon.png'; 
import '../styles/Home.css'; 

function Name({ currentUser }){
  const [showBoard, setShowBoard] = useState(null);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getName`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              console.log("data", data.name)
              
          })
  }, [])
}

function Home({ currentUser }) {
  const [showName, setShowName] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getName`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              // console.log("data", data.name)
              setShowName(data.name)
          })
  }, [])

  return (
    <div className="home" style={{ backgroundImage: `url(${Banner})` }}> 
        <div className="headerContainer">
            <h1> Welcome Back, {showName} </h1>
            <p> Ready to recycle? </p>
            <Link to="/updatescore">
                <button> LOG MY RECYCLING </button>
            </Link>
        </div>
    </div>
  )
}

export default Home