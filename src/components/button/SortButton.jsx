import React, { useState } from "react";
import "./SortButton.css";
import arrowIcon from "../../assets/svg/arrow-down-icon.svg";

const SortButton = ({ children = "최신순", onSortChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
    setIsDropdownOpen(false);
  };

  return (
    <div className="sort-button-container">
      <button className="sort_btn" onClick={toggleDropdown}>
        <span>{children}</span>
        <img src={arrowIcon} alt="화살표 아이콘" width="16" height="16" />
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu">
          <li
            className="dropdown-top"
            onClick={() => handleSortChange("최신순")}
          >
            최신순
          </li>
          <li
            className="dropdown-bottom"
            onClick={() => handleSortChange("좋아요순")}
          >
            좋아요순
          </li>
        </ul>
      )}
    </div>
  );
};

export default SortButton;
