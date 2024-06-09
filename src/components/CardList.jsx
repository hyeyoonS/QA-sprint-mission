import Cards from "./Cards";
import "./CardList.css";

export default function CardList({ cards }) {
  return (
    <div className="card_list">
      {cards.map((cards) => (
        <Cards value={cards} key={cards.id} />
      ))}
    </div>
  );
}
