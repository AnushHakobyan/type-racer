import React from 'react';
import Surface from '../Surface/Surface';
import Button from '../Button/Button';
import routes from '../../configs/routes';

const AppDynamicContent = () => (
    <Surface className="col-md-8">
        <Button label="Log In" type="internalLink" url={routes.login} />
        <Button label="Continue as a Guest" type="internalLink" url={routes._app.guest} />
    </Surface>
);

export default AppDynamicContent;
