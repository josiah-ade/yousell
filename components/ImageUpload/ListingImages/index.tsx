import React, { useRef, useEffect } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { Image } from "@mui/icons-material";

declare global {
  interface UploadWidget {
    open: () => void;
  }

  interface Cloudinary {
    createUploadWidget: (
      options: object,
      callback: (error: any, result: any) => void
    ) => UploadWidget;
  }

  interface Window {
    cloudinary: Cloudinary;
  }

  interface childProps {
    updateState: (newState: string, status: boolean) => void;
  }
}

function ListingImageUpload({ updateState }: childProps) {
  const cloudinaryRef = useRef<Cloudinary | undefined>(undefined);
  const widgetRef = useRef<UploadWidget | undefined>(undefined);

  useEffect(() => {
    if (window.cloudinary) {
      cloudinaryRef.current = window.cloudinary;
      widgetRef.current = cloudinaryRef.current.createUploadWidget(
        {
          cloudName: "dez3bw4lk",
          uploadPreset: "cloudinary",
          sources: ["local", "url", "camera"],
          multiple: false,
          clientAllowedFormats: ["image"],
          maxFileSize: 1000000
        },
        function (error, result) {
          if (result.event === "success") {
            updateState(result.info.url, true);
          }
        }
      );
    }
  }, []);

  const openUploadWidget = () => {
    if (widgetRef.current) {
      widgetRef.current.open();
    }
  };

  return (
    <Grid container spacing={2}>
      <Grid xs={12}>
        <div className="post__page__overview__div mgt-20">
          <h5>Image Upload</h5>
        </div>
      </Grid>
      <Grid xs={6} sm={6} md={4} lg={4} onClick={openUploadWidget}>
        <div className="uploader__wrapper img__wrapper__height d-flex2">
          <Image />
          <p>Add images</p>
        </div>
      </Grid>
    </Grid>
  );
}

export default ListingImageUpload;
