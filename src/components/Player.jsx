import { useState } from "react"
import '../App.css'

function Player({playerData}) {
  //background image is probably commander art

  return (
    <div className="player-wrapper">
      <div className="player-inner">
        <div className="player-stats-wrapper">
          <p>{playerData.playerName}</p>
          <p>{playerData.commanderName}</p>
        </div>
        <img className="card-art-background" src={playerData.artCrop}/>
      </div>
    </div>
  )
}

export default Player
