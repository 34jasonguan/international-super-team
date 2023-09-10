import React, { useState, useRef, useEffect } from 'react';

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

  if(showDorm.dorm != showDorm.wDorm){
    return(
      <p> Sorry, the rewards page has not been implemented yet.</p>
    )
  }
  else{
    return (
      <div class="rewards">
          <p>You currently have {showPoints} points</p>
          <p> Sorry, the rewards page has not been implemented yet. </p>
      </div>
    )
  }
  
}

export default Rewards