import React, { useState, useEffect } from 'react';
import { random } from 'lodash';

import Author from '../components/Author';
import BottomRow from '../components/BottomRow';
import Links from '../components/Links';
import NewQuoteButton from '../components/NewQuoteButton';
import Text from '../components/Text';

const url = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteBox = ({ onNewQuoteClick }) => {
    const [quotedText, setQuotedText] = useState('');
    const [authorName, setAuthorName] = useState('');

    useEffect(() => {
        fetchRandomQuote();
    }, []);

    const fetchRandomQuote = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const quotes = data.quotes;

                const randomNum = random(0, quotes.length);
                const randomQuote = quotes[randomNum];

                setAuthorName(randomQuote.author);
                setQuotedText(randomQuote.quote);
            })
            .catch((error) => console.log(error));
    };

    const handleNewQuoteClick = () => {
        onNewQuoteClick();
        fetchRandomQuote();
    }

    return (
        <div id="quote-box" className="QuoteBox">
            <Text text={quotedText} />
            <Author name={authorName} />
            <BottomRow>
                <Links text={quotedText} author={authorName} />
                <NewQuoteButton onClick={handleNewQuoteClick} />
            </BottomRow>
        </div>
    );
}

export default QuoteBox;