import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (req, file) => {
    let folder = "alpha-classes";
    if (file.fieldname === "video") folder += "/videos";
    else if (file.fieldname === "notes") folder += "/notes";
    else if (file.fieldname === "profile") folder += "/profiles";
    return {
      folder,
      resource_type: file.fieldname === "video" ? "video" : "auto",
    };
  },
});

export const upload = multer({ storage });
export default cloudinary;
