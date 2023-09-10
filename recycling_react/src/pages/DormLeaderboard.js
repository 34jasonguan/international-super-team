import React, { useState, useRef, useEffect } from 'react';

function DormLeaderboard({ currentUser }){
    const [showBoard, setshowBoard] = useState(0)
    const infoUrl = `http://localhost:8080/users/${currentUser}/getDormRank`;

    // Looks for the data in the backend
    useEffect(() => {
        fetch(infoUrl)
            .then((response) => response.json())
            .then((data) => {
                setshowBoard(data.results);
                console.log(data.results);
            }) 
    }, []);

    // if (showBoard !== 0){
    //     return(
    //         //     This is the actual page
    //             <Board LeaderboardData={showBoard}></Board>
    //         )
    // }
}
export default DormLeaderboard;