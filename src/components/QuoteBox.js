import { FaTwitterSquare } from "react-icons/fa";

export const QuoteBox = ({ quotes, changeQuote }) => {
  const { quote, author } = quotes;
  return (
    <div id="quote-box">
      <figure>
        <blockquote id="text" cite="url-cualquiera">
          {quote}
        </blockquote>
        <figcaption id="author">{`- ${author}`}</figcaption>
      </figure>
      <div className="container-button">
        <a
          href="http://twitter.com/intent/tweet"
          id="tweet-quote"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitterSquare style={{ fontSize: "40px", color: "coral" }} />
        </a>
        <button
          className="css-button-gradient--2"
          id="new-quote"
          onClick={changeQuote}
        >
          New quote
        </button>
      </div>
    </div>
  );
};
