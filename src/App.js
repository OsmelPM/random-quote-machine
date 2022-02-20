import { QuoteBox } from "./components/QuoteBox";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Message from "./components/Message";

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const initialQuote = {
  quote: "",
  author: "",
};

export const App = () => {
  const [quotes, setQuotes] = useState(initialQuote);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const random = () => Math.floor(Math.random() * 101);
  const [nextQuote, setNextQuote] = useState(random());

  useEffect(() => {
    setLoading(true);

    const getData = async (url) => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          const error = new Error(
            "Sorry. Bad conection with server. Tray again later"
          );
          error.status = response.status;
          error.statusText = response.statusText || "Bad conection";
          throw error;
        }

        const quotesList = await response.json();
        //console.log(quotesList.quotes);
        setQuotes({
          author: quotesList.quotes[nextQuote].author,
          quote: quotesList.quotes[nextQuote].quote,
        });

        setError(null);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData(url);
  }, [nextQuote]);

  const changeQuote = () => {
    setNextQuote(random());
  };

  return (
    <div id="container">
      {loading ? (
        <Loader />
      ) : error ? (
        <Message msg={error.message} bgColor="red" />
      ) : (
        <QuoteBox quotes={quotes} changeQuote={changeQuote} />
      )}
    </div>
  );
};
