import React, { Suspense } from "react";
import "../page.css";
import CategoryPage from "@/containers/category-page";
import SuspenseCompo from "@/components/Suspence";

function Details() {
  return (
    <Suspense fallback={<SuspenseCompo />}>
      <CategoryPage />{" "}
    </Suspense>
  );
}

export default Details;
