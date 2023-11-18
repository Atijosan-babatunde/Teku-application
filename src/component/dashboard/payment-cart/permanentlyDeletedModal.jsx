import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../assets/png/cancel.png'
import styles from '../payment-cart/css/permanentlydeletedmodal.module.scss'
import deleteimg from '../../../assets/svg/deleteimg.svg'
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal"


const PermernentlyDeletedModal = ({ handleModalPermanentlyDel }) => {
    const [showModalTransaction, setShowModalTransaction] = useState(false)
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalPermanentlyDel)

    function handleModalShowTransfer() {
        setShowModalTransaction(!showModalTransaction)
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalPermanentlyDel}>
                    <img src={cancel} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <img src={deleteimg} alt="" className={styles.imgcontent}/>
                    <h1 className={styles.h1content}>Transaction deleted successfully</h1>
                    <p className={styles.pcontent}>
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
                    <p className={styles.downbutton} onClick={handleModalShowTransfer}>Make a quick transfer</p>
                    {showModalTransaction && (
                      <TransferModal {...{ handleModalShowTransfer }} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default PermernentlyDeletedModal;