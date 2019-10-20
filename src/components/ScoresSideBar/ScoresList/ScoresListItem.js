import React from 'react';

const ScoresListItem = ({ scoreNumber, name }) => (
    <li>
        <p>{name}</p>
        <span>{scoreNumber}</span>
    </li>
);

export default ScoresListItem;
