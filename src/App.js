import { QuoteBox } from "./components/QuoteBox";
import Loader from "./components/Loader";
import Message from "./components/Message";
import { useContext } from "react";
import { AppContext } from "./components/context/AppContext";
import { Container } from "./components/CssComponents";

export const App = () => {
  const { loading, error, color } = useContext(AppContext);

  return (
    <Container color={color}>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message msg={error.message} bgColor="red" />
      ) : (
        <QuoteBox />
      )}
    </Container>
  );
};
