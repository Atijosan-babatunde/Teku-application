export const getBase64 = (input, cb) => {
  let reader = new FileReader();

  reader.onload = function () {
    cb(reader.result);
  };

  reader.onerror = function (error) {
    console.log("Error: ", error);
  };

  if (input instanceof Blob) {
    reader.readAsDataURL(input);
  } else {
    console.error("Invalid input. Please provide a valid Blob or File.");
  }
};
