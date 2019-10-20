import React from 'react';
import ScoresListItem from './ScoresListItem';

const scores = [
    {
        id: 1,
        name: 'John Smith',
        scoreNumber: 123,
    },
    {
        id: 2,
        name: 'Jane Smith',
        scoreNumber: 125,
    },
];

const ScoresList = (/* { scores } */) => (
    <ul>
        {scores.map(({ id, ...score }) => <ScoresListItem key={id} {...score} />)}
    </ul>
);

export default ScoresList;
