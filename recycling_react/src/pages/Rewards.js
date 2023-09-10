import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
  if(showDorm.dorm == showDorm.wDorm){
    return(
      <p> You don't have access to redeem rewards</p>
    )
  }
  // If the user is in the winning dorm
  else{
    return (
      
    )
  }
  
}

export default Rewards