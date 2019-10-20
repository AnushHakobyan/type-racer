import React from 'react';
import Header from '../Header';
import AppContent from '../AppContent';
import '../../resources/styles/main.scss';
import 'flexboxgrid';

const App = () => (
    <div className="secondary-background-color full-height">
        <Header />
        <AppContent />
    </div>
);

export default App;
