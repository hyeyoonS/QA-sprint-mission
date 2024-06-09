import "./SearchBar.css";
import searchIcon from "../../assets/svg/search-icon.svg";

export default function SearchBar() {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <fieldset className="search_wrapper">
        <img src={searchIcon} alt="검색 아이콘" />
        <label className="a11y" htmlFor="searchInput"></label>
        <input
          id="searchInput"
          className="search_input"
          type="text"
          placeholder="검색할 상품을 입력해주세요."
          aria-label="검색어를 입력하는 입력 요소입니다."
          onChange={(e) => {}}
        />
      </fieldset>
    </form>
  );
}
