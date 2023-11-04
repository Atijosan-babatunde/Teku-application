import { useState } from "react";
import axios from "axios";

const useCloudinaryImageUpload = () => {
  const [secureUrl, setSecureUrl] = useState(null);

  const uploadImageToCloudinary = async (file) => {
    try {
      //   console.log(process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      //   console.log(process.env.REACT_APP_CLOUDINARY_PRESET_KEY);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "moxavms4");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dvcjgxou9/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setSecureUrl(response.data.secure_url);
    } catch (error) {
      console.log("Error uploading image to Cloudinary:", error);
    }
  };

  return [secureUrl, uploadImageToCloudinary];
};

export default useCloudinaryImageUpload;
