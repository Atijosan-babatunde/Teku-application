import styles from '../RequestModal/css/step1requestmodal.module.scss'
import nigeria from '../../../../assets/svg/nigeria.svg'
import usa from '../../../../assets/svg/unitedkingdom.svg'
import switchimg from '../../../../assets/png/switch.png'
import { useState } from 'react';

const StepOneRequestModal = ({ setStep }) => {
    const [amount, setAmount] = useState('');
    const [payment, setPayment] = useState('')

    const validate = () => {
        return !amount || !payment
    }

    const goToStepTwo = () => {
        setStep(2)
    }

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <h1>Request details</h1>

                <div className={styles.firstdiv}>
                    <div className={styles.flagholder}>
                        <div className={styles.flagcountry}>
                            <img src={nigeria} alt="" className={styles.flagimg} />
                            <p className={styles.secondhalfp}>NGN</p>
                        </div>
                        <p className={styles.dash}>-</p>
                        <div className={styles.flagcountry}>
                            <img src={usa} alt="" className={styles.flagimg}/>
                            <p className={styles.secondhalfp}>USA</p>
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

                <div className={styles.secondflex}>
                    <div className={styles.firsthalf}>
                        <h2 className={styles.rowname}>Recipient get</h2>
                        <input className={styles.calculatorinput} type="number" onChange={e => setAmount(e.target.value)} onKeyDown={(e) =>["e", "E", "+", "-","."].includes(e.key) && e.preventDefault()}/>
                        <p className={styles.undertext}>Minimum amount: <span>10,000GBP</span></p>

                        <h2 className={styles.rowname}>You pay</h2>
                        <input className={styles.calculatorinput} type="number" onChange={e => setPayment(e.target.value)} onKeyDown={(e) =>["e", "E", "+", "-","."].includes(e.key) && e.preventDefault()}/>
                        <p className={styles.undertext}>Transfer fee: <span>0.00 GBP</span></p>
                    </div>

                    <div className={styles.secondhalf}>
                        <div className={styles.flagcountryf} style={{ marginTop: "1.7000em" }}>
                            <img src={nigeria} alt="" className={styles.flagimgg}  />
                            <p className={styles.secondhalfpara}>NGN</p>
                        </div>

                        <img src={switchimg} alt="" className={styles.middleimg} />
                        <div className={styles.flagcountryf} style={{ marginBottom: "1em" }}>
                            <img src={nigeria} alt="" className={styles.flagimgg}  />
                            <p className={styles.secondhalfpara}>NGN</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.requestbut}>
                <button
                    className={styles.btnrequest}
                    disabled={validate()}
                    onClick={goToStepTwo}
                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                >
                    Continue
                </button>
            </div>
        </div>
    );
}

export default StepOneRequestModal;