import React from "react";

export default function Filter(
  page: string,
  category: string[],
  location: string[],
  min: number | string,
  max: number | string,
  query: string
) {
  const querryText = query.length > 0 ? `?q=${query}` : "?q=";
  const catType =
    category.length > 0 ? `?type=${category.toString()}` : "?type=all";
  const catType2 =
    category.length > 0 ? `&category=${category.toString()}` : "&category=all";
  const locType =
    location.length > 0 ? `&location=${location.toString()}` : "&location=all";
  const minValue = min !== 0 ? `&min=${min}` : "&min=0";
  const maxValue = max !== 0 ? `&max=${max}` : "&max=0";

  if (page == "search") {
    const url = `/${page}${querryText}${catType2}${locType}${minValue}${maxValue}`;
    return url;
  } else {
    const url = `/${page}${catType}${locType}${minValue}${maxValue}`;
    return url;
  }
}
