import React, { useRef } from "react"
import useOnClickOutside from "../../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../../assets/png/cancel.png'
import styles from '../RequestModal/css/paymentprocessing.module.scss'
import loading from '../../../../assets/svg/loading.svg'
import { useNavigate } from "react-router-dom"

const PaymentProccessing = ({ handleModalShow }) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShow)

    let navigate = useNavigate();
    const goToDashboard = () => {
        navigate("/*");
    };

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div>
                    <div className={styles.closemodal} onClick={handleModalShow}>
                        <img src={cancel} alt="close modal" />
                    </div>
                </div>
                <div className={styles.contentholder}>
                    <img src={loading} alt="" />
                    <h1>24:00:00 <br /><span>HRS : MM : SS</span></h1>

                    <div className={styles.contentdata}>
                        You payment is been processed. This may take up to 24 hours,
                        you will receive a notification in your email of your payment status.
                        If your payment status does not change in the next 24 hours, kindly contact us.
                    </div>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            onClick={goToDashboard}
                        >
                           Continue to dashboard
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default PaymentProccessing;