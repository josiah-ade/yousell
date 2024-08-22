'use client'
import BodySectionSearch from "@/components/Category-Search/BodySectionSearch";
import SidebarSearch from "@/components/Category-Search/SidebarSearch";
import SearchSection from "@/components/Search";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

function SearchPage() {
  return (
    <Container className="overlay__section__container">
      <SearchSection />
      <Grid container spacing={2} className="mgt-40">
        <Grid xs={12} sm={12} md={3} lg={3} className="sidebar__mobile__view">
          <div className="sidebar__cat__box">
            <SidebarSearch />
          </div>
        </Grid>
        <Grid xs={12} sm={12} md={9} lg={9}>
          <BodySectionSearch />
        </Grid>
      </Grid>
    </Container>
  );
}

export default SearchPage;
