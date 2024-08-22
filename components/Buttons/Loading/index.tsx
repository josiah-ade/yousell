import React from "react";
import { Oval } from "react-loader-spinner";

function ButtonLoader() {
  return (
    <button className="btn_sm w-100 d-flex2">
      <Oval visible={true} height="35" width="35" color="#ffffff" secondaryColor="#ffffff" strokeWidth="6" />
    </button>
  );
}

export default ButtonLoader;
