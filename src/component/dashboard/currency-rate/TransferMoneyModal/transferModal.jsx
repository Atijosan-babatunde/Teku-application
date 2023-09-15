import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../../shared/Hooks/useOnClickOutside"
import cancel from '../../../../assets/png/cancel.png'
import styles from '../TransferMoneyModal/css/transfermodal.module.scss'
import SelectCurrencyPairStep1 from "./selectCurrencyPairStep1"


const TransferModal = ({ handleModalShowTransfer }) => {
    const [step, setStep] = useState(1)
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShowTransfer)

    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShowTransfer}>
                    <img src={cancel} alt="close modal" />
                </div>
                <div className={styles.discone}>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 1 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 1 ? "#000" : "" }}>
                            Select currency pair
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 1 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 2 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 2 ? "#000" : "" }}>
                            Enter amount
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 2 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 3 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 3 ? "#000" : "" }}>
                            Add recipient
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 3 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 4 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 4 ? "#000" : "" }}>
                            Payment checkout
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 4 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 5 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 5 ? "#000" : "" }}>
                            Payment details
                        </h2>
                    </div>
                    <div className={styles.line} style={{ borderColor: step >= 5 ? "#7FE881" : "" }}></div>

                    <div className={styles.step} >
                        <div className={styles.round} style={{ background: step >= 6 ? "#7FE881" : "" }}></div>
                        <h2 className={styles.sideNav} style={{ color: step >= 6 ? "#000" : "" }}>
                            Payment confirmation
                        </h2>
                    </div>
                </div>
                <div className={styles.disctwo}>
                    <div style={{ display: step === 1 ? '' : 'none' }}>
                        <SelectCurrencyPairStep1 setStep={setStep} />
                    </div>
                     {/*<div style={{ display: step === 2 ? '' : 'none' }}>
                        <StepTwoRequestModal setStep={setStep} />
                    </div>
                    <div style={{ display: step === 3 ? '' : 'none' }}>
                        <StepThreeRequestModal setStep={setStep} />
                    </div>
                    <div style={{ display: step === 4 ? '' : 'none' }}>
                        <StepFourRequestModal setStep={setStep} />
                    </div>
                    <div style={{ display: step === 5 ? '' : 'none' }}>
                        <Step5RequestModal setStep={setStep} />
                    </div> */}
                </div>
            </div>
        </div>
    );
}

export default TransferModal;