import { useState } from 'react'; 
 
const RandomQuote = () => {
    const quotes = [
        "Keep pushing!",
        "Tomorrow is a New Day!",
        "Celebrate the little wins!",
        "Coding is a Journey!",
        "Take one step at a time",
        "Look at the Big Picture!",
        "Rome wasn't built in a day....",
        "All you can do is TRY!"
    ];
 
    const [quote, setQuote] = useState('')
 
    const displayRandomQuote = () => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[randomIndex]);
    };
 
    return (
        <div className="quoteContainer">
            <h1>Embrace the Journey</h1>
            <p className="quoteText">{quote || "Click here for mindful moments"}</p>
            <button onClick={displayRandomQuote}>New Quote</button>
        </div>
    );
};
 
export default RandomQuote;