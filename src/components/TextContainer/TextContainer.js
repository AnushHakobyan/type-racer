import React from 'react';
import PropTypes from 'prop-types';

const TextContainer = ({ text }) => (
    <p>{text}</p>
);

TextContainer.propTypes = {
    text: PropTypes.string.isRequired,
};

export default TextContainer;
