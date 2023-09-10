import React from 'react'
import Dorm from "./Dorm";

export default function DormBoard({LeaderboardData}){

    console.log(LeaderboardData)

    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="duration">
                <button data-id="1">Button1</button>
                <button data-id="2">Button2</button>
            </div>

            <Dorm Leaderboard={LeaderboardData}></Dorm>
        
        </div>

    )
}