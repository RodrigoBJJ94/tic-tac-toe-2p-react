import React from 'react';

export default function Board({ play, game }) {
    return (
        <div className="board">
            <div className="board-line">
                <div className="square" data-pos="00" onClick={(e) => play(e)}>{game[0][0]}</div>
                <div className="square" data-pos="01" onClick={(e) => play(e)}>{game[0][1]}</div>
                <div className="square" data-pos="02" onClick={(e) => play(e)}>{game[0][2]}</div>
            </div>
            <div className="board-line">
                <div className="square" data-pos="10" onClick={(e) => play(e)}>{game[1][0]}</div>
                <div className="square" data-pos="11" onClick={(e) => play(e)}>{game[1][1]}</div>
                <div className="square" data-pos="12" onClick={(e) => play(e)}>{game[1][2]}</div>
            </div>
            <div className="board-line">
                <div className="square" data-pos="20" onClick={(e) => play(e)}>{game[2][0]}</div>
                <div className="square" data-pos="21" onClick={(e) => play(e)}>{game[2][1]}</div>
                <div className="square" data-pos="22" onClick={(e) => play(e)}>{game[2][2]}</div>
            </div>
        </div>
    );
};
