import styles from '../KYC/CSS/stepthreepersonal.module.scss'
import steptwoimg from '../../../../../assets/png/phonecall.png'
import PhoneInput from "react-phone-input-2";
import { useState } from 'react';
import { BsArrowLeft } from 'react-icons/bs'




const StepThreePersonal = ({ setStep }) => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [firstSpace, setFirstSpace] = useState('')
    const [secondSpace, setSecondSpace] = useState('')
    const [thirdSpace, setThirdSpace] = useState('')
    const [fourthSpace, setFourthSpace] = useState('')
    const [fifthSpace, setFifthSpace] = useState('')
    const [sixthSpace, setSixthSpace] = useState('')
    const [stepOtp, setStepOtp] = useState(1)
    const changePhoneNumber = (e) => {
        setPhoneNumber(e);
    };

    const validate = () => {
        return !phoneNumber
    }

    const submitOtp = () => {
        return !firstSpace || !secondSpace || !thirdSpace || !fourthSpace || !fifthSpace || !sixthSpace
    }

    const goToStepFour = () => {
        setStep(4)
    }

    const goToStepTwo = () => {
        setStep(2)
    }
    const goToStepThree = () => {
        setStepOtp(1)
    }

    return (
        <div className={styles.parent}>
            {stepOtp === 1 && (
                <div>
                    <h1 className={styles.stepnumber}><BsArrowLeft onClick={goToStepTwo} className={styles.arrow} />Step 3</h1>
                    <div className={styles.disctwocontent}>
                        <div className={styles.writeup}>
                            <h2 className={styles.headtwo}>Phone number verification</h2>
                            <p className={styles.paratwo}>Input your phone number where an OTP authentication code will be sent to complete this process.</p>
                        </div>

                        <img src={steptwoimg} alt="" />
                    </div>

                    <div className={styles.holder}>
                        <h2 className={styles.rowname}>Phone number</h2>
                        <fieldset className="phone-number-input-wrap">
                            <PhoneInput required
                                placeholder="Enter phone number"
                                country={"ng"}
                                value={phoneNumber}
                                onChange={changePhoneNumber}
                                containerClass="input-phone-container"
                                inputClass="input-class-for-phone-number"
                            />
                        </fieldset>
                    </div>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            disabled={validate()}
                            onClick={() => setStepOtp(2)}
                            style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                        >
                            Request OTP
                        </button>
                    </div>
                </div>
            )
            }

            {
                stepOtp === 2 && (
                    <div>
                        <h1 className={styles.stepnumber}><BsArrowLeft onClick={goToStepThree} className={styles.arrow} />Step 3</h1>
                        <div className={styles.disctwocontent}>
                            <div className={styles.writeup}>
                                <h2 className={styles.headtwo}>Phone number verification</h2>
                                <p className={styles.paratwo}>Input your phone number where an OTP authentication code will be sent to complete this process.</p>
                            </div>

                            <img src={steptwoimg} alt="" />
                        </div>

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
                                disabled={submitOtp()}
                                onClick={goToStepFour}
                                style={{ backgroundColor: submitOtp() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                            <p className={styles.donthave}>
                                Resend code: <span>60secs</span>
                            </p>
                        </div>

                    </div>
                )
            }

        </div >
    );
}

export default StepThreePersonal;