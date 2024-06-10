// import "./App.css";
import { useEffect, useState, useCallback } from "react";
import Nav from "./components/Nav";
import { getProducts, getBestProducts } from "utils/api";
import GeneralSection from "components/GeneralSection/GeneralSection";
import BestSection from "components/BestSection/BestSection";
import Footer from "components/Footer";

function App() {
  const [cards, setCards] = useState([]);
  const [bestCards, setBestCards] = useState([]);

  const fetchCards = useCallback(async () => {
    try {
      const productsList = await getProducts("/products");
      setCards(productsList.list);
      console.log(productsList.list);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  const fetchBestCards = useCallback(async () => {
    try {
      const BestList = await getBestProducts("/products");
      setBestCards(BestList.list);
      console.log(BestList.list);
    } catch (error) {
      console.error("Failed to fetch products:", error);
    }
  }, []);

  useEffect(() => {
    fetchCards();
    fetchBestCards();
  }, [fetchCards, fetchBestCards]);

  return (
    <div>
      <Nav />
      <BestSection bestCards={bestCards} />
      <GeneralSection cards={cards} />
      <Footer />
    </div>
  );
}

export default App;
