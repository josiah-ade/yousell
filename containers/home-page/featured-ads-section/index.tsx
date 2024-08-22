"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import {
  Dashboard,
  FavoriteBorderOutlined,
  LocationOn,
  RemoveRedEyeSharp,
} from "@mui/icons-material";
import FeaturedPostSkeleton from "@/components/Skeletons/Home/FeaturedPostSkeleton";
import ListingCard from "@/components/Cards/ListingCard";

function FeaturedAdsSection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 729,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container className="section__container">
      <div className="ft__ads__header d-flex2">
        <Image
          src="/images/megaphone.png"
          width={30}
          height={30}
          alt="device"
        />
        <h5>Featured Listings</h5>
      </div>
      {!isLoading && (
        <div className="slider-container">
          <Slider {...settings}>
            <ListingCard
              _id="66b61942a36167cd2df1ea4d"
              title="Shop affordable iphones xr smartphones"
              category="Mobile Phone"
              price="500"
              images="/images/phone.jpg"
              postView={200}
              state="Lagos"
            />
            <ListingCard
              _id="66b61942a36167cd2df1ea4d"
              title="Shop affordable iphones xr smartphones"
              category="Electronics"
              price="500"
              images="/images/apple.jpg"
              postView={100}
              state="Lagos"
            />
            <ListingCard
              _id="66b61942a36167cd2df1ea4d"
              title="Shop affordable iphones xr smartphones"
              category="Grocery"
              price="500"
              images="/images/grocery.jpg"
              postView={4560}
              state="Abuja"
            />
            <ListingCard
              _id="66b61942a36167cd2df1ea4d"
              title="Shop affordable iphones xr smartphones"
              category="Real Estate"
              price="500"
              images="/images/apartment.jpg"
              postView={100}
              state="Ibadan"
            />
            <ListingCard
              _id="66b61942a36167cd2df1ea4d"
              title="Shop affordable iphones xr smartphones"
              category="Cars"
              price="500"
              images="/images/car.jpg"
              postView={43}
              state="Abuja"
            />
          </Slider>
        </div>
      )}
      {isLoading && <FeaturedPostSkeleton />}
    </Container>
  );
}

export default FeaturedAdsSection;
