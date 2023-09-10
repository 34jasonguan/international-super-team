import React from 'react'
import Profiles from "./Profiles";
//import { LeaderboardData } from '../pages/Leaderboard';
import { getLeaderboardData } from '../pages/Leaderboard';

// function useless(){
//     return 0;
// }

export default function Board({LeaderboardData}){

    // const handleClick = () =>{

    // }

    // if (LeaderboardData == undefined){
    //     // setTimeout(useless,
    //     //     2000
    //     // )

    // }

    console.log(LeaderboardData)

    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="duration">
                <button data-id="1">Button1</button>
                <button data-id="2">Button2</button>
            </div>

            <Profiles Leaderboard={LeaderboardData}></Profiles>
        
        </div>

    )
}