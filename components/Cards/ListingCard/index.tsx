import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import Link from "next/link";
import {
  Dashboard,
  FavoriteBorderOutlined,
  LocationOn,
  RemoveRedEyeSharp,
} from "@mui/icons-material";
import { FetchDataType } from "@/constants/interfaces";
import { shuffleArray } from "@/lib/functions/arrayShuffle";
import { Skeleton } from "@mui/material";
import formatCurrency from "@/lib/functions/currency";

function ListingCard({
  _id,
  title,
  category,
  price,
  images,
  state,
  postView,
}: FetchDataType) {
  const [items] = useState<string[]>(["pink", "primary", "orange"]);
  const [newItem, setNewItem] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setNewItem(shuffleArray(items));
  }, []);

  const handleLoadedImage = () => {
    setIsLoading(false);
  };

  const formattedPrice = formatCurrency(price);

  return (
    <Link href={`/details/${_id}`} className="listing__container">
      <div className="listing__container_img">
        <div className="listing__favorite__icon d-flex">
          <FavoriteBorderOutlined />
        </div>
        <div className="listing__location__div d-flex2">
          <div className="listing__location__icon d-flex">
            <div className="listing__location__di1 d-flex">
              <LocationOn />
              <p>{state}</p>
            </div>
            <div className="listing__location__di2 d-flex">
              <RemoveRedEyeSharp />
              <p>{postView}</p>
            </div>
          </div>
        </div>
        <img
          src={images}
          alt={title}
          onLoad={handleLoadedImage}
          style={{ display: isLoading ? "none" : "flex" }}
        />
        {isLoading && <Skeleton variant="rounded" height={200} />}
      </div>
      <div className="listing__container_title">
        <p className="p_cat">{title}</p>
        <div className="listing__category">
          <Dashboard />
          <p>{category}</p>
        </div>
        <div className="listing__price d-flex">
          <h6>{formattedPrice}</h6>
          <div className="listing__price__ribbon_div">
            <p className={newItem}>Special</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ListingCard;
