import styles from "../KYC/CSS/kycbusinessuser.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../../../shared/Hooks/useOnClickOutside";
import cancel from "../../../../../assets/png/cancel.png";
import StepOneBusiness from "./stepOneBusiness";
import StepTwoBusiness from "./stepTwoBusiness";
import StepThreeBusiness from "./stepThreeBusiness";
import StepFourBusiness from "./stepFourBusiness";
import StepFiveBusiness from "./stepFiveBusiness";
import StepSixBusiness from "./stepSixBusiness";

const KycBusinessUser = ({ handleModalShowKyc }) => {
  const [selectId, setSelectId] = useState(false);
  const [formData, setFormData] = useState({
    rc_number: "",
    business_type: "",
    businessAddress: "",
    localGov: "",
    DirectorName: "",
    bvnNo: "",
    identification: "",
    DirectorAddress: "",
    document: null,
    selfie: null,
    businessPhone: "",
    addressDocument: null,
  });
  const [step, setStep] = useState(1);
  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShowKyc);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file" && files.length > 0) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  console.log(formData);

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleModalShowKyc}>
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
              Business details
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
              Director’s details
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
              Selfie ID
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
              Business phone number verification
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
              Address
            </h2>
          </div>
          <div
            className={styles.line}
            style={{ borderColor: step >= 5 ? "#7FE881" : "" }}
          ></div>

          <div className={styles.step}>
            <div
              className={styles.round}
              style={{ background: step >= 6 ? "#7FE881" : "" }}
            ></div>
            <h2
              className={styles.sideNav}
              style={{ color: step >= 6 ? "#000" : "" }}
            >
              Account Verification
            </h2>
          </div>
        </div>
        <div className={styles.disctwo}>
          <div style={{ display: step === 1 ? "" : "none" }}>
            <StepOneBusiness
              setStep={setStep}
              setSelectId={setSelectId}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 2 ? "" : "none" }}>
            <StepTwoBusiness
              setStep={setStep}
              selectId={selectId}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 3 ? "" : "none" }}>
            <StepThreeBusiness
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 4 ? "" : "none" }}>
            <StepFourBusiness
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 5 ? "" : "none" }}>
            <StepFiveBusiness
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
          <div style={{ display: step === 6 ? "" : "none" }}>
            <StepSixBusiness
              setStep={setStep}
              handleChange={handleChange}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KycBusinessUser;
