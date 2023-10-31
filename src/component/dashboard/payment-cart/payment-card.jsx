import { useState } from "react";
import TransferModal from "../currency-rate/TransferMoneyModal/transferModal";
import styles from "../payment-cart/css/paymentCard.module.scss";
import PaymentSection from "./paymentSection";
import { useNavigate } from "react-router-dom";

const PaymentCart = () => {
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
          <h1 className={styles.tophead}>Payment cart</h1>
          <p className={styles.toppara}>
            You can view your saved incomplete payments.
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
        <PaymentSection />
      </div>
    </div>
  );
};

export default PaymentCart;
