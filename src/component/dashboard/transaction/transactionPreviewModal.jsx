import styles from '../transaction/css/transactionpreview.module.scss'
import React, { useRef, useState } from "react"
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside"
import can from '../../../assets/png/can.png'
import loading from '../../../assets/svg/loading.svg'
import download from '../../../assets/svg/download.svg'
import shear from '../../../assets/svg/shearimg.svg'
import AskForRefund from './askForRefund'


const TransactionPreview = ({ handleModalShowTransactionPreview }) => {
    const [showThis, setShowThis] = useState(false)
    const modalref = useRef()
    useOnClickOutside(modalref, handleModalShowTransactionPreview)

    // // SHOW MODAL
    const [showModalAskRefund, setShowModalAskRefund] = useState(false)
    function handleAskForRefund() {
        setShowModalAskRefund(!showModalAskRefund)
    }

    
    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div className={styles.closemodal} onClick={handleModalShowTransactionPreview}>
                    <img src={can} alt="close modal" />
                </div>
                <div className={styles.contentholder}>
                    <img src={loading} alt="" />
                    <h1 className={styles.h1holder}>Payment in progress</h1>
                </div>
                <div className={styles.downcontent}>
                    <p className={styles.ptag}>Amount to be paid:</p>
                    <h2 className={styles.h2tag}>ZAR 50,150</h2>

                    <div className={styles.firstdiv}>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>To:</div>
                            <div className={styles.firstdivpbold}>Teku-PVR</div>
                        </div>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Date:</div>
                            <div className={styles.firstdivpbold}>18 Jun. 2023</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Time:</div>
                            <div className={styles.firstdivpbold}>09:00am</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Bank:</div>
                            <div className={styles.firstdivp}>Providus bank</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Payment method:</div>
                            <div className={styles.firstdivp}>Transfer</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Transfer charge:</div>
                            <div className={styles.firstdivp}>ZAR 150</div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Transaction ID:</div>
                            <div className={styles.firstdivp}>9012345678</div>
                        </div>
                    </div>

                    {showThis ? (
                        <>
                            <div className={styles.firstdivdown}>
                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Recipient details</div>
                                    <div className={styles.firstdivpbold}>Close</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Amount received:</div>
                                    <div className={styles.firstdivpbold}>GBP 40</div>
                                </div>
                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Country:</div>
                                    <div className={styles.firstdivpbold}>United kingdom</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Delivery date:</div>
                                    <div className={styles.firstdivpbold}>18 Jun. 2023</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Delivery time:</div>
                                    <div className={styles.firstdivp}>09:00am</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Purpose of payment:</div>
                                    <div className={styles.firstdivp}>Tuition fees</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Payment description:</div>
                                    <div className={styles.firstdivp}>Coventry university...</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Sending method:</div>
                                    <div className={styles.firstdivp}>Cash pickup</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Currency pair:</div>
                                    <div className={styles.firstdivp}>ZAR/GBP</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Transaction ID:</div>
                                    <div className={styles.firstdivp}>9012345678</div>
                                </div>
                            </div>
                            <button className={styles.firstbtndown}>Download proof of payment <span><img src={download} alt="" /></span></button>
                        </>
                    ) : (
                        <>
                            <div className={styles.view} onClick={() => setShowThis(true)}>View beneficiary details</div>
                        </>
                    )}

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            // disabled={validate()}
                            // onClick={handleModalShow}
                        // style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                        >
                            Done
                        </button>
                    </div>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequestred}
                            onClick={handleAskForRefund}
                        >
                            Ask for refund
                        </button>
                        {showModalAskRefund && <AskForRefund {...{ handleAskForRefund }} />}
                    </div>

                    <div className={styles.btnflex}>
                        <button className={styles.firstbtn}>Share <span><img src={shear} alt="" /></span></button>
                        <button className={styles.firstbtn}>Download <span><img src={download} alt="" /></span></button>
                    </div>

                    <div className={styles.processed}>Payment is being processed...</div>

                    <div className={styles.time}>24:00:00</div>
                    <div className={styles.hms}>HRS : MM : SS</div>
                </div>
            </div>
        </div>
    );
}

export default TransactionPreview;