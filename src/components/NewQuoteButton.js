import React from 'react';
import Button from './Button';

const NewQuoteButton = ({ onClick }) => {
    return (
        <Button id="new-quote" onClick={onClick} className="NewQuoteButton">New Quote</Button>
    );
}

export default NewQuoteButton;