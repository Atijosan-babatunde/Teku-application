import styles from '../transaction/css/askforrefund.module.scss'
import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import can from '../../../assets/png/can.png'
import documentKYCIcon from '../../../assets/svg//documentKYC.svg'
import ConfirmRefund from './confirmRefund'




const AskForRefund = ({ handleAskForRefund }) => {
    const [appealDocument, setAppealDocument] = useState('')
    const [refundReason, setRefundReason] = useState('')
    const [filesName, setFilesName] = useState("");
    const [formData, setFormData] = useState({});

    const modalref = useRef()
    useOnClickOutside(modalref, handleAskForRefund)

    const validate = () => {
        return !appealDocument || !refundReason
    }

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

    // // SHOW MODAL
    const [showModalRefund, setShowModalRefund] = useState(false)
    function handleModalConfirmRefund() {
        setShowModalRefund(!showModalRefund)
    }


    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleAskForRefund}>
                    <img src={can} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <p className={styles.pmodal}>Amount paid</p>
                    <h1 className={styles.hmodal}>ZAR 50,000</h1>
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
                        {filesName ? (<p onClick={handleClickDoc}>
                            {filesName}
                        </p>) : (<p onClick={handleClickDoc}>
                            Tap to upload payment document/invoice. <br />
                            <span> Maximum file size: 5mb</span>
                        </p>)}
                    </div>


                    <h2 className={styles.rowname}>Payment instruction</h2>
                    <textarea
                        className={styles.calculatorinputtextarea}
                        type="number"
                        placeholder="Input recipient account details."
                        cols="30"
                        onChange={e => setAppealDocument(e.target.value)}
                    />
                    <p className={styles.green}>0/500</p>


                    <h2 className={styles.rowname}>Reason for refund</h2>
                    <textarea
                        className={styles.calculatorinputtextarea}
                        type="number"
                        placeholder="Write here"
                        cols="30"
                        onChange={e => setRefundReason(e.target.value)}
                    />
                    <p className={styles.green}>0/500</p>




                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            disabled={validate()}
                            onClick={handleModalConfirmRefund}
                            style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                        >
                            Send
                        </button>
                        {showModalRefund && <ConfirmRefund {...{ handleModalConfirmRefund }} />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AskForRefund;