// import "./App.css";
import { useEffect, useState, useCallback } from "react";
import Nav from "./components/Nav";
import CardList from "components/CardList";
import getProducts from "utils/api";
import CardGeneral from "components/cardGeneral/CardGeneralTitle";

function App() {
  const [cards, setCards] = useState([]);

  const fetchCards = useCallback(async () => {
    try {
      const productsList = await getProducts("/products");
      setCards(productsList.list);
      console.log(productsList.list);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  useEffect(() => {
    fetchCards();
  }, [fetchCards]);

  return (
    <div>
      <Nav />
      <CardGeneral cards={cards} />
    </div>
  );
}

export default App;
