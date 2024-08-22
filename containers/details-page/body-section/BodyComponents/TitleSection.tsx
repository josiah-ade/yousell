import {
    CalendarMonth,
    Call,
    CallMade,
    CheckCircle,
    ClearRounded,
    RemoveRedEye,
  } from "@mui/icons-material";
  import React, { useState } from "react";
  import Grid from "@mui/material/Unstable_Grid2";
  import formatCurrency from "@/lib/functions/currency";
import formatDateTime  from "@/lib/functions/DateTime/formatDateTime";
  
  function TitleSection({data}: {data: any}) {
    const [negotiable] = useState<boolean>(data.negotiable == 'yes' ? true : false);
    const dataP = formatDateTime (data.createdAt);
    return (
      <div className="card detail__page__title__section">
        <div className="detail__page__title__div">
          <h5>{data.title}</h5>
        </div>
        <div className="detail__page__title__price d-flex">
          <h4>{formatCurrency(data.price)}</h4>
          <p>
            Negotiable
            {negotiable ? (
              <span className="a_yes">
                <CheckCircle />
              </span>
            ) : (
              <span className="a_no">
                <ClearRounded />
              </span>
            )}
          </p>
        </div>
        <Grid container spacing={2} className="detail__page__title__grid">
          <Grid xs={6} sm={4} md={4} lg={3}>
            <div className="details__page__loc d-flex3 card-sm">
              <h6>State:</h6>
              <p>{data.state}</p>
            </div>
          </Grid>
          <Grid xs={6} sm={4} md={4} lg={3}>
            <div className="details__page__loc d-flex3 card-sm">
              <h6>City:</h6>
              <p>{data.city}</p>
            </div>
          </Grid>
          <Grid xs={6} sm={4} md={4} lg={3}>
            <div className="details__page__loc d-flex3 card-sm">
              <h6>
                <CalendarMonth />
              </h6>
              <p>{dataP?.relativeTime}</p>
            </div>
          </Grid>
          <Grid xs={6} sm={4} md={4} lg={3}>
            <div className="details__page__loc d-flex3 card-sm">
              <h6>
                <RemoveRedEye />
              </h6>
              <p>{data.postView} views</p>
            </div>
          </Grid>
        </Grid>
        <div className="detail__page__title__contact d-flex">
          <button className="btn_sm_outline d-flex2 w-100" type="button"><CallMade /> Request call</button>
          <button className="btn_sm d-flex2 w-100" type="button"><Call/> Show contact</button>
        </div>
      </div>
    );
  }
  
  export default TitleSection;
  