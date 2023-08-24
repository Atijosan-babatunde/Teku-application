import styles from '../currency-rate/css/currencyRate.module.scss'
import Currencysectiontable from './currencysectiontable';

const CurrencyRate = () => {
    return (
        <div>
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.contenthead}>
                        <h1>Currency rates</h1>
                        <p>Check out our available currencies across the world</p>
                    </div>
                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                        >
                            Transfer money
                        </button>
                    </div>
                </div>

                <div className={styles.herosection}>
                    <Currencysectiontable />
                </div>
            </div>
        </div>
    );
}

export default CurrencyRate;