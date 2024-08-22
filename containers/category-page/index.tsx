'use client'
import Sidebar from "@/components/Category-Search/SideBar";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import BodySection from "@/components/Category-Search/BodySection";

function CategoryPage() {
  return (
    <Container className="overlay__section__container">
      <Grid container spacing={2}>
        <Grid xs={12} sm={12} md={3} lg={3} className="sidebar__mobile__view">
          <div className="sidebar__cat__box">
            <Sidebar />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9}>
          <BodySection  />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CategoryPage