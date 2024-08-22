import React from "react";
import { vehicleBrand } from "@/constants/Select";
import SelectReact from "@/components/Select/ReactSelect";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function Vehicle() {
  return (
    <Grid container spacing={4}>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Brand <sup>*</sup>
          </label>
          <SelectReact
            options={vehicleBrand}
            title="Vehicle Brand"
            name="vehicleBrand"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Screen Size</label>
          <input
            type="text"
            name="screenSize"
            className="form-input mgt-10"
            placeholder="Screen Size"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Screen Size</label>
          <input
            type="text"
            name="screenSize"
            className="form-input mgt-10"
            placeholder="Screen Size"
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Vehicle;
