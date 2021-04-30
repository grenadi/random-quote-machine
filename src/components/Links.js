import React from 'react';
import { FaTwitter } from 'react-icons/fa';

const Link = ({ children, ...props }) => {
    return (
        <a {...props} className="Link" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    );
}

const Links = ({ text, author }) => {
    const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        `"${text}" - ${author}`
    )}&hashtags=quotes`;
    return (
        <div className="Links">
            <Link href={twitterLink} id="tweet-quote">
                <FaTwitter className="icon" />
            </Link>
        </div>
    );
}

export default Links