"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import CategorySkeleton from "@/components/Skeletons/Home/CategorySekeleton";

function CategorySection() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    setIsLoading(false);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 200,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
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
    <Container className="category__section__container">
      {!isLoading && (
        <div className="slider-container">
          <Slider {...settings}>
            <div className="bg-orange-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image
                  src="/images/smartphone.png"
                  width={70}
                  height={70}
                  alt="phone"
                />
                <h5>Mobile Phones</h5>
                <p>Find your favourite Phone</p>
              </Link>
            </div>
            <div className="bg-blue-dark slider__item__container d-flex">
              <Link href="/electronics" className="d-flex">
                <Image
                  src="/images/device.png"
                  width={70}
                  height={70}
                  alt="device"
                />
                <h5>Electronics</h5>
                <p>Shop affordable electronics</p>
              </Link>
            </div>
            <div className="bg-pink-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image src="/images/car.png" width={70} height={70} alt="car" />
                <h5>Vehicles / Cars</h5>
                <p>Buy new and used Cars</p>
              </Link>
            </div>
            <div className="bg-primary-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image
                  src="/images/agreement.png"
                  width={70}
                  height={70}
                  alt="car"
                />
                <h5>Real Estate</h5>
                <p>Sell & Lease your apartments</p>
              </Link>
            </div>
            <div className="bg-orange-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image
                  src="/images/basket.png"
                  width={70}
                  height={70}
                  alt="grocery"
                />
                <h5>Grocery</h5>
                <p>Buy and sell fresh food items</p>
              </Link>
            </div>
            <div className="bg-blue-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image
                  src="/images/pet-shop.png"
                  width={70}
                  height={70}
                  alt="pet"
                />
                <h5>Pets</h5>
                <p>Checkout your favourite pets</p>
              </Link>
            </div>
            <div className="bg-pink-dark slider__item__container d-flex">
              <Link href="/categories" className="d-flex">
                <Image
                  src="/images/sofa.png"
                  width={70}
                  height={70}
                  alt="sofa"
                />
                <h5>Furnitures</h5>
                <p>Find best chairs, tables and furnitures</p>
              </Link>
            </div>
          </Slider>
        </div>
      )}
      {isLoading && <CategorySkeleton />}
    </Container>
  );
}

export default CategorySection;
