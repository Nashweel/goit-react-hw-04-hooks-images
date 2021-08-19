import "./App.css";
import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery";
import fetchImage from "./services/pixabay-api";
import SearchBar from "./components/Searchbar";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Spinner from "./components/Loader";

class App extends Component {
  state = {
    searchQuery: "",
    currentPage: 1,
    images: [],
    isLoading: false,
    showModal: false,
    modalImg: "",
    modalAlt: "",
    error: null,
    found: true,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page > 2) {
      const { scrollTop, clientHeight } = document.documentElement;
      window.scrollTo({
        top: scrollTop + clientHeight - 165,
        behavior: "smooth",
      });
    }
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = (query) => {
    this.setState({
      searchQuery: query,
      currentPage: 1,
      images: [],
    });
  };

  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;

    this.setState({ isLoading: true });

    fetchImage(currentPage, searchQuery)
      .then((images) => {
        if (images.length === 0) {
          this.setState({ found: false });
        } else {
          this.setState((prevState) => ({
            images: [...prevState.images, ...images],
            currentPage: prevState.currentPage + 1,
            found: true,
          }));
        }
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ isLoading: false }));
    if (currentPage > 1) {
      const { scrollHeight } = document.documentElement;
      window.scrollTo({
        top: scrollHeight,
        behavior: "smooth",
      });
    }
  };

  scrollWindow() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  openModal = (url, alt) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: url,
      modalAlt: alt,
    }));
  };

  closeModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
      modalImg: "",
      modalAlt: "",
    }));
  };

  render() {
    const { error, images, isLoading, showModal, modalImg, modalAlt, found } =
      this.state;
    // const shouldRenderLoadMoreButton = images.length > 0 && !isLoading && found;

    return (
      <>
        <SearchBar changeQuery={this.onChangeQuery} />
        {(error || !found) && !images.length && (
          <h1 style={{ color: "#ff0000", textAlign: "center" }}>
            Ooops! Something going wrong...
          </h1>
        )}
        <ImageGallery images={images} openModal={this.openModal} />
        {isLoading && <Spinner />}
        {images.length > 0 && !isLoading && found && (
          <Button onClick={this.fetchImages} />
        )}
        {showModal && (
          <Modal closeModal={this.closeModal}>
            <img src={modalImg} alt={modalAlt} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
