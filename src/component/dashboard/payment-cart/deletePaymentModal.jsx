import React, { useRef } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../assets/png/cancel.png'
import styles from '../payment-cart/css/deletepaymentmodal.module.scss'
import deleteimg from '../../../assets/svg/deleteimg.svg'
import { useState } from "react"
import PermernentlyDeletedModal from "./permanentlyDeletedModal"

const DeletePaymentModal = ({ handleModalShow }) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShow)

     // MODAL STATE

     const [showModalDeleted, setShowModalDeleted] = useState(false)

     function handleModalPermanentlyDel() {
         setShowModalDeleted(!showModalDeleted)
     }
    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShow}>
                    <img src={cancel} alt="close modal" />
                </div>
                 <div className={styles.contentholder}>
                    <img src={deleteimg} alt="" />
                    <h1>Delete payment</h1>
                    <p>
                        Are you sure you want to delete this payment? 
                        This will end this particular transaction.
                    </p>
                 </div>
                 <div className={styles.btnholder}>
                    <div className={styles.canbtn}>
                        <button className={styles.btnorange} onClick={handleModalShow}>Cancel</button>
                    </div>
                    <div className={styles.probtn}>
                        <button className={styles.btnblue} onClick={handleModalPermanentlyDel}>Proceed</button>
                    </div>
                    {showModalDeleted && <PermernentlyDeletedModal {...{handleModalPermanentlyDel}}/>}
                 </div>
            </div>
        </div>
    );
}

export default DeletePaymentModal;