import React from 'react';
import ScoresSideBar from '../ScoresSideBar/ScoresSideBar';
import Surface from '../Surface/Surface';
import Button from '../Button/Button';

const AppContent = () => (
    <div className="row">
        <ScoresSideBar className="col-md-4" />
        <Surface className="col-md-8">
            <Button label="Log In" />
            <Button label="Continue as a Guest"/>
        </Surface>
    </div>
);

export default AppContent;
