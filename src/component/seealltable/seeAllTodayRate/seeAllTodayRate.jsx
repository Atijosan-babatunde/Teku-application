import styles from '../seeAllTodayRate/seealltodayrate.module.scss'
import { BsFillSendFill } from 'react-icons/bs';
import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { GetCurrencyPair } from "../../../shared/redux/slices/landing.slices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAppSelector } from '../../../shared/redux/reduxHooks';
import international from "../../../assets/svg/international.svg"

const SeeAllTodayRate = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyData = useAppSelector((state) => state.landing.getAllCurrencyData)
    const [data] = useState(currencyData)

    useEffect(() => {
        getCurrencyPair();
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
                                            <button className={styles.btn}>Request <BsFillSendFill /></button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className={styles.inner}>
                            {data.length < 1 && (
                                <div>
                                    <img src={international} alt="middleimage" />
                                    <div className={styles.nocurrency}>
                                        No rate today
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default SeeAllTodayRate;