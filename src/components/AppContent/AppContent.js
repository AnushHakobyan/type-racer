import React from 'react';
import ScoresSideBar from '../ScoresSideBar/ScoresSideBar';
import Routers from '../Routers';

const AppContent = () => (
    <div className="row">
        <ScoresSideBar className="col-md-4" />
        <Routers />
    </div>
);

export default AppContent;
