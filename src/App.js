import { QuoteBox } from "./components/QuoteBox";
import { useState, useEffect } from "react";
const url =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

// const getData = fetch(url)
//   .then((res) => res.json())
//   .then((json) => console.log(json));

const initialState = {
  quote: "",
  author: "",
};

export const App = () => {
  const [quotes, setQuotes] = useState(initialState);
  useEffect(() => {
    const getData = async (url) => {
      const res = await fetch(url);
      const json = await res.json();
      setQuotes({
        author: json.quotes[0].author,
        quote: json.quotes[0].quote,
      });
    };
    getData(url);
  }, []);
  console.log(quotes);
  return (
    <div id="container">
      <QuoteBox quotes={quotes} />
    </div>
  );
};
