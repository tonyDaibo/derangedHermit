import { useState } from "react"

function Player({playerData}) {
  //background image is probably commander art

  return (
    <div style={{"border":"1px solid black"}}>
      <p>{playerData.playerName}</p>
      <p>{playerData.commanderName}</p>
    </div>
  )
}

export default Player
