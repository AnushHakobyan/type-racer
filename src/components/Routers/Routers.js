import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from '../../configs/routes';
import AppDynamicContnet from '../AppDynamicContnet';
import Login from '../Login';

const Routers = () => (
    <Switch>
        <Route path={routes.app} component={AppDynamicContnet} />
        <Route path={routes.login} component={Login} />
    </Switch>
);

export default Routers;
