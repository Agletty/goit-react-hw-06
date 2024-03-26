import css from "./SearchBox.module.css";

const SearchBox = ({ searchValue, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className={css.searchName}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={searchValue}
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default SearchBox;
