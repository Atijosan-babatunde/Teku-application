import styles from "../../currency-rate/TransferMoneyModal/css/selectcurrencypairstep6.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import documentKYCIcon from "../../../../assets/svg//documentKYC.svg";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import PaymentProccessing from "../RequestModal/paymentProcessing";
import TransactionServices from "../../../../shared/redux/services/transaction.services";
import useCloudinaryImageUpload from "../../../../shared/Hooks/useCloudinaryImageUpload";

const SelectCurrencyPairStep6 = ({
  setStep,
  country,
  totalAmount,
  purpose,
  dropDownValueBank,
  dropDownValue,
  dropDownValueTwo,
  paymentDocument,
  paymentInstruction,
  paymentDescription,
  paymentMethod,
  confirmation,
  setConfirmation,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [uploadImage] = useCloudinaryImageUpload();

  const handleChangeReciept = async (event, name) => {
    const fileUploaded = event.target.files[0];
    setConfirmation(fileUploaded);
  };

  const document = useRef(null);

  const handleClickReciept = () => {
    document.current.click();
  };

  const handleTransaction = async () => {
    setLoading(true);
    let secureUrl = "";
    let confirmationUrl = "";
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
    if (confirmation) {
      try {
        confirmationUrl = await uploadImage(confirmation);
        console.log(confirmationUrl);
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setLoading(false);
        return;
      }
    }

    const payload = {
      baseCurrencyId: dropDownValue?.id,
      pairCurrencyId: dropDownValueTwo?.id,
      amount: totalAmount,
      country: country?.label,
      purpose,
      paymentInstruction,
      paymentDescription,
      paymentMethod,
      paymentDocument: secureUrl,
      bankName: dropDownValueBank?.bankName,
      confirmation: confirmationUrl,
    };
    const endpoint = `/transaction`;
    try {
      const response = await TransactionServices.performTrasaction(
        endpoint,
        payload
      );
      console.log(response);
      setLoading(false);
      setShowModal(!showModal);
    } catch (e) {
      toast.error(`Network error, Kindly check internet connections`);
    }
  };

  const goToStepFive = () => {
    setStep(5);
  };

  // MODAL STATE
  function handleModalShow() {
    setShowModal(!showModal);
  }

  return (
    <div className={styles.parent}>
      <p className={styles.firsttext} onClick={goToStepFive}>
        <BsArrowLeft className={styles.arrow} />
        Go back to Payment details
      </p>
      <h1 className={styles.contenth1}>Payment confirmation</h1>
      <p className={styles.contentp}>Upload payment receipt.</p>

      <div className={styles.content}>
        <div className={styles.driverdoc}>
          <input
            type="file"
            accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
            ref={document}
            onChange={(e) => handleChangeReciept(e)}
            style={{ display: "none" }}
          />
          <img src={documentKYCIcon} alt="" />
          {confirmation ? (
            <p onClick={handleClickReciept}>{confirmation.name}</p>
          ) : (
            <p onClick={handleClickReciept}>
              Tap to upload payment receipt <br />
              <span> Maximum file size: 5mb</span>
            </p>
          )}
        </div>

        <div className={styles.requestbut}>
          <button className={styles.btnrequest} onClick={handleTransaction}>
            {loading ? (
              <ReactLoading color="white" width={25} height={25} type="spin" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        {showModal && <PaymentProccessing {...{ handleModalShow }} />}
      </div>
    </div>
  );
};

export default SelectCurrencyPairStep6;
