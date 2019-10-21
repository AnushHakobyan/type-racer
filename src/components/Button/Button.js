import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Button.scss';

const Button = ({ label, onClick, url, actionType, variant, type }) => {
  switch (actionType) {
    case 'button':
      return <button className={classNames(styles.buttonBody, styles[variant], styles[type])} onClick={onClick}>{label}</button>;
    case 'internalLink':
      return <Link className={classNames(styles.buttonBody, styles[variant], styles[type])} to={url}>{label}</Link>;
    default:
      throw new Error('Unsupported Action Type');
  }
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  actionType: PropTypes.oneOf(['button', 'internalLink']),
  variant: PropTypes.oneOf(['contained', 'outlined']),
  type: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
  actionType: 'button',
  variant: 'contained',
  type: 'primary',
};

export default Button;
