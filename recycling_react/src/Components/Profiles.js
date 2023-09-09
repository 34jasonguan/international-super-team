import React from "react";

export default function Profiles(Leaderboard){
    return(
        <div id="profile">
            {Item(Leaderboard.name)}
        </div>
    )
}

function Item(data){
    return(
        <div>
            {
                data.map((value, index) => (
                    <div className="flex">
                        <div className="item">
                            <div className="info">
                                <h3 className="name text-dark">{value.name}</h3>
                            </div>
                        </div>
                        <div className="item">
                            <span>{value.points}</span>
                        </div>
                    </div> 
                    )
                )
            }
        </div>
    )
}