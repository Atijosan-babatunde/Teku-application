import axios from "axios";

const useCloudinaryImageUpload = () => {
  const uploadImageToCloudinary = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "moxavms4");

      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dvcjgxou9/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      return response.data.secure_url;
    } catch (error) {
      console.log("Error uploading image to Cloudinary:", error);
    }
  };

  return [uploadImageToCloudinary];
};

export default useCloudinaryImageUpload;
