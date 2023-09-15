import styles from '../support/css/sectiontable.module.scss'
import human from '../../../assets/svg/humangroup.svg'
import instagram from '../../../assets/svg/instagramimg.svg'
import facebook from '../../../assets/svg/facebookimg.svg'
import twitter from '../../../assets/svg/twitterimg.svg'
import bankaccount from '../../../assets/svg/bank-account.svg'
import transfer from '../../../assets/svg/transfer.svg'
import creditcard from '../../../assets/svg/credit-card.png'
import cardpayment from '../../../assets/svg/cash-payment.svg'
import { useState } from 'react'


const SectionTable = () => {
    const [textArea, setTextArea] = useState('');

    const validate = () => {
        return !textArea
    }


    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.greybackground}>
                    <div>
                        <h1>We would love to hear <br />from you.</h1>
                        <p>
                            Follow us on our social media pages
                            <span>
                                <img src={instagram} alt="" />
                                <img src={facebook} alt="" />
                                <img src={twitter} alt="" />
                            </span>
                        </p>
                    </div>
                    <img src={human} alt="" />
                </div>

                <div className={styles.discholder}>
                    <div className={styles.discone}>
                        <h2 className={styles.rowname}>Send a message</h2>
                        <textarea
                            className={styles.calculatorinputtextarea}
                            type="number"
                            placeholder="Write here"
                            cols="10"
                            onChange={e => setTextArea(e.target.value)}
                        />

                        <p className={styles.green}>0/500</p>
                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                                disabled={validate()}
                                // onClick={goToStepTwo}
                                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    <div className={styles.disctwo}>
                        <div className={styles.bowholder}>
                            <div className={styles.box}>
                                <img src={bankaccount} alt="" />
                                <h3>How to request money</h3>
                                <p>You can transfer money in three simple steps.</p>
                            </div>
                            <div className={styles.box}>
                                <img src={transfer} alt="" />
                                <h3>How to transfer money</h3>
                                <p>You can transfer money in three simple steps.</p>
                            </div>
                        </div>

                        <div className={styles.bowholder}>
                            <div className={styles.box}>
                                <img src={creditcard} alt="" />
                                <h3>How to ask for refund</h3>
                                <p>You can ask for refund within 6hrs after payment.</p>
                            </div>
                            <div className={styles.box}>
                                <img src={cardpayment} alt="" />
                                <h3>How to make payment</h3>
                                <p>You can transfer money in three simple steps.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SectionTable;