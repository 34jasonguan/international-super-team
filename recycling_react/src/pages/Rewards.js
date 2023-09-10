import React, { useState, useRef, useEffect } from 'react';
import img1 from '../images/c-icon.png';
import img2 from '../images/sb-icon.png';
import img3 from '../images/h-icon.png';
import img4 from '../images/rc-icon.png'; 
import '../styles/Rewards.css'

function Rewards({ currentUser }) {

  const [showPoints, setShowPoints] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getPoints`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              // console.log("data", data.points)
              setShowPoints(data.points)
          })
  }, [])

  const [showDorm, setShowDorm] = useState(false);
  const info = `http://localhost:8080/users/${currentUser}/getDorm`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(info)
          .then((respose) => respose.json())
          .then((data) => {
              console.log("data", data)
              setShowDorm(data);
          })
  }, [])

  // If the user is not in the winning dorm
  if(showDorm.dorm != showDorm.wDorm){
    return(
      <p> Sorry, the rewards page has not been implemented yet.</p>
    )
  }
  // If the user is in the winning dorm
  else{
    return (
      
      <div>
          <p className="titleText">You currently have {showPoints} points.</p>
          <div className="newLine"></div>
          <div className="header">
            <h1>List of Rewards: </h1>
          </div>
          <div className="img">
            <img src={img1}></img>
          </div>
          <div className="text">
            <p>
              Redeem 50 Points for a 3 Hour Duke Parking Pass
            </p>
          </div>
          <div className="btn">
          <button> Redeem Here! </button>
          </div>
          <div className="img">
            <img src={img2}></img>
          </div>
          <div className="text">
            <p>
              Redeem 100 Points for a $5 Duke Store Gift Card
            </p>
          </div>
          <div className="btn">
          <button> Redeem Here! </button>
          </div>
          <div className="img">
            <img src={img3}></img>
          </div>
          <div className="text">
            <p>
              Redeem 200 Points for a $10 Food Point Bonus
            </p>
            <div className="btn">
          <button> Redeem Here! </button>
          </div>
          </div>
          <div className="img">
            <img src={img4}></img>
          </div>
          <div className="text">
            <p>
              Redeem 400 Points for a $25 Food Point Bonus
            </p>
          </div>
          <div className="btn">
          <button> Redeem Here! </button>
          </div>
      </div>
    )
  }
  
}

export default Rewards