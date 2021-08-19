import React, { Component } from "react";
import PropTypes from "prop-types";
import s from "./Modal.module.css";
export default class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };
  componentDidMount() {
    window.addEventListener("keydown", this.handleBackdropClick);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleBackdropClick);
  }

  handleBackdropClick = (event) => {
    if (event.currentTarget === event.target || event.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={s.Overlay} onClick={this.handleBackdropClick}>
        <div className={s.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
