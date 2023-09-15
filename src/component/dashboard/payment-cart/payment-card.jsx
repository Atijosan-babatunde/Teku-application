import { useState } from 'react';
import RequestModal from '../currency-rate/RequestModal/requestModal';
import TransferModal from '../currency-rate/TransferMoneyModal/transferModal';
import styles from '../payment-cart/css/paymentCard.module.scss'
import PaymentSection from './paymentSection';

const PaymentCart = () => {
     // MODAL STATE 

     const [showModal, setShowModal] = useState(false)

     function handleModalShowTransfer() {
         setShowModal(!showModal)
     }
 
     // MODAL STATE 
 
     const [showModalRequest, setShowModalRequest] = useState(false)
 
     function handleModalShowRequest() {
         setShowModalRequest(!showModalRequest)
     }
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <h1>Payment cart</h1>
                    <p>You can view your saved incomplete payments.</p>
                </div>
                <div className={styles.requestbut}>

                    <button
                        className={styles.btnrequest}
                        onClick={handleModalShowRequest}
                    >
                        Request money
                    </button>
                    {showModalRequest && <RequestModal {...{handleModalShowRequest}}/>}
                    <button
                        className={styles.btnrequest}
                        onClick={handleModalShowTransfer}
                    >
                        Transfer money
                    </button>
                    {showModal && <TransferModal {...{handleModalShowTransfer}}/>}
                </div>
            </div>
            <div className={styles.herosection}>
                <PaymentSection />
            </div>
        </div>
    );
}

export default PaymentCart;