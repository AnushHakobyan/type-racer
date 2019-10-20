import React from 'react';
import Surface from '../Surface/Surface';
import ScoresList from './ScoresList/ScoresList';
import styles from './ScoresSideBar';

const ScoresSideBar = ({ className }) => (
    <Surface className={className}>
        <ScoresList />
    </Surface>
);

export default ScoresSideBar;
