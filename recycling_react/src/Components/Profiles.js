import React from 'react';

export default function Profiles(){
    return(
        <div id="profile">
            {Item()}
        </div>
    )
    function Item(){
        return (
            <div className="flex">
                <div className="item">
                    <div className="info">
                        <h3 className="name header">Name</h3>
                        <span>Dorm</span>
                    </div>
                </div>
                <div className="item">
                    <span>Score</span>
                </div>
            </div>
        )
    }
}

