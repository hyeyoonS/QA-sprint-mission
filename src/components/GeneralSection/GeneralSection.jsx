import React from "react";
import "./GeneralSection.css";
import CardList from "components/GeneralSection/CardList";
import SearchBar from "components/searchBar/SearchBar";
import Button from "components/button/Button";
import SortButton from "components/button/SortButton";
import { useState } from "react";

const GeneralSection = ({ cards }) => {
  const [sortOption, setSortOption] = useState("최신순");

  const handleSortChange = (option) => {
    setSortOption(option);
  };

  return (
    <section className="section_container">
      <div className="title_bar">
        <p className="title">판매 중인 상품</p>
        <div className="title_contents">
          <SearchBar />
          <Button color="blue">상품 등록하기</Button>
          <SortButton onSortChange={handleSortChange}>{sortOption}</SortButton>
        </div>
      </div>
      <CardList cards={cards} sortOption={sortOption} />
    </section>
  );
};

export default GeneralSection;
