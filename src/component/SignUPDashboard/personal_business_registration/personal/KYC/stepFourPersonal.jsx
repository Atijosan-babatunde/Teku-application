import styles from "../KYC/CSS/stepFourPersonal.module.scss";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import proof from "../../../../../assets/png/proof.png";
import documentKYCIcon from "../../../../../assets/svg/documentKYC.svg";
import { useRef, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

const StepFourPersonal = ({ setStep, handleChange, formData }) => {
  const [dropDownValue, setDropDownValue] = useState("Select");
  const [menu, setMenu] = useState(false);
  const [filesName, setFilesName] = useState("");

  const validate = () => {
    return !formData.address || dropDownValue === "Select" || !filesName;
  };

  const changeValue = async (e) => {
    setDropDownValue(e.documentdoc);
  };

  //   const handleChange = async (event, name) => {
  //     const fileUploaded = event.target.files[0];
  //     setFilesName(fileUploaded.name);
  //     getBase64(fileUploaded, async (result) => {
  //       setFormData((curr) => {
  //         return { ...curr, [name]: result };
  //       });
  //     });
  //   };

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

  const document = useRef(null);

  const handleClick = () => {
    document.current.click();
  };

  const [documentdoc] = useState([
    { id: 1, documentdoc: "Ikeja" },
    { id: 2, documentdoc: "Epe" },
    { id: 3, documentdoc: "Ojota" },
  ]);

  const [instruction] = useState([
    { id: 1, instruction: "Upload the right document." },
    { id: 2, instruction: "Document must be visible and clear" },
    { id: 3, instruction: "Only Government Issued Documents are acceptable." },
    { id: 4, instruction: "Uploaded document must have your photo." },
  ]);

  const goToStepTwo = () => {
    setStep(5);
  };

  const goToStepThree = () => {
    setStep(3);
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
        onChange={(e) => handleChange(e)}
      />

      <h2 className={styles.rowname}>Local Government/State</h2>

      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="a" className={styles.dropdownToggle}>
          <div>{dropDownValue}</div>
          <div className={styles.dropDownrow}>
            <div style={{ color: "#777E90" }}>
              <MdArrowDropDown style={{ fontSize: "2em" }} />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className={styles.dropBox}>
          {documentdoc.map((documentdoc, index) => (
            <DropdownItem
              className={styles.value}
              key={index}
              onClick={() => handleChange(documentdoc)}
            >
              {documentdoc.documentdoc}{" "}
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
            onChange={(e) => handleChange(e)}
            style={{ display: "none" }}
          />
          <img src={documentKYCIcon} alt="" />
          {filesName ? (
            <p onClick={handleClick}>{filesName}</p>
          ) : (
            <p onClick={handleClick}>
              Tap to upload document <br />
              <span> Maximum file size: 5mb</span>
            </p>
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
          disabled={validate()}
          onClick={goToStepTwo}
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
