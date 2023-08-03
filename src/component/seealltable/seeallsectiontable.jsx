import styles from '../seealltable/seeallsectiontable.module.scss'
import hot from "../../assets/svg/hot.svg"
import ringing from "../../assets/svg/ringing.svg"
import request from "../../assets/svg/request.png"
import { useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import SeeAllTodayRate from './seeAllTodayRate/seeAllTodayRate';
import SeeAllCurrencyAlert from './seeAllCurrencyAlert/seeAllCurrencyAlert';
import SeeAllCustomerRequest from './seeAllCustomRequest/seeAllCustomerRequest';
// import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
// import { MdArrowDropDown } from "react-icons/md";

const SeeAllSectionTable = () => {
    const [showTodayRate, setShowTodayRate] = useState(true)
    const [showCurrencyAlert, setShowCurrencyAlert] = useState(false)
    const [showCustomRequest, setShowCustomRequest] = useState(false)
    // const [dropDownValue, setDropDownValue] = useState('Last 7 days')
    // const [menu, setMenu] = useState(false)
    
    

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
    // const changeValue = async (e) => {
    //     setDropDownValue(e.amount)
    // }

    // const [amount] = useState([
    //     { id: 1, amount: 'Last 12 days' },
    //     { id: 2, amount: 'Last 30 days' },
    //     { id: 3, amount: 'Last 100 days' },
    // ])
    

    return (
        <div className={styles.parent}>
            <div className={styles.content}>
                <div className={styles.buttonrow}>
                    <div className={styles.buttonhead} onClick={gotoTodayRate} style={{ backgroundColor: showTodayRate ? "#fff" : "" }}><img src={hot} alt="hot" />Today's Rate</div>
                    <div className={styles.buttonhead} onClick={gotoCurrency} style={{ backgroundColor: showCurrencyAlert ? "#fff" : "" }}><img src={ringing} alt="ringing" />Currency Alert</div>
                    <div className={styles.buttonhead} onClick={gotoRequest} style={{ backgroundColor: showCustomRequest ? "#fff" : "" }}><img src={request} alt="request" />Make a custom request</div>
                    <div className={styles.buttonseall}>Last 7 days <MdKeyboardArrowRight /></div>
                    {/* <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                        <DropdownToggle tag="a" className={styles.dropdownToggle} >
                            <div className={styles.dropDownValue}>{dropDownValue}</div>
                            <div className={styles.dropDownrow}>
                                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={styles.dropBox}>
                            {amount.map(amount =>
                                <DropdownItem className={styles.value} onClick={() => changeValue(amount)}>{amount.amount} </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown> */}
                </div>
            </div>
             <div style={{ display: showTodayRate ? '' : 'none' }}>
                <SeeAllTodayRate />
            </div>
           <div style={{ display: showCurrencyAlert ? '' : 'none' }}>
                <SeeAllCurrencyAlert />
            </div>
             <div style={{ display: showCustomRequest ? '' : 'none' }}>
                <SeeAllCustomerRequest />
            </div>
        </div>
    );
}

export default SeeAllSectionTable;