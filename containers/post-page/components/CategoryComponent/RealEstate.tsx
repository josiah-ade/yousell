import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { optionsPropertyType, optionsPurpose } from "@/constants/Select";
import SelectReact from "@/components/Select/ReactSelect";

function RealEstate() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Purpose <sup>*</sup>
          </label>
          <SelectReact options={optionsPurpose} title="Purpose" name="propertyPurpose" required/>
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Property Type <sup>*</sup>
          </label>
          <SelectReact options={optionsPropertyType} title="Property Type" name="propertyType" required/>
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Property Size</label>
          <input
            type="text"
            name="propertySize"
            className="form-input mgt-10"
            placeholder="Property Size"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Land Size</label>
          <input
            type="text"
             name="landSize"
            className="form-input mgt-10"
            placeholder="Land Size"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Property Age</label>
          <input
            type="number"
            name="propertyAge"
            className="form-input mgt-10"
            placeholder="Property Age"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Bedrooms</label>
          <input
            type="number"
            name="bedrooms"
            className="form-input mgt-10"
            placeholder="Bedrooms"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Bathrooms</label>
          <input
            type="number"
            name="bathrooms"
            className="form-input mgt-10"
            placeholder="Bathrooms"
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default RealEstate;
