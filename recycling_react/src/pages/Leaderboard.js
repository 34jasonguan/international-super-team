import React, { useState, useRef, useEffect } from 'react';
import Profiles from '../Components/Profiles';

function Leaderboard({ currentUser }){
    const [showBoard, setShowBoard] = useState(null);
    const infoUrl = `http://localhost:8080/users/${currentUser}/getTop_All`;

    // Looks for the data in the backend
    useEffect(() => {
        fetch(infoUrl)
            .then((respose) => respose.json())
            .then((data) => {
                // console.log("data", data.name)
                setShowBoard(data.name)
            })
    }, [])

    return(
        // This is the actual page
        <Profiles Leaderboard={showBoard}></Profiles>
    )
}

export default Leaderboard;