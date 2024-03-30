import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
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
