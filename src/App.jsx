import week1 from './jsons/week1.json';
import Player from './components/Player';
import { useState } from 'react';

function App() {
  console.log(week1);
  const [activePlayer, setActivePlayer] = useState(0);
  const [activeCard, setActiveCard] = useState("");

  return (
    <div className="App">
      <h1>Commander Warhammer 40k</h1>
      <div>Week ></div>
      {/* this div wraps the players, css grid will help you make the 4 equal sized squares */}
      <div>
        {
          week1.players.map((player, index) =>
            <Player
              key={`player${index}`}
              playerData={player} 
            />
          )
        }
      </div>
      <div>
        <div>
          <div>List</div>
          <div>Changes</div>
        </div>
        <div>
        {
          week1.players[0].decklist.map((card, index) =>
            <Card
              key={`card${index}`}
              playerData={player}
              setActiveCard={setActiveCard}
            />
          )
        }
        <img src={activeCard} alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
