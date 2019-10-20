import React from 'react';
import classNames from 'classnames';
import Logo from '../Logo/Logo';
import Heading from '../Heading/Heading';
import styles from './Header.scss';

const Header = () => (
    <header className={classNames('main-background-dark-color', styles.header)}>
        <Logo />
        <div className={styles.slogan}>
            <Heading text="Challenge Yourself" type="h1" />
            <Heading text="Type Better Than Yesterday" type="h4" />
        </div>
    </header>
);

export default Header;
