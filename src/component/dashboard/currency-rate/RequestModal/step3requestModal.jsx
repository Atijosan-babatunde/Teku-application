import { BsArrowLeft } from 'react-icons/bs'
import styles from '../../currency-rate/RequestModal/css/step3requestmodal.module.scss'
import nigeria from '../../../../assets/svg/nigeria.svg'
import usa from '../../../../assets/svg/unitedkingdom.svg'
import attached from '../../../../assets/png/attached.png'

const StepThreeRequestModal = ({ setStep }) => {
    const goToStepFour = () => {
        setStep(4)
    }
    const goToStepTwo = () => {
        setStep(2)
    }
    return (
        <div className={styles.parent}>
            <p className={styles.firsttext} onClick={goToStepTwo}><BsArrowLeft className={styles.arrow} />Go back to Add recipient</p>
            <h1 className={styles.contenth1}>Payment Checkout</h1>
            <p className={styles.contentp}>Input the necessary information below to complete this transaction.</p>

            <div className={styles.content}>
                <div className={styles.firstdiv}>
                    <div className={styles.flagholder}>
                        <div className={styles.flagcountry}>
                            <img src={nigeria} alt="" />
                            <p>NGN</p>
                        </div>
                        <p className={styles.dash}>-</p>
                        <div className={styles.flagcountry}>
                            <img src={usa} alt="" />
                            <p>USA</p>
                        </div>
                    </div>
                    <div className={styles.firstdivflex}>
                        <div className={styles.firstdivh1}>Current rate:</div>
                        <div className={styles.firstdivp}> 1 ZAR = 0.00096 GBP</div>
                    </div>
                    <div className={styles.firstdivflex}>
                        <div className={styles.firstdivh1}>Available amount:</div>
                        <div className={styles.firstdivp}>£ 400,000</div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstdivh1}>Sending method:</div>
                        <div className={styles.firstdivp}>Bank transfer</div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstdivh1}>Minimum order request:</div>
                        <div className={styles.firstdivp}>£ 10,000</div>
                    </div>

                    <div className={styles.firstdivflex}>
                        <div className={styles.firstdivh1}>Processing time:</div>
                        <div className={styles.firstdivp}>Within 24hrs</div>
                    </div>
                </div>

                <div className={styles.seconddiv}>
                    <div className={styles.partone}>
                        <h1 className={styles.partoneh1}>Recipient get</h1>
                        <div className={styles.partonediv}>Amount</div>
                        <div className={styles.partoneflex}>
                            <div className={styles.partoneamount}>40 <span>GBP</span></div>
                        </div>

                        <h1 className={styles.partoneh1}>Recipient details</h1>

                        <div className={styles.partonedown}>
                            <h2>Tuition fees</h2>
                            <p>Coventry university, student number 1012345.</p>
                            <h3><span><img src={attached} alt="" /></span>Document attached</h3>
                            <div className={styles.country}>
                                <div className={styles.countrycode}>UK</div>
                                <button className={styles.redbutton}>View</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.parttwo}>
                        <h1 className={styles.partoneh1}>You pay</h1>
                        <div className={styles.partoneflex}>
                            <div className={styles.partonediv}>Amount</div>
                            <div className={styles.partoneamount}>50,000 <span>ZAR</span></div>
                        </div>
                        <div className={styles.partonediv}>Transfer charge</div>
                        <div className={styles.partoneamount}>150 <span>ZAR</span></div>

                        <div style={{ marginTop: "1.7000em" }}>
                            <div className={styles.partonediv}>Total amount to pay</div>
                            <div className={styles.codeamount}>
                                <h1>ZAR <span>50,000</span></h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.requestbut}>
                    <button
                        className={styles.btnrequest}
                        // disabled={validate()}
                        onClick={goToStepFour}
                        // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StepThreeRequestModal;