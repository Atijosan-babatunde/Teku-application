import styles from "../ratecalculator/ratecalculator.module.scss"
import middlesvg from "../../assets/svg/middlesvg.svg"
import ReactLoading from "react-loading";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";
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
    const [data] = useState(currencyCode)
    const [recipiantGet, setYouRecipiant] = useState('')
    const [baseCurrency, setBaseCurrency] = useState('')
    const [pairCurrency, setPairCurrency] = useState('')
    const [convertedCurrency,setConvertedCurrency]=useState('')


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

    const makeCurrencyConversion = async (amount) => {
        setLoading(true);
        const endpoint = `/pair/rate?baseCurrencyId=${baseCurrency}&pairCurrencyId=${pairCurrency}&baseAmount=${amount}`;
        try {
            const response = await GET_CURRENCY_CALCULATOR(endpoint);
            setLoading(false);
            if (response.data.status === 200){
                setConvertedCurrency(response.data.data.totalRate)
            }
            else {

            }
        } catch (e) {

        }
    };

    const handleRecipiantGet = (e) => {
        setYouRecipiant(e.target.value)
        if (e.target.value && dropDownValue !== "Select" && dropDownValueTwo !== "Select") {
            makeCurrencyConversion(e.target.value)
        }
    }

    const changeValue = async (e) => {
        setDropDownValue(e.code)
        setDropDownValueImage(e.icon)
        setBaseCurrency(e.id)
        if (recipiantGet && e.code && dropDownValueTwo !== "Select") {
            makeCurrencyConversion()
        }
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.code)
        setDropDownValueTwoImage(e.icon)
        setPairCurrency(e.id)
        if (recipiantGet && e.code && dropDownValue !== "Select") {
            makeCurrencyConversion()
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
                            <input className={styles.calculatorinput} type="number" onChange={handleRecipiantGet} onKeyDown={(e) =>["e", "E", "+", "-","."].includes(e.key) && e.preventDefault()}/>
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
                            <input className={styles.calculatorinput} type="number" placeholder={convertedCurrency} value={convertedCurrency ? convertedCurrency : null } readOnly />
                        </div>
                    </div>
                    <div className={styles.exchange}>{loading && <ReactLoading color="blue" width={25} height={25} type="spin" />}</div>
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