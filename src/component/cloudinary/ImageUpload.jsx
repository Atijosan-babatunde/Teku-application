import React, { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageUpload = async () => {
    if (file) {
      const cloudName = "dvcjgxou9";

      try {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", "moxavms4");

        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        console.log(response);

        setImage(response.data.secure_url);
      } catch (error) {
        console.log(error);
        console.error("Error uploading image to Cloudinary:", error);
      }
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {image && <img src={image} alt="Uploaded" />}
    </div>
  );
}

export default ImageUpload;
