import { useState, useEffect } from "react";
import styles from '../currency-rate/css/currencycustomrequest.module.scss'
import Frame from '../../../assets/svg/Frame.svg'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateCurrencyPair, GetCurrencyCode } from "../../../shared/redux/slices/landing.slices";
import { useAppSelector } from "../../../shared/redux/reduxHooks";
import ReactLoading from "react-loading";


const CurrencyCustomRequest = () => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('Select')
    const [dropDownValueImage, setDropDownValueImage] = useState('')
    const [dropDownValueTwoImage, setDropDownValueTwoImage] = useState('')
    const [dropDownValueThree, setDropDownValueThree] = useState('Select')
    const [dropDownValueFour, setDropDownValueFour] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)
    const [menuThree, setMenuThree] = useState(false)
    const [menuFour, setMenuFour] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyCode = useAppSelector((state) => state.landing.getAllCurrencyCode)
    const [data] = useState(currencyCode)
    const [amount, setAmount] = useState('');




    useEffect(() => {
        getCurrencyCode();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);



    const addCurrencyPair = () => {
        let body = {
            "recipientCurrency": dropDownValue,
            "senderCurrency": dropDownValueTwo,
            "purpose": dropDownValueThree,
            "amount": JSON.parse(amount),
            "sendingMethod": dropDownValueFour,
        }


        setLoading(true);
        dispatch(CreateCurrencyPair(body))
            .unwrap()
            .then((resp) => {
                if (resp.landing.status === 200) {
                    setLoading(false);
                    toast.success("Succesfully Created");
                    setAmount()
                    console.log(amount, "amount")
                }
            })
            .catch((err) => {
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLoading(false);
            });
    };

    // const clear = () => {
    //     setAmount("")
    //     setDropDownValue(dropDownValue)
    // }

    const validate = () => {
        return !amount
            || dropDownValue === "Select"
            || dropDownValueTwo === "Select"
            || dropDownValueThree === "Select"
            || dropDownValueFour === "Select"
    }


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

    const changeValue = async (e) => {
        setDropDownValue(e.code)
        setDropDownValueImage(e.icon)
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.code)
        setDropDownValueTwoImage(e.icon)
    }

    const changeValueThree = async (e) => {
        setDropDownValueThree(e.amount)
    }
    const changeValueFour = async (e) => {
        setDropDownValueFour(e.paymentType)
    }

    const [amountThree] = useState([
        { id: 1, amount: 'TUTION FEE' },
        { id: 2, amount: 'MEDICAL' },
        { id: 3, amount: 'FOOD BILLS' },
        { id: 4, amount: 'TRAVELING' },
        { id: 4, amount: 'HOUSE FEE' },
        { id: 4, amount: 'TRANSPORT' },
    ])

    const [amountFour] = useState([
        { id: 1, paymentType: 'CASH_PICKUP' },
        { id: 2, paymentType: 'ONLINE_TRANSFER' },
        { id: 3, paymentType: 'BANK_TRANSFER' },
    ])

    if (data) {
        return (
            <div className={styles.parent}>
                <div className={styles.content}>
                    <div className={styles.desc}>
                        <div className={styles.descone}>
                            <h1 className={styles.headone}>
                                Select currency pair
                            </h1>
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

                            <img src={Frame} alt="middle" className={styles.mid} />

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
                        </div>
                        <div className={styles.desctwo}>
                            <h2 className={styles.rowname}>Purpose of payment</h2>
                            <Dropdown isOpen={menuThree} toggle={() => setMenuThree(!menuThree)} style={{ cursor: 'pointer' }} >
                                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                    <div className={styles.dropDownValue}>{dropDownValueThree}</div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {amountThree.map((amount, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValueThree(amount)}>{amount.amount} </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>

                            <h2 className={styles.rowname}>Enter amount</h2>
                            <input className={styles.calculatorinput} type="number" onChange={e => setAmount(e.target.value)} />

                            <h2 className={styles.rowname}>Select sending method</h2>
                            <Dropdown isOpen={menuFour} toggle={() => setMenuFour(!menuFour)} style={{ cursor: 'pointer' }} >
                                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                    <div className={styles.dropDownValue}>{dropDownValueFour}</div>
                                    <div className={styles.dropDownrow}>
                                        <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                    </div>
                                </DropdownToggle>
                                <DropdownMenu className={styles.dropBox}>
                                    {amountFour.map((type, index) =>
                                        <DropdownItem className={styles.value} key={index} onClick={() => changeValueFour(type)}>{type.paymentType} </DropdownItem>
                                    )}
                                </DropdownMenu>
                            </Dropdown>
                            <div className={styles.requestbut}>
                                {/* <RequestButton buttonText="Send request" ></RequestButton> */}
                                <button
                                    className={styles.btnrequest}
                                    disabled={validate()}
                                    onClick={addCurrencyPair}
                                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                                >
                                    {loading ? (
                                        <ReactLoading color="white" width={25} height={25} type="spin" />
                                    ) : (
                                        "Send request"
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default CurrencyCustomRequest;