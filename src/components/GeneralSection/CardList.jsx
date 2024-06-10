import React from "react";
import "./CardList.css";
import Cards from "./Cards";

const CardList = ({ cards, sortOption }) => {
  const sortedCards = [...cards].sort((a, b) => {
    if (sortOption === "최신순") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else if (sortOption === "좋아요순") {
      return b.favoriteCount - a.favoriteCount;
    }
    return 0;
  });

  return (
    <div className="card_list">
      {sortedCards.map((card) => (
        <Cards value={card} key={card.id} />
      ))}
    </div>
  );
};

export default CardList;
