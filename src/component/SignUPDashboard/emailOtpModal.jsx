import styles from '../SignUPDashboard/CSS/emailotpmodal.module.scss'
import React, { useRef, useState } from "react"
import useOnClickOutside from "../../shared/Hooks/useOnClickOutside"
import cancel from '../../assets/png/cancel.png'
import flyimg from '../../assets/svg/flymodal.svg'
import { useNavigate } from "react-router-dom"

const EmailOtpModal = ({ handleModalShow }) => {
    const [firstSpace, setFirstSpace] = useState('')
    const [secondSpace, setSecondSpace] = useState('')
    const [thirdSpace, setThirdSpace] = useState('')
    const [fourthSpace, setFourthSpace] = useState('')
    const [fifthSpace, setFifthSpace] = useState('')
    const [sixthSpace, setSixthSpace] = useState('')
    const navigate = useNavigate()
    const modalref = useRef()

    useOnClickOutside(modalref, handleModalShow)

    const goToWelcome = () => {
        navigate("/welcome")
    }

    const validate = () => {
        return !firstSpace || !secondSpace || !thirdSpace || !fourthSpace || !fifthSpace || !sixthSpace 
    }
    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div>
                    <div className={styles.closemodal} onClick={handleModalShow}>
                        <img src={cancel} alt="close modal" />
                    </div>
                    <div className={styles.contentholder}>
                        <img src={flyimg} alt="" />
                        <h2 className={styles.modalhead}>OTP Verification</h2>
                        <p className={styles.modalpara}>Enter the 5 digit OTP verification code that you have received in your registered Email address.</p>
                        <div className={styles.otp}>
                            <input className={styles.inputotp} type="text" onChange={e => setFirstSpace(e.target.value)} maxlength="1" />
                            <input className={styles.inputotp} type="text" onChange={e => setSecondSpace(e.target.value)} maxlength="1" />
                            <input className={styles.inputotp} type="text" onChange={e => setThirdSpace(e.target.value)} maxlength="1" />
                            <input className={styles.inputotp} type="text" onChange={e => setFourthSpace(e.target.value)} maxlength="1" />
                            <input className={styles.inputotp} type="text" onChange={e => setFifthSpace(e.target.value)} maxlength="1" />
                            <input className={styles.inputotp} type="text" onChange={e => setSixthSpace(e.target.value)} maxlength="1" />
                        </div>

                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                                disabled={validate()}
                                onClick={goToWelcome}
                                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <p className={styles.donthave}>
                    Resend code: <span>60secs</span>
                </p>
            </div>
        </div >
    );
}

export default EmailOtpModal;