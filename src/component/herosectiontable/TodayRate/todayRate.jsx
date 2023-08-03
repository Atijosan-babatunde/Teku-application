import styles from "../TodayRate/todayrate.module.scss"
import Nigeria from "../../../assets/svg/nigeria.svg"
import southafrica from "../../../assets/svg/southafrica.svg"
import ghana from "../../../assets/svg/ghana.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { useState } from "react"
// import { useDispatch } from 'react-redux';
// import { GetCurrencyPair } from "../../../shared/redux/slices/landing.slices"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { MdKeyboardArrowRight } from 'react-icons/md'



const TodayRate = () => {
    const navigate = useNavigate()
    // const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     getCurrencyPair();
    // }, []);

    // const getCurrencyPair = () => {
    //     console.log("brother")
    //     setLoading(true);
    //     dispatch(GetCurrencyPair())
    //         .unwrap()
    //         .then(() => {
    //             console.log("sister")
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             toast.error(err, {
    //                 position: toast.POSITION.TOP_RIGHT,
    //             });
    //             setLoading(false);
    //         });
    // };

    const seeAllTodayRate = () => {
        navigate("/see-all")
    }

    const [product] = useState([
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
                                <tr style={{}} key={index}>
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
                    <div className={styles.dimbutton} onClick={seeAllTodayRate}>
                        <button className={styles.seeallbut}>See all<MdKeyboardArrowRight /></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default TodayRate;