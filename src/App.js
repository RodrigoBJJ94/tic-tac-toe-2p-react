import React, { useState } from 'react';
import './App.css';
import swal from 'sweetalert';
import Board from './components/Board/Board';
import PlayAgain from './components/PlayAgain/PlayAgain';
import WhoIsPlay from './components/WhoIsPlay/WhoIsPlay';

export default function App() {
  const [game, setGame] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [symbolTurn, setSymbolTurn] = useState('X');
  const [playing, setPlaying] = useState(true);

  







  

  const verifyVictory = () => {
    let points = 0;
    let victory = false;

    for (let line = 0; line < 3; line++) {
      points = 0;
      for (let column = 0; column < 3; column++) {
        if (game[line][column] === symbolTurn) {
          points++;
        };
      };

      if (points === 3) {
        victory = true;
        break;
      };
    };

    for (let column = 0; column < 3; column++) {
      points = 0;
      for (let line = 0; line < 3; line++) {
        if (game[line][column] === symbolTurn) {
          points++;
        };
      };

      if (points === 3) {
        victory = true;
        break;
      };
    };

    points = 0;
    for (let diagonal = 0; diagonal < 3; diagonal++) {
      if (game[diagonal][diagonal] === symbolTurn) {
        points++;
      };
    };

    if (points === 3) {
      victory = true;
    };

    points = 0;
    let line = 0;
    for (let column = 2; column >= 0; column--) {
      if (game[line][column] === symbolTurn) {
        points++;
      };
      line++;
    };

    if (points === 3) {
      victory = true;
    };

    return victory;
  };

  const turnPlayer = () => {
    symbolTurn === 'X' ? setSymbolTurn('O') : setSymbolTurn('X');
  };

  const returnPosition = (element) => {
    const position = element.target.getAttribute('data-pos');
    const pos = [parseInt(position.substring(0, 1)), parseInt(position.substring(1, 2))];
    return pos;
  };

  const verifyEmptys = (element) => {
    if (game[returnPosition(element)[0]][returnPosition(element)[1]] === '') {
      return true;
    } else {
      return false;
    };
  };

  const play = (element) => {
    if (playing) {
      if (verifyEmptys(element)) {
        game[returnPosition(element)[0]][returnPosition(element)[1]] = symbolTurn;
        turnPlayer();
        if (verifyVictory()) {
          turnPlayer();
          swal(`Player ${symbolTurn} win!`);
          setPlaying(false);
        }
      } else {
        swal('This square is not empty!');
      }
    }
  }

  const playAgain = () => {
    if (!playing) {
      return (
        <PlayAgain setPlaying={setPlaying} setGame={setGame} setSymbolTurn={setSymbolTurn} />
      );
    };
  };

  return (
    <div>
      <WhoIsPlay symbolTurn={symbolTurn} />
      <div className="game">
        <Board play={play} game={game} />
      </div>
      <div className="play-again">
        {playAgain()}
      </div>
    </div>
  );
};
