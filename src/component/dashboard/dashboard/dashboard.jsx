import styles from "../dashboard/css/dashboard.module.scss"
import styles from '../dashboard/css/dashboard.module.scss'
import boxoneimg from '../../../assets/png/boxoneimg.png'
import put from '../../../assets/svg/put.svg'
import blank from '../../../assets/svg/blank.svg'
import globe from '../../../assets/svg/globe.svg'
import holder from "../../../assets/svg/holder.svg"
import Nigeria from "../../../assets/svg/nigeria.svg"
import Unitedkingdom from "../../../assets/svg/unitedkingdom.svg"
import { BsFillSendFill } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io'
import { useState } from 'react'


const Dashboard = () => {

    const [product] = useState([
        { id: 1, flagone: <img src={Nigeria} className={styles.flagicon} alt="flag" />, flagnameone: 'NGN', flagtwo: <img src={Unitedkingdom} className={styles.flagicon} alt="flag" />, flagnametwo: 'GBP', amount: '1,000.00', purpose: 'Tuition fees', datetime: '21-12-2021, 10:38am', process: 'Processing Time: Within 24hrs', action: '' },
    ])
    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.contenthead}>
                    <h1>Welcome Timothy</h1>
                    <p>Make your seamless transfer today!</p>
                </div>
                <img src={globe} alt="" />
            </div>
            <div className={styles.contentinside}>
                <div className={styles.boxone}>
                    <div className={styles.boxoneflex}>
                        <h2>Make a quick transfer</h2>
                        <img src={boxoneimg} alt="" />
                    </div>
                    <p className={styles.boxonepara}>Send money to all individual across the continent.</p>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                        >
                            Transfer money
                        </button>
                    </div>
                </div>

                <div className={styles.boxone}>
                    <div className={styles.boxoneflex}>
                        <h2>Make a custom request</h2>
                        <img src={put} alt="" />
                    </div>
                    <p className={styles.boxonepara}>We offer you opportunity to make a currency request.</p>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequestcustomise}
                        >
                            Customised request
                        </button>
                    </div>
                </div>

                <div className={styles.boxone}>
                    <div className={styles.boxoneflex}>
                        <h2>View today’s rate</h2>
                        <img src={blank} alt="" />
                    </div>
                    <p className={styles.boxonepara}>Check out updated and available rate.</p>

                    <div className={styles.requestbut}>
                        <button
                            className={styles.btnrequest}
                        >
                            View rate
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.kycreg}>
                <div className={styles.kyccontent}>
                    <h1 className={styles.kych1}>KYC Verification</h1>
                    <div className={styles.kycflex}>
                        <p>
                            You have not done your KYC Verification. Therefore some
                            features are being restricted. Kindly start your KYC Verification
                            process to continue using this application.
                        </p>

                        <h3>Start KYC Verification <IoIosArrowForward className={styles.arrow} /></h3>
                    </div>
                </div>
            </div>


            <div className={styles.contenttable}>
                <div className={styles.tableheader}>
                    <h1 className={styles.headerh1}>Recent transactions</h1>
                    <p>See all <IoIosArrowForward  /></p>
                </div>
                <div className="table-responsive">
                    <table className="table table-striped table-borderless">
                        <thead className={styles.tablerow}>
                            <tr>
                                <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}> Purpose of payment</th>
                                <th className={styles.tablehead} scope="col" style={{ paddingLeft: "2em", paddingBottom: "1.5000em" }}>Amount</th>
                                <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Currency pair</th>
                                <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Date & time</th>
                                <th className={styles.tablehead} scope="col" style={{ paddingBottom: "1.5000em" }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {product.map((prod, index) =>
                                <tr style={{}} key={index}>
                                    <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.purpose}
                                        <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>Cash pickup</span>
                                    </td>

                                    <td className={styles.tabledata} style={{ paddingLeft: "2em", paddingTop: "1.5000em" }}>{prod.amount}
                                        <span className={styles.insidebtn} style={{ backgroundColor: "rgba(240, 243, 255, 1)", borderRadius: "100px", width: "160px" }}>In review</span>
                                    </td>

                                    <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                        <img src={prod.flagone} alt="" className={styles.flagstyle} />
                                        <span className={styles.flagnamestyle} >{prod.flagnameone}</span>
                                        <span className={styles.dash}>-</span>
                                        <img src={prod.flagtwo} alt="" className={styles.flagstyle} />
                                        <span className={styles.flagnamestyle}>{prod.flagnametwo}</span>
                                    </td>
                                    <td className={styles.tabledata} style={{ paddingTop: "1.5000em" }}>
                                        {prod.datetime}
                                        <div className={styles.tableparagraph}>{prod.sendingMethod}</div>
                                    </td>
                                    <td className={styles.tabledata} style={{ paddingTop: "1em" }}>
                                        <button className={styles.btn}>Completed</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                <div className={styles.inner}>
                    {product.length < 1 && (
                        <div>
                            <img src={holder} alt="middleimage" />
                            <div className={styles.nocurrency}>
                                No currency
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;