import { Component } from "react";
import s from "./Searchbar.module.css";

export default class Searchbar extends Component {
  state = {
    value: "",
  };

  handleNameChange = (event) => {
    this.setState({ value: event.target.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.value.trim() === "") {
      return;
    }

    this.props.changeQuery(this.state.value);
    this.setState({ value: "" });
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <span className={s.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            value={this.state.value}
            placeholder="Search images and photos"
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
