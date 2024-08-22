interface UploadWidget {
  open: () => void;
  // Add other methods and properties if necessary
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
