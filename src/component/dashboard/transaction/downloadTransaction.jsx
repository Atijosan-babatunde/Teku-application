import styles from "../transaction/css/transactionpreview.module.scss";
import completed from "../transaction/css/completepreviewmodal.module.scss";
import declined from "../transaction/css/cancelledpreviewmodal.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import can from "../../../assets/png/can.png";
import bigcancel from "../../../assets/svg/bigcancel.svg";
import loading from "../../../assets/svg/loading.svg";
import approve from "../../../assets/svg/approveimg.svg";
import download from "../../../assets/svg/download.svg";




const DownloadTransaction = ({
    handleModalShowTransactionPreview,
        selectedTransaction,
  }) => {
    const [showThis, setShowThis] = useState(false);
    const modalref = useRef();
    useOnClickOutside(modalref, handleModalShowTransactionPreview);

    // // SHOW MODAL
    const [showModalAskRefund, setShowModalAskRefund] = useState(false);
    function handleAskForRefund() {
        setShowModalAskRefund(!showModalAskRefund);
    }

    const getAmountPercentage = (amount) => {
        const totalAmount = (parseFloat(amount) / 100) * 10;
        return totalAmount;
    };


    return (
        <div className={styles.parent}>
            <div className={styles.content} ref={modalref}>
                <div
                    className={styles.closemodal}
                    onClick={handleModalShowTransactionPreview}
                >
                    <img src={can} alt="close modal" />
                </div>
                {selectedTransaction.status === "SUCCESSFUL" ? (
                    <div className={completed.contentholder}>
                        <img src={approve} alt="" />
                        <h1 className={completed.contentholdh1}>Payment successful</h1>
                    </div>
                ) : selectedTransaction.status === "CANCELLED" ? (
                    <div className={declined.contentholder}>
                        <img src={bigcancel} alt="" />
                        <h1 className={declined.h1holder}>Payment declined</h1>
                    </div>
                ) : (
                    <div className={styles.contentholder}>
                        <img src={loading} alt="" />
                        <h1 className={styles.h1holder}>Payment in progress</h1>
                    </div>
                )}

                <div className={styles.downcontent}>
                    <p className={styles.ptag}>Amount to be paid:</p>
                    <h2 className={styles.h2tag}>
                        {selectedTransaction.baseCurrency.code} {selectedTransaction.amount}
                    </h2>

                    <div className={styles.firstdiv}>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>To:</div>
                            <div className={styles.firstdivpbold}>
                                {selectedTransaction?.paymentDescription}
                            </div>
                        </div>
                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Date:</div>
                            <div className={styles.firstdivpbold}>
                                {selectedTransaction.createdAt}
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Time:</div>
                            <div className={styles.firstdivpbold}>
                                {selectedTransaction.createdAt}
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Bank:</div>
                            <div className={styles.firstdivp}>
                                {selectedTransaction.bankName}
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Payment method:</div>
                            <div className={styles.firstdivp}>
                                {selectedTransaction.paymentMethod}
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Transfer charge:</div>
                            <div className={styles.firstdivp}>
                                {selectedTransaction.baseCurrency.code}{" "}
                                {getAmountPercentage(selectedTransaction.amount)}
                            </div>
                        </div>

                        <div className={styles.firstdivflex}>
                            <div className={styles.firstdivh1}>Transaction ID:</div>
                            <div className={styles.firstdivp}>{selectedTransaction.id}</div>
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
                                    <div className={styles.firstdivpbold}>
                                        {selectedTransaction.country}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Delivery date:</div>
                                    <div className={styles.firstdivpbold}>
                                        {selectedTransaction.updatedAt}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Delivery time:</div>
                                    <div className={styles.firstdivp}>
                                        {selectedTransaction.updatedAt}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Purpose of payment:</div>
                                    <div className={styles.firstdivp}>
                                        {selectedTransaction.purpose}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Payment description:</div>
                                    <div className={styles.firstdivp}>
                                        {selectedTransaction.paymentDescription}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Sending method:</div>
                                    <div className={styles.firstdivp}>
                                        {selectedTransaction.paymentMethod}
                                    </div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Currency pair:</div>
                                    <div
                                        className={styles.firstdivp}
                                    >{`${selectedTransaction.baseCurrency.code} / ${selectedTransaction.pairCurrency.code}`}</div>
                                </div>

                                <div className={styles.firstdivflex}>
                                    <div className={styles.firstdivh1}>Transaction ID:</div>
                                    <div className={styles.firstdivp}>
                                        {selectedTransaction.id}
                                    </div>
                                </div>
                            </div>
                            <button className={styles.firstbtndown}>
                                Download proof of payment{" "}
                                <span>
                                    <img src={download} alt="" />
                                </span>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className={styles.view} onClick={() => setShowThis(true)}>
                                View beneficiary details
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DownloadTransaction;