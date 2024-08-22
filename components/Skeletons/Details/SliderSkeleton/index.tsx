import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function SliderSkeleton() {
  const [data] = useState<number[]>([1, 2]);

  return (
    <Grid container spacing={2} className="ad__gd__container">
      {data.map((index) => (
        <Grid
          xs={6}
          className="grid__ads__container"
          key={index}
        >
          <Skeleton variant="rounded" height={300} />
        </Grid>
      ))}
    </Grid>
  );
}

export default SliderSkeleton;
