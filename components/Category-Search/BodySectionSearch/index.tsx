import CategoryPostSkeleton from "@/components/Skeletons/Category";
import { Close } from "@mui/icons-material";
import ViewHeadline from "@mui/icons-material/ViewHeadline";
import { IconButton, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import Sidebar from "../SideBar";
import { useSearchParams } from "next/navigation";
import replaceString from "replace-string";
import axios from "axios";
import { FetchDataType } from "@/constants/interfaces";
import Toast from "@/components/Toastify/error";
import Grid from "@mui/material/Unstable_Grid2";
import ListingCard from "@/components/Cards/ListingCard";
import Image from "next/image";

function BodySectionSearch() {
  const searchParams = useSearchParams();

  const getQuery: string = searchParams.get("q")
    ? (searchParams.get("q") as string)
    : "";

  const gType: string = searchParams.get("category")
    ? (searchParams.get("category") as string)
    : "all";

  const gLocation: string = searchParams.get("location")
    ? (searchParams.get("location") as string)
    : "all";

  const getMax = searchParams.get("max") ? searchParams.get("max") : 0;
  const getMin = searchParams.get("min") ? searchParams.get("min") : 0;

  const [checkedSidebar, setCheckedSidebar] = useState(false);
  const [loadSkeleton, setLoadSkeleton] = useState(true);
  const [dataFetched, setDataFetched] = useState<FetchDataType[]>([]);
  const [showToast, setShowToast] = useState<boolean>(false);
  const [toastType, setToastType] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string>("");

  useEffect(() => {
    callFetch();
    setCheckedSidebar(false);
  }, [getQuery, gType, gLocation, getMax, getMin]);

  const callFetch = () => {
    setLoadSkeleton(true);
    axios
      .post("/api/search/fetch", {
        listingTitle: getQuery,
        listingCategory: gType !== "all" && gType,
        listingLocation: gLocation !== "all" && gLocation,
        listingMin: Number(getMin),
        listingMax: Number(getMax),
      })
      .then((response) => {
        const data = response.data;
        if (data.data.statusCode == 1) {
          setDataFetched(data.data.data);
          setLoadSkeleton(false);
        } else {
          setShowToast(true);
          setToastType("error");
          setToastMessage("Error please try again later");
        }
      })
      .catch((error) => {
        setShowToast(true);
        setToastType("error");
        setToastMessage("Error please try again later");
      });
  };

  const handleSidebarOpen = () => {
    setCheckedSidebar(true);
  };

  const handleSidebarClose = () => {
    setCheckedSidebar(false);
  };

  const handleBodyClose = (className: string) => {
    if (className === "sidebar__overlay") {
      setCheckedSidebar(false);
    }
  };

  const handleTitle = () => {
    if (gType !== "all") {
      const text = replaceString(gType?.toUpperCase(), "-", " ");
      return text;
    }
  };

  return (
    <div className="card">
      <Toast type={toastType} message={toastMessage} showToast={showToast} />
      <div className="categories__page__overview__div2">
        <IconButton onClick={handleSidebarOpen} className="ct__sidebar__icon">
          <ViewHeadline />
        </IconButton>
        <h5>{handleTitle()}</h5>
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
      <Slide direction="right" in={checkedSidebar} mountOnEnter unmountOnExit>
        <div
          className="sidebar__overlay"
          onClick={(e) => handleBodyClose((e.target as Element).className)}
        >
          <div className="sidebar__inner">
            <div className="sidebar__close__icon">
              <IconButton onClick={handleSidebarClose}>
                <Close />
              </IconButton>
            </div>
            <Sidebar />
          </div>
        </div>
      </Slide>
    </div>
  );
}

export default BodySectionSearch;
