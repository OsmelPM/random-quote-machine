import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

const initialQuote = {
  quote: "",
  author: "",
};

export const AppProvider = ({ children }) => {
  const [quotes, setQuotes] = useState(initialQuote);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const random = () => Math.floor(Math.random() * 101);
  const [nextQuote, setNextQuote] = useState(random());
  const [color, setColor] = useState("gray");

  const changeColor = () => {
    const idx = Math.floor(Math.random() * 5);
    const styledList = [
      "coral",
      "crimson",
      "darkslateblue",
      "deeppink",
      "mediumpurple",
    ];

    return styledList[idx];
  };

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const getData = async (url) => {
      setLoading(true);

      try {
        const response = await fetch(url, { signal });

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
        if (!signal.aborted) {
          setQuotes({
            author: quotesList.quotes[nextQuote].author,
            quote: quotesList.quotes[nextQuote].quote,
          });

          setError(null);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    //console.table(signal);
    getData(url);
    //verificar el uso de AbortController para detener la solicitud dado un perido de tiempo determinado
    return setTimeout(() => {
      controller.abort();
    }, 5000);
  }, [nextQuote]);

  const changeQuote = () => {
    setNextQuote(random());
    setColor(changeColor);
  };

  return (
    <AppContext.Provider value={{ loading, error, quotes, changeQuote, color }}>
      {children}
    </AppContext.Provider>
  );
};
