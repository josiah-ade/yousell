import React from "react";
import "../../page.css";
import PostDetails from "@/containers/details-page";

interface SlugPageProps {
  params: {
    slug: string;
  };
}

function Details({ params }: SlugPageProps) {
  const { slug } = params;

  return <PostDetails slug={slug} />;
}

export default Details;
