import { useState } from "react";
import styles from "../transaction/css/transaction.module.scss";
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal";
import TransactionSection from "./transactionSection";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  // MODAL STATE
  const [showModal, setShowModal] = useState(false);

  function handleModalShowTransfer() {
    setShowModal(!showModal);
  }

  let navigate = useNavigate();
  const goToCurrencyPage = () => {
    navigate("/currency-rate");
  };

 
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
            onClick={goToCurrencyPage}
          >
            Request money
          </button>
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
