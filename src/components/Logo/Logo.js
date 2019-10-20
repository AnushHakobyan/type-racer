import React from 'react';
import logo from '../../resources/images/logo.png';
import styles from './Logo.scss';

const Logo = () => (
    <a className={styles.container}><img className={styles.sizes} src={logo} /></a>
);

export default Logo;
