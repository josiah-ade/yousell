import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import {
  AssignmentSharp,
  Bed,
  SensorDoor,
  Fitbit,
  Shower,
  FolderCopy,
  BatteryFull,
  Fullscreen,
  HighQuality,
  InvertColors,
} from "@mui/icons-material";
import TerminalIcon from "@mui/icons-material/Terminal";

function RealEstateComponent({ data }: { data: any }) {
  return (
    <Grid container spacing={2} className="detail__page__overview__grid">
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <Fitbit />
          </div>
          <div className="div__dpdbh6p">
            <h6>Brand</h6>
            <p>{data.mobileBrand}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <SensorDoor />
          </div>
          <div className="div__dpdbh6p">
            <h6>OS</h6>
            <p>{data.operatingSystem}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <TerminalIcon />
          </div>
          <div className="div__dpdbh6p">
            <h6>Ram</h6>
            <p>{data.phoneRam}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <FolderCopy />
          </div>
          <div className="div__dpdbh6p">
            <h6>Storage</h6>
            <p>{data.phoneStorage}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <BatteryFull />
          </div>
          <div className="div__dpdbh6p">
            <h6>Battery</h6>
            <p>{data.phoneBattery}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <Fullscreen />
          </div>
          <div className="div__dpdbh6p">
            <h6>Screen</h6>
            <p>{data.screenSize}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <HighQuality />
          </div>
          <div className="div__dpdbh6p">
            <h6>Resolution</h6>
            <p>{data.screenResolution}</p>
          </div>
        </div>
      </Grid>
      <Grid xs={6} sm={4} md={4} lg={3}>
        <div className="details__page__details d-flex3 card-sm">
          <div className="div__dpdb">
            <InvertColors />
          </div>
          <div className="div__dpdbh6p">
            <h6>Color</h6>
            <p>{data.phoneColor}</p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}

export default RealEstateComponent;
