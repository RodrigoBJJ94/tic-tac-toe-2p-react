import React from 'react';
import './Styles.css';

export default function PlayAgain({ setPlaying, setGame, setSymbolTurn, playing }) {
    const gameStart = [['', '', ''], ['', '', ''], ['', '', '']];

    const restart = () => {
        setPlaying(true);
        setGame(gameStart);
        setSymbolTurn('X');
    };

    return (
        <div className="play-again">
            <button onClick={() => restart()}>Play Again</button>
        </div>
    );
};
