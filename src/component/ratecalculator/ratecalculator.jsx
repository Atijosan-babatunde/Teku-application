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



const RateCalculator = () => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyCode = useAppSelector((state) => state.landing.getAllCurrencyCode)
    const currencyRate = useAppSelector((state) => state.landing.getAllCurrencyRate)
    console.log(currencyRate,"currencyRate")
    const [data] = useState(currencyCode)
    const [recipiantGet, setYouRecipiant] = useState('')


    useEffect(() => {
        getCurrencyCode();
    }, [data]);


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

    const handleRecipiantGet = (e) => {
        console.log(e.target.value)
        setYouRecipiant(e.target.value)
        if (e.target.value && dropDownValue !== "Select" && dropDownValueTwo !== "Select") {
            getCurrencyRate()
        }
    }

    const changeValue = async (e) => {
        setDropDownValue(e.code)
        if (recipiantGet && e.code && dropDownValueTwo !== "Select") {
            getCurrencyRate()
        }
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.code)
        if (recipiantGet && e.code && dropDownValue !== "Select") {
            getCurrencyRate()
        }
    }

    // const [amount] = useState([
    //     { id: 1, amount: 'NGN' },
    //     { id: 2, amount: 'GBP' },
    //     { id: 3, amount: 'USD' },
    //     { id: 4, amount: 'ZAR' },
    //     { id: 4, amount: 'GHA' },
    //     { id: 4, amount: 'CAN' },
    // ])

    // const [amountTwo] = useState([
    //     { id: 1, amount: 'NGN' },
    //     { id: 2, amount: 'GBP' },
    //     { id: 3, amount: 'USD' },
    //     { id: 4, amount: 'ZAR' },
    //     { id: 4, amount: 'GHA' },
    //     { id: 4, amount: 'CAN' },
    // ])




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
                                    <div className={styles.dropDownValue}>{dropDownValue}</div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {data.map((amount, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValue(amount)}>{amount.code} </DropdownItem>
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
                                    <div className={styles.dropDownValue}>{dropDownValueTwo}</div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {data.map((amount, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValueTwo(amount)}>{amount.code}</DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <input className={styles.calculatorinput} type="number" value={currencyRate?.rate}/>
                        </div>
                    </div>
                    <div className={styles.exchange}>
                        <div className={styles.exchangeFont}>
                            Exchange rate 1 GBP = NGN 890
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