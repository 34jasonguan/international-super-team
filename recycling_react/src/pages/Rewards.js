import React, { useState, useRef, useEffect } from 'react';

function Rewards({ currentUser }) {

  const [showPoints, setShowPoints] = useState(false);
  const infoUrl = `http://localhost:8080/users/${currentUser}/getPoints`;

  // Looks for the data in the backend
  useEffect(() => {
      fetch(infoUrl)
          .then((respose) => respose.json())
          .then((data) => {
              // console.log("data", data.name)
              setShowPoints(data.name)
          })
  }, [])

  return (
    <div class="rewards">
        <p> Sorry, the rewards page has not been implemented yet. </p>
    </div>
  )
}

export default Rewards