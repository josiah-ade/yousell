"use client";
import ListingCard from "@/components/Cards/ListingCard";
import LatestPostSkeleton from "@/components/Skeletons/Home/LatestPostSkeletons";
import Toast from "@/components/Toastify/error";
import { FetchDataType } from "@/constants/interfaces";
import { Container } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

function LatestAdsSection() {
  const [dataFetched, setDataFetched] = useState<FetchDataType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [finishLoading, setFinishLoading] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    callFetch();
  }, []);

  const callFetch = () => {
    axios
      .get("/api/home/listings")
      .then((response) => {
        const data = response.data;
        setDataFetched(data.data);
        setIsLoading(false);
        setFinishLoading(true);
      })
      .catch((error) => {
        setShowToast(true);
        setToastType("error");
        setToastMessage("Error please try again later");
      });
  };

  return (
    <Container className="section__container bg-section-white">
      <Toast type={toastType} message={toastMessage} showToast={showToast} />
      <div className="ft__ads__header d-flex2">
        <Image
          src="/images/megaphone.png"
          width={30}
          height={30}
          alt="device"
        />
        <h5>Latest Listings</h5>
      </div>
      {isLoading && <LatestPostSkeleton />}
      {finishLoading && (
        <Grid container spacing={2} className="ad__gd__container">
          {dataFetched.map((data, index) => (
            <Grid xs={6} sm={6} md={4} lg={3} className="grid__ads__container" key={index}>
              <ListingCard
                key={index}
                _id={data._id}
                title={data.title}
                category={data.category}
                price={data.price}
                images={data.images}
                state={data.state}
                postView={data.postView}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}

export default LatestAdsSection;
