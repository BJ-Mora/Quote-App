import { useSelector, useDispatch } from 'react-redux';
import { setNewQuote } from '../features/quotes/quotesSlice';
import { setNewColor } from '../features/colors/colorsSlice';
import { useEffect } from 'react';

const QuoteBox = () => {
    const { text, author } = useSelector((state) => state.quotes.currentQuote);
    const { color } = useSelector((state) => state.colors.currentColor);
    const dispatch = useDispatch();

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://dummyjson.com/quotes/random');
            if (!response.ok) {
                throw new Error('Failed to fetch a quote');
            }
            const data = await response.json();
            dispatch(setNewQuote({ text: data.quote, author: data.author }));
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    }

    const fetchColor = async () => {
        try {
            const response = await fetch('https://x-colors.yurace.pro/api/random');
            if (!response.ok) {
                throw new Error('Failed to fetch a color');
            }
            const data = await response.json();
            dispatch(setNewColor({ color: data.hex }));
        } catch (error) {
            console.log('Error fetching color:', error);
        }
    }

    useEffect(() => {
        document.body.style.backgroundColor = color;
        document.body.style.transition = 'background-color 1000ms ease-in-out';
    }, [color]);

    const fontStyle = {
        color: color,
        transition: 'color 1000ms ease-in-out',
    };

    const bgStyle = {
        backgroundColor: color,
        transition: 'background-color 1000ms ease-in-out'
    };

    return (
        <div id="quote-box" className='quote-box p-4 mw-50'>
            <p id="text" className='quote-text' style={fontStyle}>&quot;{text}&quot;</p>
            {author && <p id="author" className='author' style={fontStyle}>- {author}</p>}
            <div className='button-container'>
                <a
                    id="tweet-quote"
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${text}" - ${author}`)}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='tweet-quote-btn'
                    style={fontStyle}
                >
                    Tweet
                </a>
                <button id="new-quote" onClick={() => {fetchQuote(), fetchColor()}} className='new-quote-btn' style={bgStyle}>New quote</button>
            </div>
        </div>
    );
};

export default QuoteBox;

