import styles from '../RequestModal/css/requestmodal.module.scss'
import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../../assets/png/cancel.png'

const RequestModal = ({ handleModalShow }) => {
    const [step, setStep] = useState(1)
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShow)


    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShow}>
                    <img src={cancel} alt="close modal" />
                </div>
                <h1>ksjdbkbdjkbascajsbcsjkbj</h1>
            </div>
        </div>
    );
}

export default RequestModal;