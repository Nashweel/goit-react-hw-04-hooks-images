import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick }) => {
  return (
    <div className={s.buttonConteiner}>
      <button type="button" className={s.Button} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

export default Button;
