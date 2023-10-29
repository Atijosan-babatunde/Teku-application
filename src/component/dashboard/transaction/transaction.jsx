import { useState } from "react";
import styles from "../transaction/css/transaction.module.scss";
import RequestModal from "../currency-rate/RequestModal/requestModal";
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal";
import TransactionSection from "./transactionSection";

const Transactions = () => {
  // MODAL STATE

  const [showModal, setShowModal] = useState(false);

  function handleModalShowTransfer() {
    setShowModal(!showModal);
  }

  // MODAL STATE

  const [showModalRequest, setShowModalRequest] = useState(false);

  function handleModalShowRequest() {
    setShowModalRequest(!showModalRequest);
  }
  return (
    <div className={styles.parent}>
      <div className={styles.content}>
        <div className={styles.contenthead}>
          <h1 className={styles.tophead}>Transactions</h1>
          <p className={styles.toppara}>
            Check out our available currencies across the world.
          </p>
        </div>
        <div className={styles.requestbut}>
          <button
            className={styles.btnrequest}
            onClick={handleModalShowRequest}
          >
            Request money
          </button>
          {showModalRequest && <RequestModal {...{ handleModalShowRequest }} />}
          <button
            className={styles.btnrequest}
            onClick={handleModalShowTransfer}
          >
            Transfer money
          </button>
          {showModal && <TransferModal {...{ handleModalShowTransfer }} />}
        </div>
      </div>
      <div className={styles.herosection}>
        <TransactionSection />
      </div>
    </div>
  );
};

export default Transactions;
