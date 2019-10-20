import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import routes from '../../configs/routes';
import AppDynamicContnet from '../AppDynamicContnet';
import Login from '../Login';
import TypeRacer from '../TypeRacer';

const Routers = () => (
    <Router>
        <Switch>
            <Route path={routes.basename} component={AppDynamicContnet} />
            <Route path={routes.login} component={Login} />
            <Route path={routes._app.guest} component={TypeRacer} />
        </Switch>
    </Router>
);

export default Routers;
