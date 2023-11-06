import React, { useState, useRef } from "react";
import styles from "../KYC/CSS/stepFourPersonal.module.scss";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import proof from "../../../../../assets/png/proof.png";
import documentKYCIcon from "../../../../../assets/svg/documentKYC.svg";
import { BsArrowLeft } from "react-icons/bs";

const StepFourPersonal = ({ setStep, handleChange, formData }) => {
  const [menu, setMenu] = useState(false);
  const [filesName, setFilesName] = useState("");
  const document = useRef(null);

  const localGovernmentOptions = [
    { id: 1, name: "Ikeja" },
    { id: 2, name: "Epe" },
    { id: 3, name: "Ojota" },
  ];

  const instructionList = [
    "Upload the right document.",
    "Document must be visible and clear",
    "Only Government Issued Documents are acceptable.",
    "Uploaded document must have your photo.",
  ];

  const goToStepThree = () => {
    setStep(3);
  };

  const validate = () => {
    return !formData.address || formData.local_government === "Select" || !filesName;
  };

  const handleDocumentChange = (e) => {
    const fileUploaded = e.target.files[0];
    setFilesName(fileUploaded.name);
    handleChange(e);
  };

  const handleDropdownChange = (selectedLocalGovernment) => {
    handleChange({ target: { name: "local_government", value: selectedLocalGovernment } });
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>
        <BsArrowLeft onClick={goToStepThree} className={styles.arrow} />
        Step 4
      </h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Proof of address</h2>
          <p className={styles.paratwo}>
            Input correctly your address and upload a proof of address.
          </p>
        </div>

        <img src={proof} alt="" />
      </div>

      <h2 className={styles.rowname}>Address</h2>
      <input
        className={styles.calculatorinput}
        type="text"
        name="address"
        value={formData.address}
        placeholder="Enter your house address"
        onChange={handleChange}
      />

      <h2 className={styles.rowname}>Local Government/State</h2>

      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="a" className={styles.dropdownToggle}>
          <div>{formData.local_government}</div>
          <div className={styles.dropDownrow}>
            <div style={{ color: "#777E90" }}>
              <MdArrowDropDown style={{ fontSize: "2em" }} />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className={styles.dropBox}>
          {localGovernmentOptions.map((option) => (
            <DropdownItem
              className={styles.value}
              key={option.id}
              onClick={() => handleDropdownChange(option.name)}
            >
              {option.name}
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
            onChange={handleDocumentChange}
            style={{ display: "none" }}
          />
          <img src={documentKYCIcon} alt="" />
          {filesName ? (
            <p onClick={() => document.current.click()}>{filesName}</p>
          ) : (
            <p onClick={() => document.current.click()}>
              Tap to upload document <br />
              <span> Maximum file size: 5mb</span>
            </p>
          )}
        </div>
        <div className={styles.instruction}>
          {instructionList.map((instruction, index) => (
            <div className={styles.innerinstruction} key={index}>
              <div className={styles.greenround}></div>
              <p className={styles.innerp}>{instruction}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.requestbut}>
        <button
          className={styles.btnrequest}
          disabled={validate()}
          onClick={goToStepThree}
          style={{
            backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFourPersonal;
