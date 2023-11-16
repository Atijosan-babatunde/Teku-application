import styles from "../KYC/CSS/steponebusiness.module.scss";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from "../../../../../assets/png/steponeimg.png";
import { useState } from "react";

const StepOneBusiness = ({
  setStep,
  setSelectId,
  handleChange,
  formData,
  setFormData,
}) => {
  const [menu, setMenu] = useState(false);
  const [menuTwo, setMenuTwo] = useState(false);

  const [documentuser] = useState([
    { id: 1, documentuser: "partnership" },
    { id: 2, documentuser: "Sole proprietor" },
  ]);

  const [Localgov] = useState([
    { id: 1, Localgov: "Congo" },
    { id: 2, Localgov: "Taraba" },
  ]);

  const validate = () => {
    return (
      !formData.rcNumber ||
      !formData.businessAddress ||
      !formData.businessType ||
      !formData.localGov
    );
  };

  const goToStepTwo = () => {
    setStep(2);
  };

  return (
    <div className={styles.parent}>
      <h1 className={styles.stepnumber}>Step 1</h1>
      <div className={styles.disctwocontent}>
        <div className={styles.writeup}>
          <h2 className={styles.headtwo}>Business details</h2>
          <p className={styles.paratwo}>
            Input the necessary information below to verify your business.
          </p>
        </div>

        <img src={steponeimg} alt="" />
      </div>

      <h2 className={styles.rowname}>RC Number</h2>
      <input
        className={styles.calculatorinput}
        type="number"
        name="rcNumber"
        value={formData.rc_number}
        placeholder="Enter your registration number"
        onChange={(e) => handleChange(e)}
        onKeyDown={(e) =>
          ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()
        }
      />

      <h2 className={styles.rowname}>Business type</h2>

      <Dropdown
        isOpen={menu}
        toggle={() => setMenu(!menu)}
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="a" className={styles.dropdownToggle}>
          <div>{formData.businessType}</div>
          <div className={styles.dropDownrow}>
            <div style={{ color: "#777E90" }}>
              <MdArrowDropDown style={{ fontSize: "2em" }} />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className={styles.dropBox}>
          {documentuser.map((documentuser, index) => (
            <DropdownItem
              className={styles.value}
              key={index}
              onClick={() =>
                handleChange({
                  target: {
                    name: "businessType",
                    value: documentuser.documentuser,
                  },
                })
              }
            >
              {documentuser.documentuser}{" "}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

      <h2 className={styles.rowname}>Business address</h2>
      <input
        className={styles.calculatorinput}
        value={formData.businessAddress}
        type="text"
        name="businessAddress"
        placeholder="Enter your business address"
        onChange={(e) => handleChange(e)}
      />

      <h2 className={styles.rowname}>Local government area/State</h2>

      <Dropdown
        isOpen={menuTwo}
        toggle={() => setMenuTwo(!menuTwo)}
        style={{ cursor: "pointer" }}
      >
        <DropdownToggle tag="a" className={styles.dropdownToggle}>
          <div>{formData.localGov}</div>
          <div className={styles.dropDownLocalGov}>
            <div style={{ color: "#777E90" }}>
              <MdArrowDropDown style={{ fontSize: "2em" }} />
            </div>
          </div>
        </DropdownToggle>
        <DropdownMenu className={styles.dropBox}>
          {Localgov.map((Localgov, index) => (
            <DropdownItem
              className={styles.value}
              key={index}
              onClick={() =>
                handleChange({
                  target: { name: "localGov", value: Localgov.Localgov },
                })
              }
            >
              {Localgov.Localgov}{" "}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>

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

export default StepOneBusiness;
