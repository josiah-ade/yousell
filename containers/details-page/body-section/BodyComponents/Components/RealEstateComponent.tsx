import React from 'react'
import Grid from "@mui/material/Unstable_Grid2";
import {
  AddBox,
  AssignmentSharp,
  Bed,
  HouseSharp,
  PushPinRounded,
  Shower,
  FitScreen
} from "@mui/icons-material";

function RealEstateComponent({data}: {data: any}) {
  return (
    <Grid container spacing={2} className="detail__page__overview__grid">
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <PushPinRounded />
            </div>
            <div className="div__dpdbh6p">
              <h6>Purpose</h6>
              <p>{data.propertyPurpose}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <HouseSharp />
            </div>
            <div className="div__dpdbh6p">
              <h6>Property Type</h6>
              <p>{data.propertyType}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <AddBox />
            </div>
            <div className="div__dpdbh6p">
              <h6>Property Size</h6>
              <p>{data.propertySize}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <FitScreen />
            </div>
            <div className="div__dpdbh6p">
              <h6>Land Size</h6>
              <p>{data.landSize}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <AssignmentSharp />
            </div>
            <div className="div__dpdbh6p">
              <h6>Age (Years)</h6>
              <p>{data.propertyAge}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <Bed />
            </div>
            <div className="div__dpdbh6p">
              <h6>Bedrooms</h6>
              <p>{data.bedrooms}</p>
            </div>
          </div>
        </Grid>
        <Grid xs={6} sm={4} md={4} lg={3}>
          <div className="details__page__details d-flex3 card-sm">
            <div className="div__dpdb">
              <Shower />
            </div>
            <div className="div__dpdbh6p">
              <h6>Bathrooms</h6>
              <p>{data.bathrooms}</p>
            </div>
          </div>
        </Grid>
      </Grid>
  )
}

export default RealEstateComponent