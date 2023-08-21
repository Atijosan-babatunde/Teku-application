import styles from '../KYC/CSS/kycbusinessuser.module.scss'
import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../../../assets/png/cancel.png'
import StepOneBusiness from './stepOneBusiness'
import StepTwoBusiness from './stepTwoBusiness'
import StepThreeBusiness from './stepThreeBusiness'
import StepFourBusiness from './stepFourBusiness'
import StepFiveBusiness from './stepFiveBusiness'
import StepSixBusiness from './stepSixBusiness'

const KycBusinessUser = ({handleModalShow}) => {
    const [step, setStep] = useState(1)
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShow)


    return ( 
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShow}>
                    <img src={cancel} alt="close modal" />
                </div>
                <div className={styles.discone}>
                    
                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 1 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 1 ? "#000" : "" }}>
                        Business details
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 1 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 2 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 2 ? "#000" : "" }}>
                        Director’s details
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 2 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 3 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 3 ? "#000" : "" }}>
                        Selfie ID
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 3 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 4 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 4 ? "#000" : "" }}>
                        Business phone number verification
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 4 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 5 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 5 ? "#000" : "" }}>
                        Address
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 5 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 6 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 6 ? "#000" : "" }}>
                        Account Verification
                        </h2>
                    </div>
                </div>
                <div className={styles.disctwo}>
                    <div style={{ display: step === 1 ? '' : 'none' }}>
                        <StepOneBusiness  setStep={setStep}/>
                    </div>
                    <div style={{ display: step === 2 ? '' : 'none' }}>
                        <StepTwoBusiness  setStep={setStep}/>
                    </div>
                    <div style={{ display: step === 3 ? '' : 'none' }}>
                        <StepThreeBusiness  setStep={setStep}/>
                    </div>
                    <div style={{ display: step === 4 ? '' : 'none' }}>
                        <StepFourBusiness  setStep={setStep}/>
                    </div>
                    <div style={{ display: step === 5 ? '' : 'none' }}>
                        <StepFiveBusiness  setStep={setStep}/>
                    </div>
                    <div style={{ display: step === 6 ? '' : 'none' }}>
                        <StepSixBusiness  setStep={setStep}/>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default KycBusinessUser;