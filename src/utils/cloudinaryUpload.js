import { v2 as cloudinary } from "cloudinary";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
// Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilepath) => {
  try {
    if (!localFilepath) return null;
    const uploadResult = await cloudinary.uploader.upload(localFilepath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilepath);

    return uploadResult.url;
  } catch (error) {
    fs.unlinkSync(localFilepath);
    console.log("Error while uploading image on Cloudinary.", error.message);
    return null;
  }
};

export { uploadOnCloudinary };

// // Transform the image: auto-crop to square aspect_ratio
// const autoCropUrl = cloudinary.url("shoes", {
//   crop: "auto",
//   gravity: "auto",
//   width: 500,
//   height: 500,
// });
