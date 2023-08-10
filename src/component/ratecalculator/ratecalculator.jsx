import styles from "../ratecalculator/ratecalculator.module.scss"
import middlesvg from "../../assets/svg/middlesvg.svg"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { useState, useEffect } from "react";
import { RequestButton } from "../../shared/utils/button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../shared/redux/reduxHooks";
import { GetCurrencyCode, GetCurrencyRate } from "../../shared/redux/slices/landing.slices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GET_CURRENCY_CALCULATOR } from "../../shared/redux/services/landing.services";



const RateCalculator = () => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('Select')
    const [dropDownValueImage, setDropDownValueImage] = useState('')
    const [dropDownValueTwoImage, setDropDownValueTwoImage] = useState('')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyCode = useAppSelector((state) => state.landing.getAllCurrencyCode)
    const currencyRate = useAppSelector((state) => state.landing.getAllCurrencyRate)
    console.log(currencyRate, "currencyRate")
    const [data] = useState(currencyCode)
    const [recipiantGet, setYouRecipiant] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const [pairCurrency, setPairCurrency] = useState('')
    const sessionbaseCurrency = sessionStorage.getItem("baseCurrency")
    const sessionpairCurrency = sessionStorage.getItem("pairCurrency")
    const conversionAmount = sessionStorage.getItem("conversionAmount")


    


    const getCurrencyCode = () => {
        setLoading(true);
        dispatch(GetCurrencyCode())
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


    const getCurrencyRate = () => {

        setLoading(true);
        dispatch(GetCurrencyRate())
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

    const approvedTransfer = async (data) => {
        console.log("data", data)
        setLoading(true);
        const endpoint = `pair/rate?baseCurrencyId=${baseCurrency}&pairCurrencyId=${baseCurrency}&baseAmount=${conversionAmount}`;

        try {
            const response = await GET_CURRENCY_CALCULATOR(endpoint);
            console.log('approved', response);
            setLoading(false);
            if (response.data.code === '00') {

            }
            else {

            }
        } catch (e) {

        }
    };

    const handleRecipiantGet = (e) => {
        setYouRecipiant(e.target.value)
        sessionStorage.setItem("conversionAmount", e.target.value)
        if (e.target.value && dropDownValue !== "Select" && dropDownValueTwo !== "Select") {
            approvedTransfer(e.target.value)
        }
    }

    const changeValue = async (e) => {
        setDropDownValue(e.code)
        setDropDownValueImage(e.icon)
        setBaseCurrency(e.id)
        sessionStorage.setItem("baseCurrency", e.id)
        if (recipiantGet && e.code && dropDownValueTwo !== "Select") {
            approvedTransfer()
        }
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.code)
        setDropDownValueTwoImage(e.icon)
        setPairCurrency(e.id)
        sessionStorage.setItem("pairCurrency", e.id)
        if (recipiantGet && e.code && dropDownValue !== "Select") {
            approvedTransfer()
        }
    }





    if (data) {
        return (
            <>
                <div className={styles.parent}>
                    <div className={styles.wrapcalname}>
                        <div className={styles.ratecalculatorname}>
                            <FiRefreshCcw style={{ paddingRight: "4px", fontSize: "23px" }} />
                            Rate calculator
                        </div>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.firstrow}>
                            <h2 className={styles.rowname}>Recipient get</h2>
                            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                    <div className={styles.flagcontent}>
                                        <img src={dropDownValueImage} alt="" className={styles.flagstyle} style={{ display: dropDownValue === "Select" ? "none" : "" }} />
                                        <div className={styles.dropDownValue}>{dropDownValue}</div>
                                    </div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {data.map((amount, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValue(amount)}>
                                            <img src={amount.icon} alt="" className={styles.flagstyle} style={{ paddingBottom: "3px" }} />
                                            {amount.code}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <input className={styles.calculatorinput} type="number" onChange={handleRecipiantGet} />
                        </div>
                        <div className={styles.rowmiddle}>
                            <img src={middlesvg} alt="middleimage" />
                        </div>
                        <div className={styles.secondrow}>
                            <h2 className={styles.rowname}>You pay</h2>
                            <Dropdown isOpen={menuTwo} toggle={() => setMenuTwo(!menuTwo)} style={{ cursor: 'pointer' }} >
                                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                    <div className={styles.flagcontent}>
                                        <img src={dropDownValueTwoImage} alt="" className={styles.flagstyle} style={{ display: dropDownValueTwo === "Select" ? "none" : "" }} />
                                        <div className={styles.dropDownValue}>{dropDownValueTwo}</div>
                                    </div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {data.map((amount, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValueTwo(amount)}>
                                            <img src={amount.icon} alt="" className={styles.flagstyle} style={{ paddingBottom: "3px" }} />
                                            {amount.code}
                                        </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <input className={styles.calculatorinput} type="number" value={currencyRate?.rate} />
                        </div>
                    </div>
                    <div className={styles.exchange}>
                        <div className={styles.exchangeFont}>
                            Exchange rate 1 GBP = {dropDownValue} 890
                        </div>
                    </div>
                    <div className={styles.requestbut}>
                        <Link to="/" >
                            <RequestButton buttonText="Request Now"></RequestButton>
                        </Link>
                    </div>
                </div>
                <ToastContainer />
            </>
        );
    }
}

export default RateCalculator;