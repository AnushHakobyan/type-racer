import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Surface from '../Surface/Surface';
import Button from '../Button/Button';
import routes from '../../configs/routes';
import TypeRacer from '../TypeRacer';

const AppDynamicContent = () => (
    <>
        <Surface>
            <div className="row center-md">
            <div className="col-md-3">
                <Button
                    label="Log In"
                    actionType="internalLink"
                    url={routes.login}
                    type="primary"
                    variant="contained"
        
                />
            </div>
        </div>
            <div className="row center-md">
                <div className="col-md-3">
                    <Button
                        label="Continue as a Guest"
                        actionType="internalLink"
                        url={routes._app.guest}
                        variant="outlined"
                    />
                </div>
            </div>
        </Surface>
        <Surface>
            <Switch>
                <Route path={routes._app.guest} component={TypeRacer} />
            </Switch>
        </Surface>
    </>
);

export default AppDynamicContent;
