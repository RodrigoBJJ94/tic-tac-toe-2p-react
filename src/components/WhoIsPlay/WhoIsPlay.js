import React from 'react';

export default function WhoIsPlay(props) {
    return (
        <div className="div-who-is-play">
            <p className="who-is-play">Who's Play: {props.symbolTurn}</p>
        </div>
    );
};