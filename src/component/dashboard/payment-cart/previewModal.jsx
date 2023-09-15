import React, { useRef, useState} from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import can from '../../../assets/png/can.png'
import styles from '../payment-cart/css/previewmodal.module.scss'
import loading from '../../../assets/svg/loading.svg'
import PaymentRequestModal from "../currency-rate/RequestModal/paymentRequestModal"

const PreviewModal = ({ handleModalShowPreview }) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShowPreview)

    // MODAL STATE
    const [showModal, setShowModal] = useState(false)

    function handleModalShow() {
        setShowModal(!showModal)
    }
    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShowPreview}>
                    <img src={can} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <img src={loading} alt="" />
                    <h1>Transaction in progress</h1>
                </div>
                <div className={styles.downcontent}>
                    <p>Amount to be paid:</p>
                    <h2>ZAR 50,150</h2>

                    <div className={styles.firstdiv}>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>You pay:</div>
                            <div className={styles.firstdivpbold}>  ZAR = 50,000</div>
                        </div>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Transfer charge:</div>
                            <div className={styles.firstdivpbold}>ZAR 150</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Recipient get:</div>
                            <div className={styles.firstdivpbold}>GBP 40</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Country:</div>
                            <div className={styles.firstdivp}>United Kingdom</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Currency pair:</div>
                            <div className={styles.firstdivp}>ZAR/GBP</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Purpose of payment:</div>
                            <div className={styles.firstdivp}>Tuition fees</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Payment description:</div>
                            <div className={styles.firstdivp}>Coventry university...</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Sending method:</div>
                            <div className={styles.firstdivp}>Cash pickup</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Processing time:</div>
                            <div className={styles.firstdivp}>Within 24hrs</div>
                        </div>
                    </div>
                    <div className={styles.requestbut}>
                    <button
                        className={styles.btnrequest}
                        // disabled={validate()}
                        onClick={handleModalShow}
                        // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                    >
                        Pay now
                    </button>
                    {showModal && <PaymentRequestModal {...{handleModalShow}}/>}
                </div>
                </div>
            </div>
        </div>
    );
}

export default PreviewModal;