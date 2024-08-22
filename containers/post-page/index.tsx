"use client";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BodySection from "./components/BodySection";
import '../../app/page.css';

function Post() {
  return (
    <Container className="post__page__container mgt-40" maxWidth="md">
      <Grid container spacing={2}>
        <Grid xs={12}>
          <BodySection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Post;
