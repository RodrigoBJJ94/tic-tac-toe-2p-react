import React, { useState } from 'react';
import './App.css';
import PlayAgain from './components/PlayAgain/PlayAgain';
import Game from './components/Game/Game';

export default function App() {
  const [game, setGame] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [symbolTurn, setSymbolTurn] = useState('X');
  const [playing, setPlaying] = useState(true);

  return (
    <div>
      <Game
        game={game}
        symbolTurn={symbolTurn}
        setSymbolTurn={setSymbolTurn}
        playing={playing}
        setPlaying={setPlaying}
      />
      <PlayAgain
        setPlaying={setPlaying}
        setGame={setGame}
        setSymbolTurn={setSymbolTurn}
      />
    </div>
  );
};
