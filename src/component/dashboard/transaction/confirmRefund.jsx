import styles from '../transaction/css/confirmrefund.module.scss'
import React, { useRef } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import can from '../../../assets/png/can.png'
import successimg from '../../../assets/png/boxoneimg.png'



const ConfirmRefund = ({handleModalConfirmRefund}) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalConfirmRefund)

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalConfirmRefund}>
                    <img src={can} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <p className={styles.pmodal}>Amount paid</p>
                    <h1 className={styles.hmodal}>ZAR 50,000</h1>
                </div>
                <div className={styles.downcontent}>

                    <div>
                        <img src={successimg} alt="" />
                        <div className={styles.middleh1}>Refund application sent</div>
                        <div className={styles.middlep}>Kindly check your notification inbox for update.</div>
                    </div>
                    
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // onClick={handleModalShow}
                        >
                            Done
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default ConfirmRefund;