import React, { useState } from "react";
import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function CategoryPostSkeleton() {
  const [data] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8,9]);

  return (
    <Grid container spacing={2} className="ad__gd__container">
      {data.map((index) => (
        <Grid xs={6} sm={4} md={4} lg={3} className="grid__ads__container" key={index}>
          <Skeleton variant="rounded" height={220} />
        </Grid>
      ))}
    </Grid>
  );
}

export default CategoryPostSkeleton;
