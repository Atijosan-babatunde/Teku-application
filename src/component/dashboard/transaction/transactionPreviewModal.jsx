/* eslint-disable no-unused-vars */
import styles from "../transaction/css/transactionpreview.module.scss";
import completed from "../transaction/css/completepreviewmodal.module.scss";
import declined from "../transaction/css/cancelledpreviewmodal.module.scss";
import React, { useEffect, useRef, useState } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import can from "../../../assets/png/can.png";
import bigcancel from "../../../assets/svg/bigcancel.svg";
import loading from "../../../assets/svg/loading.svg";
import approve from "../../../assets/svg/approveimg.svg";
import download from "../../../assets/svg/download.svg";
import shear from "../../../assets/svg/shearimg.svg";
import AskForRefund from "./askForRefund";
import { Margin, usePDF } from "react-to-pdf";

const TransactionPreview = ({
  handleModalShowTransactionPreview,
  selectedTransaction,
}) => {
  const [showThis, setShowThis] = useState(false);
  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShowTransactionPreview);

  const [seconds, setSeconds] = useState(24 * 60 * 60); // 24hrs in seconds
  const [download, setDownload] = useState(false);

  // SHOW MODAL
  const [showModalAskRefund, setShowModalAskRefund] = useState(false);
  function handleAskForRefund() {
    setShowModalAskRefund(!showModalAskRefund);
  }

  const getAmountPercentage = (amount) => {
    const totalAmount = (parseFloat(amount) / 100) * 10;
    return totalAmount;
  };

  function handleDownload() {
    setDownload(true)
  }

  useEffect(() => {
    download && toPDF()
  }, [download]);

  const { toPDF, targetRef } = usePDF({
    filename: "transactionDoc.pdf",
    page: { margin: Margin.MEDIUM }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);
  const formatTime = time => {
    const hour = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hour}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className={styles.parent} >
      <div className={styles.content} 
        // ref={modalref}
        ref={targetRef}
      >
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
              <div className={styles.firstdivp} style={{ textTransform: "capitalize" }}>
                {selectedTransaction.paymentMethod.split('_')?.join(' ').toLowerCase()}
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
                  <div className={styles.firstdivp} style={{ textTransform: "capitalize" }}>
                    {selectedTransaction.paymentMethod.split('_')?.join(' ').toLowerCase()}
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


          <div style={{ display: download && "none" }}>
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
              {showModalAskRefund && (
                <AskForRefund
                  {...{ handleAskForRefund }}
                  selectedTransaction={selectedTransaction}
                />
              )}
            </div>

            <div className={styles.btnflex}>
              <button className={styles.firstbtn}>
                Share{" "}
                <span>
                  <img src={shear} alt="" />
                </span>
              </button>


              <button className={styles.firstbtn} onClick={handleDownload}>
                Download{" "}
                <span>
                  <img src={download} alt="" />
                </span>
              </button>
            </div>

            <div className={styles.processed}>Payment is being processed...</div>

            <div className={styles.time}>{formatTime(seconds)}</div>
            <div className={styles.hms}>HRS : MM : SS</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPreview;
