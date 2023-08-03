import styles from '../seeAllTodayRate/seealltodayrate.module.scss'
import Nigeria from "../../../assets/svg/nigeria.svg"
import southafrica from "../../../assets/svg/southafrica.svg"
import ghana from "../../../assets/svg/ghana.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { useState } from "react"

const SeeAllTodayRate = () => {
    const [product] = useState([
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '1,000.00', available: '$4,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 2, flagone: <img src={southafrica} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '420.00', available: '$2,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 3, flagone: <img src={ghana} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '690.00', available: '$5,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 4, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '950.00', available: '$4,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '1,000.00', available: '$4,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 2, flagone: <img src={southafrica} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '420.00', available: '$2,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 3, flagone: <img src={ghana} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '690.00', available: '$5,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
        { id: 4, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '950.00', available: '$4,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
        
    ])
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className="table-responsive">
                    <table className="table table-striped table-borderless">
                        <thead className={styles.tablerow}>
                            <tr>
                                <th className={styles.tablehead} scope="col" style={{paddingLeft: "2em"}}>Currency Pair</th>
                                <th className={styles.tablehead} scope="col">Rate</th>
                                <th className={styles.tablehead} scope="col">Available Amount</th>
                                <th className={styles.tablehead} scope="col">Sending Method</th>
                                <th className={styles.tablehead} scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((prod, index) =>
                                <tr style={{ backgroundColor: prod.id % 2 === 1 ? '#232332' : '' }} key={index}>
                                    <td className={styles.tabledata} style={{paddingLeft: "2em"}}>
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
            </div>
        </div>
    );
}

export default SeeAllTodayRate;