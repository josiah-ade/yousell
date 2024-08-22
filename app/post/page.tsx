import Post from "@/containers/post-page";
import Script from "next/script";
import React from "react";

function page() {
  return (
    <>
      <Script src="https://upload-widget.cloudinary.com/latest/global/all.js" />
      <Post />
    </>
  );
}

export default page;
