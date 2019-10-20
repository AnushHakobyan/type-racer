import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './Heading.scss';

const Heading = ({ text, className, type }) => {
    const headingClassname = styles[`${type}Heading`];
    const HeadingTag = type;
    return (
        <HeadingTag
            className={classNames('text-secondary-color-dark', headingClassname, className)}
        >
            {text}
        </HeadingTag>
    );
};

Heading.propTypes = {
    text: PropTypes.string.isRequired,
    classNames: PropTypes.string,
    type: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
};

Heading.defaultProps = {
    classNames: '',
};

export default Heading;
