import styles from "../../currency-rate/TransferMoneyModal/css/selectcurrencypairstep6.module.scss";
import { BsArrowLeft } from "react-icons/bs";
import documentKYCIcon from "../../../../assets/svg//documentKYC.svg";
import { useRef, useState } from "react";
import PaymentProccessing from "../RequestModal/paymentProcessing";

const SelectCurrencyPairStep6 = ({ setStep }) => {
  const [showModal, setShowModal] = useState(false);
  const [filesName, setFilesName] = useState("");
  const [formData, setFormData] = useState({});

  const handleChangeReciept = async (event, name) => {
    const fileUploaded = event.target.files[0];
    setFilesName(fileUploaded.name);
    getBase64(fileUploaded, async (result) => {
      setFormData((curr) => {
        return { ...curr, [name]: result };
      });
    });
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

  const document = useRef(null);

  const handleClickReciept = () => {
    document.current.click();
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
          {filesName ? (
            <p onClick={handleClickReciept}>{filesName}</p>
          ) : (
            <p onClick={handleClickReciept}>
              Tap to upload payment receipt <br />
              <span> Maximum file size: 5mb</span>
            </p>
          )}
        </div>

        <div className={styles.requestbut}>
          <button className={styles.btnrequest} onClick={handleModalShow}>
            Submit
          </button>
        </div>
        {showModal && <PaymentProccessing {...{ handleModalShow }} />}
      </div>
    </div>
  );
};

export default SelectCurrencyPairStep6;
