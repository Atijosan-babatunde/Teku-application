import styles from "../transaction/css/askforrefund.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import can from "../../../assets/png/can.png";
import documentKYCIcon from "../../../assets/svg//documentKYC.svg";
import ConfirmRefund from "./confirmRefund";
import useCloudinaryImageUpload from "../../../shared/Hooks/useCloudinaryImageUpload";
import customAxios from "../../../shared/utils/axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AskForRefund = ({ handleAskForRefund, selectedTransaction }) => {
  const [loading, setLoading] = useState(false);
  console.log(selectedTransaction);
  const [formData, setFormData] = useState({
    paymentDocument: "",
    transactionId: selectedTransaction?.id ?? "",
    paymentInstruction: "string",
    reason: "string",
  });
  const [uploadImage] = useCloudinaryImageUpload();

  const modalref = useRef();
  useOnClickOutside(modalref, handleAskForRefund);

  const validate = () => {
    return !formData.paymentDocument || !formData.reason;
  };

  const handleChangeDoc = async (event, name) => {
    const fileUploaded = event.target.files[0];
    setFormData({ ...formData, paymentDocument: fileUploaded });
  };

  const handleClickDoc = () => {
    documentdoc.current.click();
  };

  const documentdoc = useRef(null);

  // // SHOW MODAL
  const [showModalRefund, setShowModalRefund] = useState(false);
  function handleModalConfirmRefund() {
    setShowModalRefund(!showModalRefund);
  }

  const handleRequestRefund = async () => {
    setLoading(true);
    let secureUrl = "";
    if (formData.paymentDocument) {
      try {
        secureUrl = await uploadImage(formData.paymentDocument);
        console.log(secureUrl);
        setFormData({ ...formData, paymentDocument: secureUrl });
      } catch (error) {
        console.error("Error uploading image to Cloudinary:", error);
        setLoading(false);
        return;
      }
    }

    try {
      const response = await customAxios.post(`/refund/request`, formData);
      setLoading(false);
      toast.success("Refund Request Sent Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      setShowModalRefund(!showModalRefund);
    } catch (err) {
      toast.error(err, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoading(false);
    }
  };

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleAskForRefund}>
          <img src={can} alt="close modal" />
        </div>
        <div className={styles.contentholder}>
          <p className={styles.pmodal}>Amount paid</p>
          <h1 className={styles.hmodal}>{selectedTransaction.baseCurrency.code} {selectedTransaction.amount}</h1>
        </div>
        <div className={styles.downcontent}>
          <div className={styles.addrefund}>Add refund account</div>
          <div className={styles.driverdoc}>
            <input
              type="file"
              accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
              ref={documentdoc}
              onChange={(e) => handleChangeDoc(e)}
              style={{ display: "none" }}
            />
            <img src={documentKYCIcon} alt="" />
            {formData.paymentDocument ? (
              <p onClick={handleClickDoc}>{formData.paymentDocument.name}</p>
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
            type="text"
            placeholder="Input recipient account details."
            cols="30"
            onChange={(e) =>
              setFormData({ ...formData, paymentInstruction: e.target.value })
            }
          />
          <p className={styles.green}>0/500</p>

          <h2 className={styles.rowname}>Reason for refund</h2>
          <textarea
            className={styles.calculatorinputtextarea}
            type="text"
            placeholder="Write here"
            cols="30"
            onChange={(e) =>
              setFormData({ ...formData, reason: e.target.value })
            }
          />
          <p className={styles.green}>0/500</p>

          <div className={styles.requestbut}>
            <button
              className={styles.btnrequest}
              disabled={validate()}
              onClick={handleRequestRefund}
              style={{
                backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
              }}
            >
              Send
            </button>
            {showModalRefund && (
              <ConfirmRefund {...{ handleModalConfirmRefund }} selectedTransaction={selectedTransaction} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskForRefund;
