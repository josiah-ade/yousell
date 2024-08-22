import { Skeleton } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function DetailBodySkeleton() {

  return (
    <Grid container spacing={2} className="ad__gd__container">
      <Grid xs={12} sm={12} md={8} lg={8} xl={8} className="grid__ads__container">
        <Skeleton variant="rounded" height={400} />
      </Grid>
      <Grid xs={12} sm={12} md={4} lg={4} xl={4} className="grid__ads__container">
        <Skeleton variant="rounded" height={400} />
      </Grid>
    </Grid>
  );
}

export default DetailBodySkeleton;
