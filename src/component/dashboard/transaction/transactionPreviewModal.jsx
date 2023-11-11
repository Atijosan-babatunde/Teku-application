import styles from "../transaction/css/transactionpreview.module.scss";
import React, { useRef, useState } from "react";
import useOnClickOutside from "../../../shared/Hooks/useOnClickOutside";
import can from "../../../assets/png/can.png";
import loading from "../../../assets/svg/loading.svg";
import download from "../../../assets/svg/download.svg";
import shear from "../../../assets/svg/shearimg.svg";
import AskForRefund from "./askForRefund";

const TransactionPreview = ({ handleModalShowTransactionPreview, selectedTransaction }) => {
  const [showThis, setShowThis] = useState(false);
  const modalref = useRef();
  useOnClickOutside(modalref, handleModalShowTransactionPreview);

  console.log(selectedTransaction)
  // // SHOW MODAL
  const [showModalAskRefund, setShowModalAskRefund] = useState(false);
  function handleAskForRefund() {
    setShowModalAskRefund(!showModalAskRefund);
  }

  const getAmountPercentage = (amount) => {
    const totalAmount = (parseFloat(amount) / 100) * 10;
    return totalAmount;
  };

//   {
//     "id": "1b9b4450-d305-44ed-8bef-8a751a5d9730",
//     "baseCurrencyId": "213676cd-a1dc-4b2a-a911-9938ddd8ac0d",
//     "pairCurrencyId": "1baf6c25-ef17-48cf-8ee6-272db2d711e2",
//     "amount": 1000,
//     "country": "Åland Islands",
//     "purpose": "Food bills",
//     "status": "PROCESSING",
//     "paymentDocument": "https://res.cloudinary.com/dvcjgxou9/image/upload/v1699740336/xkys0twipp9sirwhdwzr.png",
//     "paymentInstruction": "bhjbafhjbwjhf",
//     "paymentDescription": "vvhgv",
//     "paymentMethod": "BANK_TRANSFER",
//     "bankName": "Renner and Sons",
//     "confirmation": "https://res.cloudinary.com/dvcjgxou9/image/upload/v1699740337/i3przjbs1wjktwq5vxrz.png",
//     "ownerId": "4bda1953-0ab4-49af-9107-08223e1926fb",
//     "createdAt": "2023-11-11T22:05:37.706Z",
//     "updatedAt": "2023-11-11T22:05:37.706Z",
//     "baseCurrency": {
//         "id": "213676cd-a1dc-4b2a-a911-9938ddd8ac0d",
//         "icon": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1084.jpg",
//         "code": "IDR",
//         "name": "Somali Shilling",
//         "createdAt": "2023-11-11T21:07:57.374Z",
//         "updatedAt": "2023-11-11T21:07:57.374Z"
//     },
//     "pairCurrency": {
//         "id": "1baf6c25-ef17-48cf-8ee6-272db2d711e2",
//         "icon": "https://avatars.githubusercontent.com/u/76705902",
//         "code": "DKK",
//         "name": "Lilangeni",
//         "createdAt": "2023-11-11T21:07:57.505Z",
//         "updatedAt": "2023-11-11T21:07:57.505Z"
//     }
// }

  return (
    <div className={styles.parent}>
      <div className={styles.content} ref={modalref}>
        <div
          className={styles.closemodal}
          onClick={handleModalShowTransactionPreview}
        >
          <img src={can} alt="close modal" />
        </div>
        <div className={styles.contentholder}>
          <img src={loading} alt="" />
          <h1 className={styles.h1holder}>Payment in progress</h1>
        </div>
        <div className={styles.downcontent}>
          <p className={styles.ptag}>Amount to be paid:</p>
          <h2 className={styles.h2tag}>{selectedTransaction.baseCurrency.code} {selectedTransaction.amount}</h2>

          <div className={styles.firstdiv}>
            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>To:</div>
              <div className={styles.firstdivpbold}>{selectedTransaction?.paymentDescription}</div>
            </div>
            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Date:</div>
              <div className={styles.firstdivpbold}>{selectedTransaction.createdAt}</div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Time:</div>
              <div className={styles.firstdivpbold}>{selectedTransaction.createdAt}</div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Bank:</div>
              <div className={styles.firstdivp}>{selectedTransaction.bankName}</div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Payment method:</div>
              <div className={styles.firstdivp}>{selectedTransaction.paymentMethod}</div>
            </div>

            <div className={styles.firstdivflex}>
              <div className={styles.firstdivh1}>Transfer charge:</div>
              <div className={styles.firstdivp}>{selectedTransaction.baseCurrency.code} getAmountPercentage(selectedTransaction.amount)</div>
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
                  <div className={styles.firstdivpbold}>{selectedTransaction.country}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Delivery date:</div>
                  <div className={styles.firstdivpbold}>{selectedTransaction.updatedAt}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Delivery time:</div>
                  <div className={styles.firstdivp}>{selectedTransaction.updatedAt}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Purpose of payment:</div>
                  <div className={styles.firstdivp}>{selectedTransaction.purpose}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Payment description:</div>
                  <div className={styles.firstdivp}>{selectedTransaction.paymentDescription}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Sending method:</div>
                  <div className={styles.firstdivp}>{selectedTransaction.paymentMethod}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Currency pair:</div>
                  <div className={styles.firstdivp}>{`${selectedTransaction.baseCurrency.code} / ${selectedTransaction.pairCurrency.code}`}</div>
                </div>

                <div className={styles.firstdivflex}>
                  <div className={styles.firstdivh1}>Transaction ID:</div>
                  <div className={styles.firstdivp}>{selectedTransaction.id}</div>
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
            <button className={styles.firstbtn}>
              Share{" "}
              <span>
                <img src={shear} alt="" />
              </span>
            </button>
            <button className={styles.firstbtn}>
              Download{" "}
              <span>
                <img src={download} alt="" />
              </span>
            </button>
          </div>

          <div className={styles.processed}>Payment is being processed...</div>

          <div className={styles.time}>24:00:00</div>
          <div className={styles.hms}>HRS : MM : SS</div>
        </div>
      </div>
    </div>
  );
};

export default TransactionPreview;
