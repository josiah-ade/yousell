"use client";
import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Toast from "@/components/Toastify/error";
import CategoryPostSkeleton from "@/components/Skeletons/Category";
import { FetchDataType } from "@/constants/interfaces";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import * as NProgress from "nprogress";
import Image from "next/image";
import ListingCard from "@/components/Cards/ListingCard";

function MyPosts() {
  const router = useRouter();
  const [loadSkeleton, setLoadSkeleton] = useState(true);
  const [dataFetched, setDataFetched] = useState<FetchDataType[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    callFetch();
  }, []);

  const handlePush = (link: string) => {
    NProgress.start();
    router.replace(link);
  };

  const callFetch = () => {
    setLoadSkeleton(true);
    axios
      .post(
        "/api/myposts/fetch",
        { user_id: Cookies.get("userID") },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + Cookies.get("token"),
          },
        }
      )
      .then((response) => {
        const data = response.data;

        if (data.data.statusCode == 0) {
          handlePush("/login");
        } else {
          setDataFetched(data.data.data);
          setLoadSkeleton(false);
        }
      })
      .catch((error) => {
        setShowToast(true);
        setToastType("error");
        setToastMessage("Error please try again later");
      });
  };

  return (
    <Container className="overlay__section__container">
      <div className="card">
        <Toast type={toastType} message={toastMessage} showToast={showToast} />
        <div className="categories__page__overview__div2">
          <h5>My Posts <span>({dataFetched.length})</span></h5>
        </div>
        {loadSkeleton && <CategoryPostSkeleton />}
        {!loadSkeleton &&
          (dataFetched.length > 0 ? (
            <Grid container spacing={2} className="ad__gd__container">
              {dataFetched.map((data, index) => (
                <Grid
                  xs={6}
                  sm={6}
                  md={4}
                  lg={3}
                  className="grid__ads__container"
                  key={index}
                >
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
          ) : (
            <Grid container spacing={2} className="ad__gd__container">
              <Grid xs={12} className="no__result__container">
                <Image
                  src="/images/no-results.png"
                  width={128}
                  height={128}
                  alt="no result found"
                />
                <p>No Result Found</p>
              </Grid>
            </Grid>
          ))}
      </div>
    </Container>
  );
}

export default MyPosts;
