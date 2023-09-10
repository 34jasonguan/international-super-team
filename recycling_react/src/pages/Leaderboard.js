import React, { useState, useRef, useEffect } from 'react';
import Board from '../components/Board';

export let LeaderboardData;

function Leaderboard({ currentUser }){
    //const showBoard = React.useRef(null); 
    const [showBoard, setshowBoard] = useState(0)
    const infoUrl = `http://localhost:8080/users/${currentUser}/getTop_All`;

    // Looks for the data in the backend
    useEffect(() => {
        fetch(infoUrl)
            .then((response) => response.json())
            .then((data) => {
                //console.log("data", data.name)
                setshowBoard(data.name)
                //showBoard.current = data.name;
                //console.log(showBoard);
                LeaderboardData = showBoard; 
                //console.log(LeaderboardData);
            }) 
    }, []);
    
    //console.log(showBoard)

    if (showBoard !== 0){
        return(
            //     This is the actual page
                <Board LeaderboardData={showBoard}></Board>
            )
    }

}

//console.log(LeaderboardData)  

export function getLeaderboardData(){
    return LeaderboardData;
}

export default Leaderboard;