import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <ImageGalleryItem
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
            id={id}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ImageGallery;
