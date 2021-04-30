import React from 'react';

const Author = ({ name }) => {
    return (
        <span id="author" className="Author">
            &mdash; {name}
        </span>
    );
}

export default Author;