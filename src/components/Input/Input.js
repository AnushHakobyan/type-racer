import React from 'react';
import styles from './Input.scss';

const Input = ({ onChange, onKeyPress, name, placeHolder }) => (
    <input
        type="text"
        name={name}
        placeholder={placeHolder}
        onChange={onChange}
        onKeyPress={onKeyPress}
        className={styles.textInput}
    />
);

export default Input;
