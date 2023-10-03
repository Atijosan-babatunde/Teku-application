import styles from '../transaction/css/confirmappealpayment.module.scss'
import React, { useRef } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import can from '../../../assets/png/can.png'
import successimg from '../../../assets/png/boxoneimg.png'



const ConfirmAppealPayment = ({ handleModalConfirm }) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalConfirm)

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalConfirm}>
                    <img src={can} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <p className={styles.pmodal}>Amount paid</p>
                    <h1 className={styles.hmodal}>ZAR 50,000</h1>
                </div>
                <div className={styles.downcontent}>

                    <div>
                        <img src={successimg} alt="" />
                        <div className={styles.middleh1}>Appeal Message sent</div>
                        <div className={styles.middlep}>Kindly check your notification inbox for update.</div>
                    </div>
                    
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // disabled={validate()}
                            // onClick={handleModalShow}
                            // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ConfirmAppealPayment;