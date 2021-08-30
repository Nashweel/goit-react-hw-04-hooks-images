import { useState } from "react";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import s from "./Searchbar.module.css";

export default function Searchbar({ changeQuery }) {
  const [query, setQuery] = useState("");

  const handleNameChange = (event) =>
    setQuery(event.currentTarget.value.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (query.trim() === "") {
      toast.warning(
        "You have not entered anything in the search bar, please enter a search term",
        {
          position: "top-center",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }

    changeQuery(query);
    setQuery("");
  };

  return (
    <header className={s.Searchbar}>
      <form className={s.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={s.SearchFormButton}>
          <span className={s.SearchFormButtonLabel}>Search</span>
        </button>

        <input
          className={s.SearchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          value={query}
          placeholder="Search images and photos"
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  changeQuery: PropTypes.func.isRequired,
};
