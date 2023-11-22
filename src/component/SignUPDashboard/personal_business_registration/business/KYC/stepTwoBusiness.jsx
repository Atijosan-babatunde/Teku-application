/* eslint-disable no-unused-vars */
import styles from "../KYC/CSS/steptwobusiness.module.scss";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from "../../../../../assets/png/steponeimg.png";
import { useState } from "react";
import documentKYCIcon from "../../../../../assets/svg/documentKYC.svg";
import { BsArrowLeft } from "react-icons/bs";
import { useRef } from "react";

const StepTwoBusiness = ({
  setStep,
  setSelectId,
  handleChange,
  formData,
  setFormData,
}) => {
  const [menu, setMenu] = useState(false);

  const [documentdoc] = useState([
    { id: 1, documentdoc: "International passport" },
    { id: 2, documentdoc: "National ID" },
    { id: 3, documentdoc: "Government ID" },
  ]);

  const [documenttwo] = useState([
    { id: 1, documenttwo: "International passport" },
    { id: 2, documenttwo: "National ID" },
    { id: 3, documenttwo: "Government ID" },
  ]);

  const [documentthree] = useState([
    { id: 1, documentthree: "International passport" },
    { id: 2, documentthree: "National ID" },
    { id: 3, documentthree: "Government ID" },
  ]);

//   const chooseIdentificationDoc = async (e) => {
//     setDropDownValue(e.documentdoc);
//   };

//   const chooseIdentificationDocTwo = async (e) => {
//     setDropDownValueTwo(e.documenttwo);
//   };

//   const chooseIdentificationDocThree = async (e) => {
//     setDropDownValueThree(e.documentthree);
//   };

  const validate = () => {
    return !formData.bvnNo;
  };

  // || !directorName || !directorNameTwo || !directorNameThree || dropDownValue === "Select" || dropDownValueTwo === "Select" || dropDownValueThree === "Select"

  // UPLOAD DOCUMENT ONE
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

  //UPLOAD DOCUMENT TWO
//   const handleChangeTwo = async (event, name) => {
//     const fileUploaded = event.target.files[0];
//     setFilesNameTwo(fileUploaded.name);
//     getBase64(fileUploaded, async (result) => {
//       setFormData((curr) => {
//         return { ...curr, [name]: result };
//       });
//     });
//   };

  const documentsecond = useRef(null);

//   //UPLOAD DOCUMENT THREE
//   const handleChangeThree = async (event, name) => {
//     const fileUploaded = event.target.files[0];
//     setFilesNameThree(fileUploaded.name);
//     getBase64(fileUploaded, async (result) => {
//       setFormData((curr) => {
//         return { ...curr, [name]: result };
//       });
//     });
//   };

  const documentthird = useRef(null);

  //HANDLE FUNCTIONS
  const handleClick = () => {
    document.current.click();
  };

  const handleClickTwo = () => {
    documentsecond.current.click();
  };

  const handleClickThree = () => {
    documentthird.current.click();
  };

  const [instruction] = useState([
    { id: 1, instruction: "Upload the right document." },
    { id: 2, instruction: "Document must be visible and clear" },
    { id: 3, instruction: "Only Government Issued Documents are acceptable." },
    { id: 4, instruction: "Uploaded document must have your photo." },
  ]);

  const goToStepThree = () => {
    setStep(3);
  };

  const goToStepOne = () => {
    setStep(1);
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>
        <BsArrowLeft onClick={goToStepOne} className={styles.arrow} />
        Step 2
      </h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Director’s Details</h2>
          <p className={styles.paratwo}>
            Upload the necessary documents below to verify the director’s
            identity.
          </p>
        </div>

        <img src={steponeimg} alt="" />
      </div>

      <h2 className={styles.rowname}>Name of director</h2>
      <input
        className={styles.calculatorinput}
        type="text"
        name="directorName"
        value={formData.directorName}
        placeholder="Enter Director's name"
        onChange={(e) => handleChange(e)}
      />

      <h2 className={styles.rowname}>BVN</h2>
      <input
        className={styles.calculatorinput}
        type="number"
        name="bvnNo"
        value={formData.bvnNo}
        placeholder="Enter your Bvn Number"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) =>
          ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
        }
      />

      <h2 className={styles.rowname}>Choose identification document</h2>

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
          {documentdoc.map((documentdoc, index) => (
            <DropdownItem
              className={styles.value}
              key={index}
              onClick={() =>
                handleChange({
                  target: {
                    name: "identification",
                    value: documentdoc.documentdoc,
                  },
                })
              }
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
            name="document"
            onChange={handleChange}
            style={{ display: "none" }}
          />
          <img src={documentKYCIcon} alt="" />
          {formData.document ? (
            <p onClick={handleClick}>{formData.document.name}</p>
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

      {/* {selectId && (
        <>
          <h2 className={styles.rowname}>Name of director 2</h2>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your registration number"
            onChange={(e) => setDirectorNameTwo(e.target.value)}
          />

          <h2 className={styles.rowname}>Choose identification document</h2>

          <Dropdown
            isOpen={menuTwo}
            toggle={() => setMenuTwo(!menuTwo)}
            style={{ cursor: "pointer" }}
          >
            <DropdownToggle tag="a" className={styles.dropdownToggle}>
              <div>{dropDownValueTwo}</div>
              <div className={styles.dropDownrow}>
                <div style={{ color: "#777E90" }}>
                  <MdArrowDropDown style={{ fontSize: "2em" }} />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className={styles.dropBox}>
              {documenttwo.map((documenttwo, index) => (
                <DropdownItem
                  className={styles.value}
                  key={index}
                  onClick={() => chooseIdentificationDocTwo(documenttwo)}
                >
                  {documenttwo.documenttwo}{" "}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className={styles.split}>
            <div className={styles.driverdoc}>
              <input
                type="file"
                accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                ref={documentsecond}
                onChange={(e) => handleChangeTwo(e)}
                style={{ display: "none" }}
              />
              <img src={documentKYCIcon} alt="" />
              {filesNameTwo ? (
                <p onClick={handleClickTwo}>{filesNameTwo}</p>
              ) : (
                <p onClick={handleClickTwo}>
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

          <h2 className={styles.rowname}>Name of director 3</h2>
          <input
            className={styles.calculatorinput}
            type="text"
            placeholder="Enter your registration number"
            onChange={(e) => setDirectorNameThree(e.target.value)}
          />

          <h2 className={styles.rowname}>Choose identification document</h2>

          <Dropdown
            isOpen={menuThree}
            toggle={() => setMenuThree(!menuThree)}
            style={{ cursor: "pointer" }}
          >
            <DropdownToggle tag="a" className={styles.dropdownToggle}>
              <div>{dropDownValueThree}</div>
              <div className={styles.dropDownrow}>
                <div style={{ color: "#777E90" }}>
                  <MdArrowDropDown style={{ fontSize: "2em" }} />
                </div>
              </div>
            </DropdownToggle>
            <DropdownMenu className={styles.dropBox}>
              {documentthree.map((documentthree, index) => (
                <DropdownItem
                  className={styles.value}
                  key={index}
                  onClick={() => chooseIdentificationDocThree(documentthree)}
                >
                  {documentthree.documentthree}{" "}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
          <div className={styles.split}>
            <div className={styles.driverdoc}>
              <input
                type="file"
                accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                ref={documentthird}
                onChange={(e) => handleChangeThree(e)}
                style={{ display: "none" }}
              />
              <img src={documentKYCIcon} alt="" />
              {filesNameThree ? (
                <p onClick={handleClickThree}>{filesNameThree}</p>
              ) : (
                <p onClick={handleClickThree}>
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
        </>
      )} */}

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

export default StepTwoBusiness;
