import React, { useState } from "react";
import quotes from "../utilities/quotes";

function Quote() {
  const [currentQuote, setCurrentQuote] = useState(null);

  function handleClick() {
    let randomQuoteIndex;

    if (currentQuote) {
      let quoteIsCurrent = true;

      while (quoteIsCurrent) {
        randomQuoteIndex = Math.floor(Math.random() * quotes.length);
        quoteIsCurrent = quotes[randomQuoteIndex] === currentQuote;
      }
    } else {
      randomQuoteIndex = Math.floor(Math.random() * quotes.length);
    }

    setCurrentQuote(quotes[randomQuoteIndex]);
  }

  return (
    <div>
      {!currentQuote ? (
        <p>Click the button to get a quote.</p>
      ) : (
        <blockquote>
          <p>{currentQuote.quote}</p>
          <footer>{currentQuote.author}</footer>
        </blockquote>
      )}
      <button onClick={handleClick}>
        {!currentQuote ? "Get Quote" : "Get Another Quote"}
      </button>
    </div>
  );
}

export default Quote;
