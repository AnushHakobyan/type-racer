import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Header from '../Header';
import AppContent from '../AppContent';
import '../../resources/styles/main.scss';
import 'flexboxgrid';

const history = createBrowserHistory();

const App = () => (
    <Router history={history}>
        <div className="secondary-background-color-light full-height">
            <Header />
            <AppContent />
        </div>
    </Router>
);

export default App;
