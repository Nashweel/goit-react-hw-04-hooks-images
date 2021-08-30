import React, { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ImageGallery from "./components/ImageGallery";
import SearchBar from "./components/Searchbar";
import Modal from "./components/Modal";
import Button from "./components/Button";
import Spinner from "./components/Loader";
import fetchPixabayImage from "./services/pixabay-api";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [error, setError] = useState(null);

  const firstRenderRef = useRef(true);

  const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

  const onChangeQuery = (query) => {
    if (searchQuery !== query) {
      setSearchQuery(query);
      setCurrentPage(1);
      setImages([]);
      setError(null);
    }
  };

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    setIsLoading(true);

    async function fetchImage() {
      try {
        setIsLoading(true);
        setSearchQuery(searchQuery);
        const img = await fetchPixabayImage(searchQuery, currentPage);
        setImages((prevState) => [...prevState, ...img.data.hits]);
        setIsLoading(false);

        if (images.length > 0) {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: "smooth",
          });
        }
      } catch (error) {
        setError(error.response.status);
        setIsLoading(false);
      }
    }
    fetchImage();
  }, [searchQuery, currentPage]);

  const nextPage = () => {
    setCurrentPage((prevState) => prevState + 1);
  };

  const toggleModal = () => {
    setShowModal((showModal) => !showModal);
  };

  const handleImgClick = (largeImageURL) => {
    setModalImg(largeImageURL);
    toggleModal();
    console.log(largeImageURL);
  };

  return (
    <>
      <SearchBar changeQuery={onChangeQuery} />
      <ToastContainer position="top-right" autoClose={4000} />
      {error && (
        <h1 style={{ color: "#ff0000", textAlign: "center" }}>
          Ooops! Something going wrong...{error}
        </h1>
      )}
      <ImageGallery images={images} openModal={handleImgClick} />
      {isLoading && <Spinner />}
      {shouldRenderLoadMoreButton && <Button onClick={nextPage} />}
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt="" />
        </Modal>
      )}
    </>
  );
}
