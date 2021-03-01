import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
import playersData from './data/data.json';
import Player from './components/Player/Player';
import Team from './components/Team/Team';


function App() {
  const [players, setPlayers] = useState([]);
  const [addedPlayer, setAddedPlayer] = useState([]);

  // load data to state
  useEffect(() => {
    setPlayers(playersData);
  }, []);

  // event handler for add player button
  const handleClick = (player) => {
    const isAdded = addedPlayer.indexOf(player);
    const teamSize = addedPlayer.length;
    if(isAdded !== -1){
      alert('Player added already!');
      return;
    }
    if(teamSize === 11) {
      alert('You team is already full!');
      return;
    }
    setAddedPlayer([...addedPlayer, player]);
  }

  return (
    <div className="App">
      <div className="bg-primary bg-gradient py-3 text-white">
        <h1>Team Builder: IPL 2021</h1>
      </div>
      <div style={{display: 'flex', marginTop: '50px'}}>
        <div style={{maxWidth: '75%'}} className="d-flex flex-wrap">
          {players.map(player => <Player handleClick={handleClick} player={player} key={player.id}></Player>)}
        </div>
        <div className="d-flex justify-content-center ms-4 border-start border-darken-2 ps-4">
          <Team addedPlayer={addedPlayer}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
