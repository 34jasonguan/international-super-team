import React from 'react'
import Profiles from "./Profiles";
import {Link} from 'react-router-dom';
import '../styles/Board.css'

export default function Board({LeaderboardData}){

    console.log(LeaderboardData)

    return(
        <div className="board">
            <h1 className="leaderboard">Leaderboard</h1>
            <div className="duration">
            <Link to="/leaderboard">
                <button> Top Users </button>
            </Link>
            <Link to="/dormleaderboard">
                <button> Dorm Leaderboard </button>
            </Link>
            </div>

            <Profiles Leaderboard={LeaderboardData}></Profiles>
        
        </div>

    )
}