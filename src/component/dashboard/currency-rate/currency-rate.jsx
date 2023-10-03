import { useState } from 'react';
import styles from '../currency-rate/css/currencyRate.module.scss'
import Currencysectiontable from './currencysectiontable';
import TransferModal from './TransferMoneyModal/transferModal';

const CurrencyRate = () => {
     // MODAL STATE

     const [showModal, setShowModal] = useState(false)

     function handleModalShowTransfer() {
         setShowModal(!showModal)
     }
    return (
        <div>
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.contenthead}>
                        <h1 className={styles.tophead}>Currency rates</h1>
                        <p className={styles.toppara}>Check out our available currencies across the world</p>
                    </div>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                            onClick={handleModalShowTransfer}
                        >
                            Transfer money
                        </button>
                    </div>
                    {showModal && <TransferModal {...{handleModalShowTransfer}}/>}
                </div>

                <div className={styles.herosection}>
                    <Currencysectiontable />
                </div>
            </div>
        </div>
    );
}

export default CurrencyRate;