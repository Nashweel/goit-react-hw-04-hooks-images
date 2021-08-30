import React from "react";
import PropTypes from "prop-types";
import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, url, openModal, largeImageURL }) => {
  return (
    <li className={s.ImageGalleryItem} key={id}>
      <img
        src={url}
        alt=""
        className={s.ImageGalleryItem_image}
        onClick={() => openModal(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
