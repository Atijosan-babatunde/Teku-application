import styles from "../seeAllCurrencyAlert/seeallcurrencyalert.module.scss"
import international from "../../../assets/svg/international.svg"
// import Nigeria from "../../../assets/svg/nigeria.svg"
// import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { useState, useEffect } from "react";
import { useAppSelector } from '../../../shared/redux/reduxHooks';
import { useDispatch } from 'react-redux';
import { GetCurrencyPair } from "../../../shared/redux/slices/landing.slices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom"
import ReactLoading from "react-loading";

const SeeAllCurrencyAlert = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyData = useAppSelector((state) => state.landing.getAllCurrencyData)
    const [data] = useState(currencyData)
    const navigate = useNavigate()

    useEffect(() => {
        getCurrencyPair();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);


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

    const goToLogin = () => {
        navigate("/login")
    }

    // const [product] = useState([
    //     { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', rate: '1,000.00', available: '$4,000,000.00', method: 'Cash Pickup', process: 'Processing Time: Within 24hrs', action: '' },
    // ])

    if (data) {
        return (
            <div className={styles.parent}>
                <div className={styles.content}>
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
                                            <img src={prod.baseCurrency.icon} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle} >{prod.baseCurrency.code}</span>
                                            <span className={styles.dash}>-</span>
                                            <img src={prod.pairCurrency.icon} alt="" className={styles.flagstyle} />
                                            <span className={styles.flagnamestyle}>{prod.pairCurrency.code}</span>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.rate}</td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>{prod.availableAmount}</td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                            {prod.method}
                                            <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                        </td>
                                        <td className={styles.tabledata} style={{ paddingTop: "1em" }}>
                                            <button className={styles.btn} onClick={goToLogin}>Request <BsFillSendFill /></button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    {loading && (
                        <ReactLoading color="blue" width={25} height={25} type="spin" />
                    )}
                    <div className={styles.inner}>
                        {data.length < 1 && (
                            <div>
                                <img src={international} alt="middleimage" />
                                <div className={styles.nocurrency}>
                                    No currency
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default SeeAllCurrencyAlert;