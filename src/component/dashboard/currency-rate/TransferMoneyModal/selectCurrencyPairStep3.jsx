/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import styles from "../../currency-rate/TransferMoneyModal/css/selectcurrencypairstep3.module.scss";
import Select from "react-select";
import React, { useState, useMemo, useRef, useEffect } from "react";
import countryList from "react-select-country-list";
import { MdArrowDropDown } from "react-icons/md";
import { BsArrowLeft } from "react-icons/bs";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import documentKYCIcon from "../../../../assets/svg//documentKYC.svg";
import plus from "../../../../assets/png/plus.png";
import { FiSearch } from "react-icons/fi";
import attached from "../../../../assets/png/attached.png";
import { useDispatch } from "react-redux";
import { RecipientUser } from "../../../../shared/redux/slices/recipient.slices";
import { GetRecipientUsersData } from "../../../../shared/redux/slices/recipient.slices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppSelector } from "../../../../shared/redux/reduxHooks";
import ReactLoading from "react-loading";
import AddRecipientModal from "../../recipients/addRecipientModal";
import useCloudinaryImageUpload from "../../../../shared/Hooks/useCloudinaryImageUpload";

const SelectCurrencyPairStep3 = ({
  setStep,
  country,
  setCountry,
  paymentInstruction,
  setPaymentInstruction,
  purpose,
  setPurpose,
  paymentDocument,
  paymentMethod,
  setPaymentMethod,
  setPaymentDocument,
  paymentDescription,
  setPaymentDescription,
  setPaymentDocumentCloud,
}) => {
  const options = useMemo(() => countryList().getData(), []);
  const [menuThree, setMenuThree] = useState(false);
  const [checkBox, setCheckBox] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const recipientUser = useAppSelector(
    (state) => state.recipient.allRecipientUsers
  );
  // const recipientData = useAppSelector(
  //   (state) => state.transaction.getRecipientUsersData
  // );
  const [uploadImage] = useCloudinaryImageUpload();
  const [data] = useState(recipientUser);
  const [datacoming, setDatacoming] = useState([]);

  const recipientUserData = async () => {
    setLoading(true);

    let secureUrl = "";
    if (paymentDocument) {
      try {
        secureUrl = await uploadImage(paymentDocument);
        setPaymentDocumentCloud(secureUrl);
        console.log(secureUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setLoading(false);
        return;
      }
    }
    let body = {
      country: country?.label,
      paymentInstruction: paymentInstruction,
      paymentMethod: paymentMethod,
      paymentPurpose: purpose,
      paymentDocument: secureUrl,
      paymentDescription: paymentDescription,
    };

    dispatch(RecipientUser(body))
      .unwrap()
      .then(() => {
        setLoading(false);
        // navigate('/welcome-personal-data')
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  const getRecipientUser = () => {
    setLoading(true);
    dispatch(GetRecipientUsersData())
      .unwrap()
      .then((res) => {
        setDatacoming(res.recipient);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoading(false);
      });
  };

  useEffect(() => {
    getRecipientUser();
  }, [getRecipientUser]);

  function handleModalShow() {
    setShowModal(!showModal);
  }

  const changeHandler = (value) => {
    setCountry(value);
  };

  const changeValueThree = async (e) => {
    setPurpose(e.amount);
  };

  const [amountThree] = useState([
    { id: 1, amount: "School Fees" },
    { id: 2, amount: "Medical Bills" },
    { id: 3, amount: "Family & Friends" },
    { id: 4, amount: "Good and Services" },
    { id: 5, amount: "Other" },
  ]);

  const handleChangeDoc = async (event, name) => {
    const fileUploaded = event.target.files[0];
    setPaymentDocument(fileUploaded);
  };

  const handleClickDoc = () => {
    documentdoc.current.click();
  };

  const documentdoc = useRef(null);

  const validate = () => {
    return purpose === "" || !paymentInstruction || !country;
  };

  console.log(paymentDocument);
  const goToStepFour = () => {
    if (checkBox) {
      recipientUserData();
      setStep(4);
    }
    setStep(4);
  };

  const goToStepTwo = () => {
    setStep(2);
  };

  if (datacoming) {
    return (
      <div className={styles.parent}>
        <p className={styles.firsttext} onClick={goToStepTwo}>
          <BsArrowLeft className={styles.arrow} />
          Go back to Enter Amount
        </p>
        <h1 className={styles.contenth1}>Add recipient</h1>
        <p className={styles.contentp}>
          Input the necessary information below to complete this transaction.
        </p>
        <div className={styles.content}>
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
              maxLength={500}
              value={paymentInstruction}
              onChange={(e) => setPaymentInstruction(e.target.value)}
            />
            <p className={styles.green}>{paymentInstruction.length}/500</p>

            <h2 className={styles.rowname}>Payment description (optional)</h2>
            <textarea
              className={styles.calculatorinputtextarea}
              type="number"
              placeholder="Write here"
              cols="10"
              value={paymentDescription}
              onChange={(e) => setPaymentDescription(e.target.value)}
            />

            <div className={styles.clickhere}>
              <input
                type="checkbox"
                onChange={(e) => setCheckBox(e.target.value)}
              />
              Save beneficiary details
            </div>

            <div className={styles.requestbut}>
              <button
                className={styles.btnrequest}
                disabled={validate()}
                onClick={goToStepFour}
                style={{
                  backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
                }}
              >
                {loading ? (
                  <ReactLoading
                    color="white"
                    width={25}
                    height={25}
                    type="spin"
                  />
                ) : (
                  "Continue"
                )}
              </button>
            </div>
          </div>

          <div className={styles.disctwo}>
            <div className={styles.sidedata}>
              <div className={styles.recipiantplus}>
                <h1>Choose recipient</h1>
                <div className={styles.plusholder} onClick={handleModalShow}>
                  <img src={plus} alt="" />
                </div>
              </div>
              {showModal && <AddRecipientModal {...{ handleModalShow }} />}
              <div className={styles.search}>
                <input type="text" placeholder="Search" />
                <span>
                  <FiSearch />
                </span>
              </div>

              {datacoming.map((prod, index) => (
                <div className={styles.recipiantdata} key={index}>
                  <div className={styles.recipiantbody}>
                    <div className={styles.recipiantflex}>
                      <p className={styles.paraone}>TF</p>
                      <h1 className={styles.headone}>{prod.paymentPurpose}</h1>
                      <p
                        className={styles.paratwo}
                        style={{ textTransform: "capitalize" }}
                      >
                        {prod.paymentMethod.split("_")?.join(" ").toLowerCase()}
                      </p>
                    </div>
                    <h2 className={styles.recipiantotherdata}>
                      {prod.paymentDescription?.slice(0, 30)}...
                    </h2>
                    <div className={styles.recipiantdataflex}>
                      <h2>
                        <span>
                          <img src={attached} alt="" />
                        </span>{" "}
                        {prod.paymentDocument?.slice(0, 15)}.png
                      </h2>
                      <p>{prod.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ToastContainer />
      </div>
    );
  }
};

export default SelectCurrencyPairStep3;
