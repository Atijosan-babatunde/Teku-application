/* eslint-disable no-unused-vars */
import styles from "../KYC/CSS/steponepersonal.module.scss";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from "../../../../../assets/png/steponeimg.png";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getBase64 } from "../../../../../shared/utils/base64";
import customAxios from "../../../../../shared/utils/axios";

const StepOnePersonal = ({ setStep, formData, setFormData, handleChange }) => {
  const [menu, setMenu] = useState(false);
  const [loadingBvn, setLoadingBvn] = useState(false);

  const validate = () => {
    return (
      !formData.bvn_no ||
      !formData.document ||
      formData.documentdoc === "Select"
    );
  };

  const document = useRef(null);

  console.log(formData);

  const documentdoc = [
    "Select",
    "INTERNATION_PASSPORT",
    "NIN",
    "DRIVER_LICENSE",
  ];

  const instruction = [
    "Upload the right document.",
    "Document must be visible and clear",
    "Only Government Issued Documents are acceptable.",
    "Uploaded document must have your photo.",
  ];

  // useEffect(() => {
  //   verifyIdentity();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [searchValue]);

  const verifyIdentity = async () => {
    setLoadingBvn(true);
    try {
      const response = await customAxios.post(`/kyc/verify.identity`, {
        country: "NG",
        id_type: "BVN",
        id_number: "22432917741",
        first_name: "Quadri",
        last_name: "Sikiru",
      });
      console.log(response);

      if (response.data.data.ResultCode === 1020) {
        setLoadingBvn(false);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(error.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoadingBvn(false);
    }
  };

  const base64ToOriginal = (base64Data, type) => {
    switch (type) {
      case "image":
        return `data:image/png;base64,${base64Data}`;
      // Add more cases for other data types (e.g., audio, video, documents) if needed.
      default:
        return base64Data;
    }
  };

  // const getBase64 = (file, cb) => {
  //   let reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = function () {
  //     cb(reader.result);
  //   };
  //   reader.onerror = function (error) {
  //     console.log("Error: ", error);
  //   };
  // };

  const goToStepTwo = () => {
    setStep(2);
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>Step 1</h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Identification Document</h2>
          <p className={styles.paratwo}>
            Upload the necessary document below to verify your identity.
          </p>
        </div>

        <img src={steponeimg} alt="" />
      </div>

      <h2 className={styles.rowname}>BVN</h2>
      <input
        className={styles.calculatorinput}
        type="text"
        max={11}
        min={11}
        name="bvn_no"
        value={formData.bvn_no}
        placeholder="Enter your BVN number"
        onChange={(e) => handleChange(e)}
      />

      <h2 className={styles.rowname}>Choose Identification document</h2>

      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="a" className={styles.dropdownToggle}>
          <div>{formData.identification}</div>
          <div className={styles.dropDownrow}>
            <div style={{ color: "#777E90" }}>
              <MdArrowDropDown style={{ fontSize: "2em" }} />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className={styles.dropBox}>
          {documentdoc.map((option, index) => (
            <DropdownItem
              className={styles.value}
              key={index}
              onClick={() =>
                handleChange({
                  target: { name: "identification", value: option },
                })
              }
            >
              {option}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <div className={styles.split}>
        <div className={styles.driverdoc}>
          <input
            type="file"
            accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
            ref={document}
            name="document"
            onChange={(e) =>
              setFormData({ ...formData, document: e.target.files[0] })
            }
            style={{ display: "none" }}
          />
          {formData.document ? (
            <>
              <img
                src={getBase64(formData.document, (url) => url)}
                alt="Uploaded Document"
              />
              {/* <p onClick={() => document.current.click()}>
                {base64ToOriginal(formData.document, "image")}
              </p> */}
            </>
          ) : (
            <p onClick={() => document.current.click()}>
              Tap to upload document <br />
              <span> Maximum file size: 5mb</span>
            </p>
          )}
        </div>

        <div className={styles.instruction}>
          {instruction.map((instructionText, index) => (
            <div className={styles.innerinstruction} key={index}>
              <div className={styles.greenround}></div>
              <p className={styles.innerp}>{instructionText}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.requestbut}>
        <button
          className={styles.btnrequest}
          disabled={validate()}
          onClick={goToStepTwo}
          style={{
            backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
          }}
        >
          Continue
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StepOnePersonal;
