import React from 'react';
import ScoresSideBar from '../ScoresSideBar/ScoresSideBar';
import Routers from '../Routers';
import AppDynamicContent from '../AppDynamicContnet/AppDynamicContent';

const AppContent = () => (
    <div className="row">
        <ScoresSideBar className="col-md-4" />
        <AppDynamicContent/>
        <Routers />
    </div>
);

export default AppContent;
