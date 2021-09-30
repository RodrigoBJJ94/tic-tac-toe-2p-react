import React from 'react';

export default function Board(props) {
    return (
        <div className="board">
            <div className="board-line">
                <div className="square" data-pos="00" onClick={(element) => props.play(element)}>{props.gm[0][0]}</div>
                <div className="square" data-pos="01" onClick={(element) => props.play(element)}>{props.gm[0][1]}</div>
                <div className="square" data-pos="02" onClick={(element) => props.play(element)}>{props.gm[0][2]}</div>
            </div>
            <div className="board-line">
                <div className="square" data-pos="10" onClick={(element) => props.play(element)}>{props.gm[1][0]}</div>
                <div className="square" data-pos="11" onClick={(element) => props.play(element)}>{props.gm[1][1]}</div>
                <div className="square" data-pos="12" onClick={(element) => props.play(element)}>{props.gm[1][2]}</div>
            </div>
            <div className="board-line">
                <div className="square" data-pos="20" onClick={(element) => props.play(element)}>{props.gm[2][0]}</div>
                <div className="square" data-pos="21" onClick={(element) => props.play(element)}>{props.gm[2][1]}</div>
                <div className="square" data-pos="22" onClick={(element) => props.play(element)}>{props.gm[2][2]}</div>
            </div>
        </div>
    );
};