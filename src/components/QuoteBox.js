export const QuoteBox = ({ quotes }) => {
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
          Twitter
        </a>
        <button id="new-quote">New quote</button>
      </div>
    </div>
  );
};
