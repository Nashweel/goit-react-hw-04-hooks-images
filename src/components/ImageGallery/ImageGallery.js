import React from "react";
import ImageGalleryItem from "../ImageGalleryItem";
import PropTypes from "prop-types";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, tags, largeImageURL }) => {
        return (
          <li
            className={s.ImageGalleryItem}
            key={id}
            onClick={() => {
              openModal(largeImageURL, tags);
            }}
          >
            <ImageGalleryItem url={webformatURL} alt={tags} />
          </li>
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ImageGallery;
