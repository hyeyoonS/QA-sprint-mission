import React from "react";
import "./CardGeneral.css";
import CardList from "components/CardList";
import SearchBar from "components/searchBar/SearchBar";

const CardGeneral = ({ cards }) => {
  return (
    <section className="section_container">
      <div className="title_bar">
        <p className="title">판매 중인 상품 </p>
        <SearchBar />
      </div>
      <CardList cards={cards} />
    </section>
  );
};

export default CardGeneral;
