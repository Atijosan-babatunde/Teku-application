/* eslint-disable no-unused-vars */
import React, { useRef, useState, useMemo } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import cancel from "../../../assets/png/cancel.png";
import styles from "../recipients/css/addrecipientmodal.module.scss";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import countryList from "react-select-country-list";
import { MdArrowDropDown } from "react-icons/md";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import documentKYCIcon from "../../../assets/svg//documentKYC.svg";
import { useDispatch } from "react-redux";
// import { RecipientUser } from "../../../shared/redux/slices/recipient.slices";
import useCloudinaryImageUpload from "../../../shared/Hooks/useCloudinaryImageUpload";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import ReactLoading from "react-loading";
import customAxios from "../../../shared/utils/axios";

const EditRecipientModal = ({ handleModalShowEdit, recipientData }) => {
  const options = useMemo(() => countryList().getData(), []);
  const [country, setcountry] = useState(recipientData?.country);
  const [paymentMethod, setPaymentMethod] = useState(
    recipientData?.paymentMethod
  );
  const [paymentDocument, setPaymentDocument] = useState(
    recipientData?.paymentDocument
  );
  const [paymentDescription, setPaymentDescription] = useState(
    recipientData?.paymentDescription
  );
  const [purpose, setPurpose] = useState(recipientData?.purpose);
  const [menuThree, setMenuThree] = useState(false);
  const [paymentInstruction, setPaymentInstruction] = useState(
    recipientData?.paymentInstruction
  );
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const recipientUser = useAppSelector(
    (state) => state.recipient.allRecipientUsers
  );
  const [data] = useState(recipientUser);
  const [uploadImage] = useCloudinaryImageUpload();

  let navigate = useNavigate();

  const recipientUserData = async () => {
    setLoading(true);
    let secureUrl = "";
    if (paymentDocument) {
      try {
        secureUrl = await uploadImage(paymentDocument);
        console.log(secureUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setLoading(false);
        return;
      }
    }

    let body = {
      country: country ? country.label : "", // Handle null case
      paymentInstruction: paymentInstruction,
      paymentMethod: paymentMethod,
      paymentPurpose: purpose,
      paymentDocument: secureUrl, // Use the secureUrl from state
      paymentDescription: paymentDescription,
    };

    console.log("BODY", body);

    try {
      const response = await customAxios.put(`/recipient/${recipientData.id}`, body);
      setLoading(false);
      toast.success("Recipient Updated Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
    //   setShowModalRefund(!showModalRefund);
    } catch (err) {
      toast.error(err, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  const changeHandler = (value) => {
    setcountry(value);
  };

  const changeValueThree = async (e) => {
    setPurpose(e.amount);
  };

  const [amountThree] = useState([
    { id: 1, amount: 'School Fees' },
    { id: 2, amount: 'Medical Bills' },
    { id: 3, amount: 'Family & Friends' },
    { id: 4, amount: 'Good and Services' },
    { id: 5, amount: 'Other' },
  ]);

  const handleChangeDoc = async (event, name) => {
    const fileUploaded = event.target.files[0];
    setPaymentDocument(fileUploaded);
  };

  const handleClickDoc = () => {
    documentdoc.current.click();
  };

  const documentdoc = useRef(null);

  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShowEdit);

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleModalShowEdit}>
          <img src={cancel} alt="close modal" />
        </div>
        <h1 className={styles.contenth1}>Add recipient</h1>
        <p className={styles.contentp}>
          Input the necessary information below to complete this transaction.
        </p>
        <div className={styles.contentholder}>
          <div className={styles.discone}>
            <div className={styles.formholdertwo}>
              <h2 className={styles.rowname}>Country</h2>
              <Select
                options={options}
                value={country}
                onChange={changeHandler}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? "#ccccc" : "#ccccc",
                    borderRadius: "8px",
                    height: "49px",
                    marginTop: "14px",
                  }),
                }}
              />
            </div>

            <h2 className={styles.rowname}>Purpose of payment</h2>
            <Dropdown
              isOpen={menuThree}
              toggle={() => setMenuThree(!menuThree)}
              style={{ cursor: "pointer" }}
            >
              <DropdownToggle tag="a" className={styles.dropdownToggle}>
                <div className={styles.dropDownValue}>{purpose}</div>
                <div className={styles.dropDownrow}>
                  <div style={{ color: "#011B6D" }}>
                    <MdArrowDropDown style={{ fontSize: "2em" }} />
                  </div>
                </div>
              </DropdownToggle>
              <DropdownMenu className={styles.dropBox}>
                {amountThree.map((amount, index) => (
                  <DropdownItem
                    className={styles.value}
                    key={index}
                    onClick={() => changeValueThree(amount)}
                  >
                    {amount.amount}{" "}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>

            <div className={styles.driverdoc}>
              <input
                type="file"
                accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
                ref={documentdoc}
                onChange={(e) => handleChangeDoc(e)}
                style={{ display: "none" }}
              />
              <img src={documentKYCIcon} alt="" />
              {paymentDocument ? (
                <p onClick={handleClickDoc}>{paymentDocument.name}</p>
              ) : (
                <p onClick={handleClickDoc}>
                  Tap to upload payment document/invoice. <br />
                  <span> Maximum file size: 5mb</span>
                </p>
              )}
            </div>

            <h2 className={styles.rowname}>Payment instruction</h2>
            <textarea
              className={styles.calculatorinputtextarea}
              type="number"
              placeholder="Input recipient account details."
              cols="30"
              onChange={(e) => setPaymentInstruction(e.target.value)}
              maxLength={500}
              value={paymentInstruction}
            />
            <p className={styles.green}>{paymentInstruction?.length}/500</p>

            <h2 className={styles.rowname}>Payment description (optional)</h2>
            <textarea
              className={styles.calculatorinputtextarea}
              type="number"
              placeholder="Write here"
              cols="10"
              value={paymentDescription}
              onChange={(e) => setPaymentDescription(e.target.value)}
            />

            <div className={styles.requestbut}>
              <button className={styles.btnrequest} onClick={recipientUserData}>
                {loading ? (
                  <ReactLoading
                    color="white"
                    width={25}
                    height={25}
                    type="spin"
                  />
                ) : (
                  "Save"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default EditRecipientModal;
