import React from 'react';
import ScoresSideBar from '../ScoresSideBar/ScoresSideBar';
import Routers from '../Routers';
import AppDynamicContent from '../AppDynamicContnet/AppDynamicContent';

const AppContent = () => (
    <div className="container-fluid">
        <div className="row">
            <div className="col-md-4">
                <ScoresSideBar className="box-row" />
            </div>
            <div className="col-md-8">
                <div className="box-row">
                    <AppDynamicContent />
                    <Routers />
                </div>
            </div>
        </div>
    </div>
);

export default AppContent;
