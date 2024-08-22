import React from "react";

import RealEstateComponent from "./Components/RealEstateComponent";
import MobileComponent from "./Components/MobileComponent";

function OverviewSection({ data }: { data: any }) {
  const fetchType = (data: any) => {
    if (data.category === "real-estate")
      return <RealEstateComponent data={data} />;
    if (data.category === "mobile") return <MobileComponent data={data} />;
  };

  return (
    <div className="card detail__page__overview__section">
      <div className="detail__page__overview__div">
        <h5>Overview</h5>
      </div>
      {fetchType(data)}
    </div>
  );
}

export default OverviewSection;
