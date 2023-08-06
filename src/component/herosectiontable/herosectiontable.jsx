import styles from "../herosectiontable/herosectiontable.module.scss"
import hot from "../../assets/svg/hot.svg"
import ringing from "../../assets/svg/ringing.svg"
import request from "../../assets/svg/request.png"
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react';
import TodayRate from "./TodayRate/todayRate"
import CurrencyAlert from "./CurrencyAlert/currencyAlert"
import CustomRequest from "./CustomRequest/customRequest"



const Herosectiontable = () => {
    const [showTodayRate, setShowTodayRate] = useState(true)
    const [showCurrencyAlert, setShowCurrencyAlert] = useState(false)
    const [showCustomRequest, setShowCustomRequest] = useState(false)

    const gotoTodayRate = () => {
        setShowTodayRate(true)
        setShowCurrencyAlert(false)
        setShowCustomRequest(false)
    }
    const gotoCurrency = () => {
        setShowCurrencyAlert(true)
        setShowTodayRate(false)
        setShowCustomRequest(false)
    }
    const gotoRequest = () => {
        setShowCustomRequest(true)
        setShowCurrencyAlert(false)
        setShowTodayRate(false)
    }
   

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.buttonrow}>
                    <div className={styles.buttonhead} onClick={gotoTodayRate} style={{ backgroundColor: showTodayRate ? "#fff" : "", color: showTodayRate ? "#000" : ""}}><img src={hot} alt="hot" />Today's Rate</div>
                    <div className={styles.buttonhead} onClick={gotoCurrency} style={{ backgroundColor: showCurrencyAlert ? "#fff" : "", color: showCurrencyAlert ? "#000" : ""}}><img src={ringing} alt="ringing" />Currency Alert</div>
                    <div className={styles.buttonhead} onClick={gotoRequest} style={{ backgroundColor: showCustomRequest ? "#fff" : "", color: showCustomRequest ? "#000" : "" }}><img src={request} alt="request" />Make a custom request</div>
                    <div className={styles.search}>
                        <input type="text" placeholder="Search" />
                        <span><FiSearch /></span>
                    </div>
                </div>
            </div>
            <div style={{ display: showTodayRate ? '' : 'none'}}>
                <TodayRate />
            </div>
            <div style={{ display: showCurrencyAlert ? '' : 'none' }}>
                <CurrencyAlert />
            </div>
            <div style={{ display: showCustomRequest ? '' : 'none' }}>
                <CustomRequest />
            </div>
        </div>
    );
}

export default Herosectiontable;