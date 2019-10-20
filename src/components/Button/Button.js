import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.scss';

const Button = ({ label, onClick }) => (
    <button className={styles.buttonBody} onClick={onClick}>{label}</button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
