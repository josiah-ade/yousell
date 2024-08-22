import { Container } from "@mui/material";
import React from "react";
import "./page.css";
import StatsScection from "@/containers/home-page/stats-section";
import HeroTitleSection from "@/containers/home-page/hero-title-section";
import CategorySection from "@/containers/home-page/category-section";
import FeaturedAdsSection from "@/containers/home-page/featured-ads-section";
import LatestAdsSection from "@/containers/home-page/latest-ads-section";
import SearchSection from "@/components/Search";

function Home() {
  return (
    <Container className="d-flex2 overlay__section__container">
      <StatsScection />
      <HeroTitleSection />
      <SearchSection />
      <CategorySection /> 
      <FeaturedAdsSection />
      <LatestAdsSection />
    </Container>
  );
}

export default Home;
