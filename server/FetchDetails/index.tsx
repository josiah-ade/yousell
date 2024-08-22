import React from "react";
import axios from "axios";

async function FetchDetails(id: string) {
  const fetchData = await axios.post("/api/details/fetch", {
    id: id,
  });

  return fetchData.data;
}

export default FetchDetails;
