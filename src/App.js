import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [game, setGame] = useState([['', '', ''], ['', '', ''], ['', '', '']]);
  const [symbolTurn, setSymbolTurn] = useState('X');
  const [playing, setPlaying] = useState(true);

  const gameStart = [['', '', ''], ['', '', ''], ['', '', '']];

  const board = (gm) => {
    return (
      <div className="board">
        <div className="board-line">
          <div className="square" data-pos="00" onClick={(element) => play(element)}>{gm[0][0]}</div>
          <div className="square" data-pos="01" onClick={(element) => play(element)}>{gm[0][1]}</div>
          <div className="square" data-pos="02" onClick={(element) => play(element)}>{gm[0][2]}</div>
        </div>
        <div className="board-line">
          <div className="square" data-pos="10" onClick={(element) => play(element)}>{gm[1][0]}</div>
          <div className="square" data-pos="11" onClick={(element) => play(element)}>{gm[1][1]}</div>
          <div className="square" data-pos="12" onClick={(element) => play(element)}>{gm[1][2]}</div>
        </div>
        <div className="board-line">
          <div className="square" data-pos="20" onClick={(element) => play(element)}>{gm[2][0]}</div>
          <div className="square" data-pos="21" onClick={(element) => play(element)}>{gm[2][1]}</div>
          <div className="square" data-pos="22" onClick={(element) => play(element)}>{gm[2][2]}</div>
        </div>
      </div>
    );
  };

  const playAgain = () => {
    if (!playing) {
      return <button onClick={() => restart()}>Play Again</button>
    };
  };

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
          alert(`Player ${symbolTurn} win!`);
          setPlaying(false);
        }
      } else {
        alert('This square is not empty!');
      }
    }
  }

  const restart = () => {
    setPlaying(true);
    setGame(gameStart);
    setSymbolTurn('X');
  };

  return (
    <div>
      <div className="div-who-is-play">
        <p className="who-is-play">Who's Play: {symbolTurn}</p>
      </div>
      <div className="game">
        {board(game)}
      </div>
      <div className="play-again">
        {playAgain()}
      </div>
    </div>
  );
};