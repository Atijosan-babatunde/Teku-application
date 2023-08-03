import styles from "../CurrencyAlert/currencyalert.module.scss"
import international from "../../../assets/svg/international.svg"
import Nigeria from "../../../assets/svg/nigeria.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { useState } from "react"

const CurrencyAlert = () => {
    const [product] = useState([
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '1,000.00', available: '$4,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
    ])
    return ( 
        <div className={styles.parent}>
            <div className={styles.content}>
            <div className="table-responsive">
                    <table className="table table-striped table-borderless">
                        <thead className={styles.tablerow}>
                            <tr>
                                <th className={styles.tablehead} scope="col">Currency Pair</th>
                                <th className={styles.tablehead} scope="col">Rate</th>
                                <th className={styles.tablehead} scope="col">Available Amount</th>
                                <th className={styles.tablehead} scope="col">Sending Method</th>
                                <th className={styles.tablehead} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((prod, index) =>
                                <tr style={{ backgroundColor: prod.id % 2 === 1 ? '#232332' : '' }} key={index}>
                                    <td className={styles.tabledata}>
                                        <span className={styles.flagstyle}>{prod.flagone}</span>
                                        <span className={styles.flagnamestyle}>{prod.flagnameone}</span>

                                        <span className={styles.flagstyle}>{prod.flagtwo}</span>
                                        <span className={styles.flagnamestyle}>{prod.flagnametwo}</span>
                                    </td>
                                    <td className={styles.tabledata}>{prod.rate}</td>
                                    <td className={styles.tabledata}>{prod.available}</td>
                                    <td className={styles.tabledata}>
                                        {prod.method}
                                        <div className={styles.tableparagraph}>{prod.process}</div>
                                    </td>
                                    <td className={styles.tabledata}>
                                        <button className={styles.btn}>Request <BsFillSendFill /></button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={styles.inner}>
                    <img src={international} alt="middleimage" />
                    <div className={styles.nocurrency}>
                        No currency
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default CurrencyAlert;