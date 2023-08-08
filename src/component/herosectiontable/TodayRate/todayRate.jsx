import styles from "../TodayRate/todayrate.module.scss"
// import Nigeria from "../../../assets/svg/nigeria.svg"
// import southafrica from "../../../assets/svg/southafrica.svg"
// import ghana from "../../../assets/svg/ghana.svg"
// import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { GetCurrencyPair } from "../../../shared/redux/slices/landing.slices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import { MdKeyboardArrowRight } from 'react-icons/md'
import { useAppSelector } from '../../../shared/redux/reduxHooks';
// import ReactLoading from "react-loading";




const TodayRate = () => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyData = useAppSelector((state) => state.landing.getAllCurrencyData)
    const [data] = useState(currencyData)

    useEffect(() => {
        getCurrencyPair();
    },[data]);


    const getCurrencyPair = () => {
        setLoading(true);
        dispatch(GetCurrencyPair())
            .unwrap()
            .then(() => {
                setLoading(false);
            })
            .catch((err) => {
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLoading(false);
            });
    };

    const seeAllTodayRate = () => {
        navigate("/see-all")
    }

    // const [product] = useState([
    //     { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '1,000.00', available: '$4,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
    //     { id: 2, flagone: <img src={southafrica} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '420.00', available: '$2,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
    //     { id: 3, flagone: <img src={ghana} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '690.00', available: '$5,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
    //     { id: 4, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '950.00', available: '$4,000,000.00', method: 'Bank Transfer', process: 'Processing Time: Within 24hrs', action: '' },
    // ])
    if (data) {
        return (
            <div className={styles.parent}>
                <div className={styles.content}>
                    {/* <div className={styles.loader}>
                    {loading && (
                        <ReactLoading color="blue" width={20} height={20} type="spin" />
                    )}
                </div> */}
                    <div className="table-responsive">
                        <table className="table table-striped table-borderless">
                            <thead className={styles.tablerow}>
                                <tr>
                                    <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}>Currency Pair</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}>Rate</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Available Amount</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Sending Method</th>
                                    <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((prod, index) =>
                                    <tr style={{}} key={index}>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>
                                            {/* <span className={styles.flagstyle}></span> */}
                                            {/* <img src={prod.baseCurrency.icon} alt="" style={{width: "20"}} /> */}
                                            <span className={styles.flagnamestyle} >{prod.baseCurrency.code}</span>
                                              -
                                            {/* <span className={styles.flagstyle}></span> */}
                                            {/* <img src={prod.pairCurrency.icon} alt="" style={{width: "20"}} /> */}
                                            <span className={styles.flagnamestyle}>{prod.pairCurrency.code}</span>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.rate}</td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>{prod.availableAmount}</td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            {prod.method}
                                            <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1em" }}>
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
}

export default TodayRate;