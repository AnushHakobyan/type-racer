import React from 'react';
import classNames from 'classnames';
import styles from './Surface.scss';

const Surface = ({ children, className }) => (
    <div className={classNames('surface-color', styles.surface, className)}>{children}</div>
);

export default Surface;
