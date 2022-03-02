import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { Button, Figure, Twitter } from "./CssComponents";

export const QuoteBox = () => {
  const { quotes, changeQuote, color } = useContext(AppContext);
  const { quote, author } = quotes;

  return (
    <div id="quote-box">
      <Figure color={color}>
        <blockquote id="text" cite="url-cualquiera">
          {quote}
        </blockquote>
        <figcaption id="author">{`- ${author}`}</figcaption>
      </Figure>
      <div className="container-button">
        <a
          href="http://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          <Twitter color={color} />
        </a>
        <Button id="new-quote" color={color} onClick={changeQuote}>
          New quote
        </Button>
      </div>
    </div>
  );
};
