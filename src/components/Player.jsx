function Player({playerData}) {
  //background image is probably commander art
  return (
    <div style={{"border":"1px solid black"}}>
      <p>{playerData.playerName}</p>
    </div>
  )
}

export default Player
