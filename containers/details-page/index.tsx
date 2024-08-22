"use client";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import SliderSection from "./slider-section";
import BodySection from "./body-section";
import SliderSkeleton from "@/components/Skeletons/Details/SliderSkeleton";
import DetailBodySkeleton from "@/components/Skeletons/Details/BodySkeleton";
import FetchDetails from "@/server/FetchDetails";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";

interface PostDetailsProps {
  slug: string;
}

function PostDetails({ slug }: PostDetailsProps) {
  const router = useRouter();
  const [sliderSkeleton, setSliderSkeleton] = useState<boolean>(true);
  const [bodySkeleton, setBodySkeleton] = useState<boolean>(true);
  const [data, setData] = useState<[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await FetchDetails(slug);
        if (data.data.statusCode == 1) {
          setData(data.data.data)
          setSliderSkeleton(false);
          setBodySkeleton(false);
        } else {
          handlePush("/");
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      }
    };
    fetchData();
  }, []);

  const handlePush = (link: string) => {
    NProgress.start();
    router.replace(link);
  };

  return (
    <Container className="overlay__section__container">
      {sliderSkeleton ? <SliderSkeleton /> : <SliderSection images={data}/>}
      {bodySkeleton ? <DetailBodySkeleton /> : <BodySection data={data}/>}
    </Container>
  );
}

export default PostDetails;
