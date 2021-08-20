import { useState } from "react";
import s from "./Searchbar.module.css";

export default function Searchbar({ changeQuery }) {
  const [value, setValue] = useState("");

  const handleNameChange = (event) =>
    setValue(event.currentTarget.value.toLowerCase());

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      return;
    }

    changeQuery(value);
    setValue("");
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
          value={value}
          placeholder="Search images and photos"
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
