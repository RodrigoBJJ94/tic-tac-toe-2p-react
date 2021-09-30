import React from 'react';

export default function PlayAgain(props) {
    return (
        <button onClick={() => props.restart()}>Play Again</button>
    );
};