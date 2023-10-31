import React, { useRef } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../assets/png/cancel.png'
import styles from '../payment-cart/css/permanentlydeletedmodal.module.scss'
import deleteimg from '../../../assets/svg/deleteimg.svg'


const PermernentlyDeletedModal = ({ handleModalPermanentlyDel }) => {
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalPermanentlyDel)

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalPermanentlyDel}>
                    <img src={cancel} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <img src={deleteimg} alt="" />
                    <h1>Transaction deleted successfully</h1>
                    <p>
                        Payment transaction has been deleted.
                    </p>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // onClick={handleModalShow}
                        >
                            Done
                        </button>
                    </div>
                    <p className={styles.downbutton}>Make a quick transfer</p>
                </div>
            </div>
        </div>
    );
}

export default PermernentlyDeletedModal;