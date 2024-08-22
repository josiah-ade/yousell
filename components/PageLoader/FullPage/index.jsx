import { Oval } from "react-loader-spinner";
import React from "react";

function FullPageLoader() {
  return (
    <div className="full__page__background d-flex2">
      <div className="inner__full__page d-flex2">
        <Oval
          visible={true}
          height="35"
          width="35"
          color="#00cc82"
          secondaryColor="#02b976"
          strokeWidth="6"
        />
      </div>
    </div>
  );
}

export default FullPageLoader;
