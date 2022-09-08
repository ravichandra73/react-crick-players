
import React from 'react'
import "./Players.css"

const Players = ({playername, score,wickets, jerseyno}) => {
  return (
    <div className='players-container'> 
       <h3>Player-name:<strong>{playername}</strong></h3>
        <h3 >jersey-number:<strong>{jerseyno}</strong></h3>
        <h3> score:<strong>{score}</strong></h3>
        <h3> wickets<strong>{wickets}</strong></h3>       
    </div>
  )
}

export default Players