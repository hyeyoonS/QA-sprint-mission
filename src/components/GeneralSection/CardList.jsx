import React, { useEffect, useCallback } from "react";
import "./CardList.css";
import Cards from "./Cards";
import usePagination from "hooks/usePagination";
import useWindowSize from "hooks/useWindowSize";

const CardList = ({ cards, sortOption, isSearchedToggle }) => {
  const sortedCards = [...cards].sort((a, b) => {
    if (sortOption === "최신순") {
      return new Date(b.updatedAt) - new Date(a.updatedAt);
    } else if (sortOption === "좋아요순") {
      return b.favoriteCount - a.favoriteCount;
    }
    return 0;
  });

  const { width } = useWindowSize();

  const itemsPerPage = () => {
    if (width <= 767) {
      return 4; // Mobile
    } else if (width <= 1199) {
      return 6; // Tablet
    } else {
      return 10; // PC
    }
  };

  const {
    currentData,
    currentPage,
    maxPage,
    nextPage,
    prevPage,
    jumpToPage,
    updateItemsPerPage,
    goToFirstPage,
  } = usePagination(sortedCards, itemsPerPage());

  useEffect(() => {
    goToFirstPage();
  }, [isSearchedToggle]);

  // useEffect(() => {
  //   const handleResize = () => {
  //     updateItemsPerPage(itemsPerPage());
  //   };

  //   window.addEventListener("resize", handleResize);
  //   // goToFirstPage();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, [updateItemsPerPage, itemsPerPage]);

  useEffect(() => {
    updateItemsPerPage(itemsPerPage());
  }, [width]);

  return (
    <div>
      <div className="card_list">
        {currentData().map((card) => (
          <Cards value={card} key={card.id} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={prevPage} disabled={currentPage === 1}>
          이전
        </button>
        {Array.from({ length: maxPage }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => jumpToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
        <button onClick={nextPage} disabled={currentPage === maxPage}>
          다음
        </button>
      </div>
    </div>
  );
};

export default CardList;
