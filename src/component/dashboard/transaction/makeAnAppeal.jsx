/* eslint-disable no-unused-vars */
import styles from "../transaction/css/makeanappeal.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import can from "../../../assets/png/can.png";
import documentKYCIcon from "../../../assets/svg//documentKYC.svg";
import ConfirmAppealPayment from "./confirmAppealPayment";

const MakeAnAppeal = ({ handleMakeAnAppeal }) => {
  const [appealDocument, setAppealDocument] = useState("");
  const [filesName, setFilesName] = useState("");
  const [formData, setFormData] = useState({});

  const modalref = useRef();
  useOnClickOutside(modalref, handleMakeAnAppeal);

  const validate = () => {
    return !appealDocument;
  };

  const handleChangeDoc = async (event, name) => {
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

  const handleClickDoc = () => {
    documentdoc.current.click();
  };

  const documentdoc = useRef(null);

  // SHOW MODAL
  const [showModalAppeal, setShowModalAppeal] = useState(false);
  function handleModalConfirm() {
    setShowModalAppeal(!showModalAppeal);
  }

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div className={styles.closemodal} onClick={handleMakeAnAppeal}>
          <img src={can} alt="close modal" />
        </div>
        <div className={styles.contentholder}>
          <p className={styles.pmodal}>Amount paid</p>
          <h1 className={styles.hmodal}>ZAR 50,000</h1>
        </div>
        <div className={styles.downcontent}>
          <h2 className={styles.rowname}>Make an appeal</h2>
          <textarea
            className={styles.calculatorinputtextarea}
            type="number"
            placeholder="Write here"
            cols="30"
            onChange={(e) => setAppealDocument(e.target.value)}
          />
          <p className={styles.green}>0/500</p>
          <div className={styles.or}>OR</div>

          <div className={styles.driverdoc}>
            <input
              type="file"
              accept=".png,.jpeg,.jpg,.doc,.docx,.pdf"
              ref={documentdoc}
              onChange={(e) => handleChangeDoc(e)}
              style={{ display: "none" }}
            />
            <img src={documentKYCIcon} alt="" />
            {filesName ? (
              <p onClick={handleClickDoc}>{filesName}</p>
            ) : (
              <p onClick={handleClickDoc}>
                Tap to upload payment document/invoice. <br />
                <span> Maximum file size: 5mb</span>
              </p>
            )}
          </div>

          <div className={styles.requestbut}>
            <button
              className={styles.btnrequest}
              disabled={validate()}
              onClick={handleModalConfirm}
              style={{
                backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " ",
              }}
            >
              Send message
            </button>
            {showModalAppeal && (
              <ConfirmAppealPayment {...{ handleModalConfirm }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeAnAppeal;
