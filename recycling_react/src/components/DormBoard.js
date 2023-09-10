import React from 'react'
import Dorm from "./Dorm";
import {Link} from 'react-router-dom';
import '../styles/DormBoard.css'

export default function DormBoard({LeaderboardData}){

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

            <Dorm Leaderboard={LeaderboardData}></Dorm>
        
        </div>

    )
}