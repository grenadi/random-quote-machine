import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const Text = ({ text }) => {
    return (
        <p id="text" className="Text">
            <FaQuoteLeft /> {text}
        </p>
    );
}

export default Text;