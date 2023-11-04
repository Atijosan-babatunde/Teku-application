import React from "react";
import useCloudinaryImageUpload from "../../shared/Hooks/useCloudinaryImageUpload";

function ImageUpload() {
  const [file, setFile] = React.useState(null);
  const [secureUrl, uploadImage] = useCloudinaryImageUpload();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleImageUpload = () => {
    console.log(file);
    if (file) {
      uploadImage(file);
    }
    console.log("SECURE URL", secureUrl);
  };
  console.log("SECURE URL", secureUrl);

  return (
    <div>
      <input type="file" accept="*" onChange={handleFileChange} />
      <button onClick={handleImageUpload}>Upload Image</button>
      {secureUrl && <img src={secureUrl} alt="Uploaded" />}
    </div>
  );
}

export default ImageUpload;
