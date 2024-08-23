import React, { Suspense } from "react";
import "../page.css";
import SearchPage from "@/containers/search-page";
import SuspenseCompo from "@/components/Suspence";

function Details() {
  return (
    <Suspense fallback={<SuspenseCompo />}>
      <SearchPage />
    </Suspense>
  );
}

export default Details;
