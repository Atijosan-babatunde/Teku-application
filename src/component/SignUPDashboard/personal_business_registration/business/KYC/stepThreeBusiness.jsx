import styles from "../KYC/CSS/stepthreebusiness.module.scss";
import steptwoimg from "../../../../../assets/png/steptwoimg.png";
import { useState } from "react";
import Camera from "react-html5-camera-photo";
import selfieIcon from "../../../../../assets/png/camerauser.png";
import { BsArrowLeft } from "react-icons/bs";

const StepThreeBusiness = ({
  setStep,
  handleChange,
  formData,
  setFormData,
}) => {
  const [showCamera, setshowCamera] = useState(false);
  const [inputError, setInputError] = useState({});

  const validate = () => {
    let selfieError = "";
    if (!formData.selfie) {
      selfieError = "selfie with id is required";
    }

    if (selfieError) {
      setInputError((curr) => {
        return {
          selfie: selfieError,
        };
      });

      return false;
    }
    return true;
  };

  const handleTakePhoto = (dataUri) => {
    const byteString = atob(dataUri.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);

    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    const file = new Blob([ab], { type: "image/png" });

    setFormData({ ...formData, selfie: file });
    setshowCamera(false);
  };

  //   const handleTakePhoto = (dataUri) => {
  //     // Do stuff with the photo...
  //     setphotoUrl(dataUri);
  //     setshowCamera(false);
  //   };

  const goToStepThree = () => {
    if (validate()) {
      setStep(4);
    }
  };

  const goToStepOne = () => {
    setStep(2);
  };

  const [instruction] = useState([
    {
      id: 1,
      instruction:
        "Make sure your face is fully visible to the camera and that there is adequate lighting.",
    },
    {
      id: 2,
      instruction:
        "Keep your camera at eye level when you take a selfie of yourself.",
    },
    {
      id: 3,
      instruction:
        "The best photo resolution can be obtained by using either the front or back cameras.",
    },
    { id: 4, instruction: "Pick a simple, neutral background." },
    {
      id: 5,
      instruction:
        "To prevent glare or reflections, take off any ID cases or protective holders.",
    },
  ]);

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>
        <BsArrowLeft onClick={goToStepOne} className={styles.arrow} />
        Step 3
      </h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Take a Selfie</h2>
          <p className={styles.paratwo}>
            Take a live clear picture of your face.
          </p>
        </div>

        <img src={steptwoimg} alt="" />
      </div>

      <div className={styles.split}>
        <div className={styles.driverdoc}>
          {showCamera ? (
            <Camera
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
            />
          ) : formData.selfie ? (
            <img src={formData.selfie} alt="" className={styles.camsnap} />
          ) : (
            <>
              <img src={selfieIcon} alt="" />
              <p onClick={() => setshowCamera(true)}>
                Click to Open Camera <br />
                <span> Maximum file size: 5mb</span>
              </p>
            </>
          )}
        </div>
        <div className={styles.instruction}>
          {instruction.map((instruction, index) => (
            <div className={styles.innerinstruction} key={index}>
              <div className={styles.greenround}></div>
              <p className={styles.innerp}>{instruction.instruction}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.requestbut}>
        <button
          className={styles.btnrequest}
          // disabled={!snap}
          onClick={goToStepThree}
          // style={{ backgroundColor: snap ? "rgba(1, 27, 109, 0.20)" : " " }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThreeBusiness;
