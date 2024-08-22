import React from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { optionOS, mobileBrand } from "@/constants/Select";
import SelectReact from "@/components/Select/ReactSelect";

function Mobile() {
  return (
    <Grid container spacing={2}>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Brand <sup>*</sup>
          </label>
          <SelectReact
            options={mobileBrand}
            title="Mobile Brand"
            name="mobileBrand"
            required
          />
        </div>
      </Grid>
      
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Operating System <sup>*</sup>
          </label>
          <SelectReact
            options={optionOS}
            title="Operating System"
            name="operatingSystem"
            required
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Phone Ram <sup>*</sup>
          </label>
          <input
            type="text"
            name="phoneRam"
            className="form-input mgt-10"
            placeholder="Phone Ram"
            required
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>
            Phone Storage <sup>*</sup>
          </label>
          <input
            type="text"
            name="phoneStorage"
            className="form-input mgt-10"
            placeholder="Phone Storage"
            required
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
          <label>Screen Resolution</label>
          <input
            type="text"
            name="screenResolution"
            className="form-input mgt-10"
            placeholder="Screen Resolution"
          />
        </div>
      </Grid>

      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Phone Color</label>
          <input
            type="text"
            name="phoneColor"
            className="form-input mgt-10"
            placeholder="Phone Color"
          />
        </div>
      </Grid>
      <Grid xs={12} sm={6} md={4} lg={4}>
        <div className="form__body mgb-10">
          <label>Phone Battery</label>
          <input
            type="text"
            name="phoneBattery"
            className="form-input mgt-10"
            placeholder="Phone Battery"
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default Mobile;
