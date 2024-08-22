import { CorporateFare, People } from "@mui/icons-material";
import React from "react";

function StatsSection() {
  return (
    <div className="stats__section">
      <div className="stats__ads__section bg bg-orange">
        <CorporateFare />
        <p>15,000 Active Ads</p>
      </div>
      <div className="stats__ads__section bg bg-green">
        <People />
        <p>150,000 Active Users</p>
      </div>
    </div>
  );
}

export default StatsSection;
