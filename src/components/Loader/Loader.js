import React from "react";
import Loader from "react-loader-spinner";
import s from "./Loader.module.css";

const Spinner = () => {
  return (
    <div className={s.spinnerConteiner}>
      <Loader type="Grid" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Spinner;
