import React from 'react';

export default function PlayAgain({ setPlaying, setGame, setSymbolTurn }) {
    const gameStart = [['', '', ''], ['', '', ''], ['', '', '']];

    const restart = () => {
        setPlaying(true);
        setGame(gameStart);
        setSymbolTurn('X');
    };

    return (
        <button onClick={() => restart()}>Play Again</button>
    );
};
