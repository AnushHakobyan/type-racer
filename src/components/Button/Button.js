import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.scss';

const Button = ({ label, onClick, url, type }) => {
  switch (type) {
    case 'button':
      return <button className={styles.buttonBody} onClick={onClick}>{label}</button>;
    case 'internalLink':
      return <Link className={styles.buttonBody} to={url}>{label}</Link>;
    default:
      throw new Error('Unsupported Type');
  }
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'internalLink']),
};

Button.defaultProps = {
  type: 'button',
};

export default Button;
