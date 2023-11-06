import styles from "../KYC/CSS/kycpersonaluser.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../../../shared/Hooks/useOnClickOutside";
import cancel from "../../../../../assets/png/cancel.png";
import StepOnePersonal from "./stepOnePersonal";
import StepTwoPersonal from "./stepTwoPersonal";
import StepThreePersonal from "./stepThreePersonal";
import StepFourPersonal from "./stepFourPersonal";
import StepFivePersonal from "./stepFivePersonal";

const KycPersonalUser = ({ handleModalShow }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    bvn_no: "",
    identification: "",
    picture: null,
    phone_no: "",
    address: "",
    local_government: "",
    proof_of_address: "",
    document: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      // Handle file input
      getBase64(files[0], (base64Data) => {
        setFormData({ ...formData, [name]: base64Data });
      });
    } else {
      // Handle text input
      setFormData({ ...formData, [name]: value });
    }
  };

  const getBase64 = (file, cb) => {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(reader.result);
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  };

  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShow);

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleModalShow}>
          <img src={cancel} alt="close modal" />
        </div>
        <div className={styles.discone}>
          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 1 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 1 ? "#000" : "" }}
            >
              Identification document
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 1 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 2 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 2 ? "#000" : "" }}
            >
              Take a Selfie
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 2 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 3 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 3 ? "#000" : "" }}
            >
              Phone number verification
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 3 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 4 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 4 ? "#000" : "" }}
            >
              Address
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 4 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 5 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 5 ? "#000" : "" }}
            >
              Account Verification
            </h2>
          </div>
        </div>
        <div className={styles.disctwo}>
          <div style={{ display: step === 1 ? "" : "none" }}>
            <StepOnePersonal
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
            />
          </div>
          <div style={{ display: step === 2 ? "" : "none" }}>
            <StepTwoPersonal
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 3 ? "" : "none" }}>
            <StepThreePersonal
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 4 ? "" : "none" }}>
            <StepFourPersonal
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
            />
          </div>
          <div style={{ display: step === 5 ? "" : "none" }}>
            <StepFivePersonal
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycPersonalUser;
