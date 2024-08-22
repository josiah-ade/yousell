import React from "react";

export default function FilterSearch(
  category: string,
  location: string,
  query: string,
) {
  const querryText = query.length > 0 ? `?q=${query}` : "?q=";
  const catType2 =
    category.length > 0 ? `&category=${category.toString()}` : "&category=all";
  const locType =
    location.length > 0 ? `&location=${location.toString()}` : "&location=all";

    const url = `/search${querryText}${catType2}${locType}`;
    return url;
}
