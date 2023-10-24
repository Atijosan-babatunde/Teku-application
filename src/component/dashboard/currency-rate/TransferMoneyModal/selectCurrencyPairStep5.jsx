import styles from '../../currency-rate/TransferMoneyModal/css/selectcurrencypairstep5.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useState } from 'react';
import copy from '../../../../assets/png/copy.png'
import blank from '../../../../assets/svg/blank.svg'
import { useAppSelector } from '../../../../shared/redux/reduxHooks';
import { useDispatch } from 'react-redux';
import { GetUsersBanksListed } from "../../../../shared/redux/slices/transaction.slices"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SelectCurrencyPairStep5 = ({ setStep, dropDownValueFour, dropDownValueBank, setDropDownValueBank, setDropDownValueFour }) => {
    const [menuFour, setMenuFour] = useState(false)
    const [menuBank, setMenuBank] = useState(false)
    const [showThis, setShowThis] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const banksListed = useAppSelector((state) => state.transaction.getBanksListed)
    const [data] = useState(banksListed)

    useEffect(() => {
        getBanksListed();
    }, [data]);

    console.log('BANKS', data)
    const getBanksListed = () => {
        setLoading(true);
        dispatch(GetUsersBanksListed())
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

    const validate = () => {
        return dropDownValueFour === "Select" || dropDownValueBank === "Select"
    }

    const [amountFour] = useState([
        { id: 1, paymentType: 'Bank transfer' },
        { id: 2, paymentType: 'Cryptocurrency' },
        { id: 3, paymentType: 'Bank card' },
    ])

    const [bankData] = useState([
        { id: 1, bankType: 'Providious bank' },
        { id: 2, bankType: 'Polaris bank' },
    ])

    const changeValueFour = async (e) => {
        setDropDownValueFour(e.paymentType)
    }

    const changeValueBank = async (e) => {
        setDropDownValueBank(e)
    }

    const goToStepFour = () => {
        setStep(4)
    }

    const goToStepSix = () => {
        setStep(6)
    }



    if (data) {
        return (
            <div className={styles.parent}>
                <p className={styles.firsttext} onClick={goToStepFour}><BsArrowLeft className={styles.arrow} />Go back to Payment checkout</p>
                <h1 className={styles.contenth1}>Payment details</h1>
                <p className={styles.contentp}>Make a payment to the account below.</p>

                <div className={styles.content}>
                    <h2 className={styles.rowname}>Select payment method</h2>
                    <Dropdown isOpen={menuFour} toggle={() => setMenuFour(!menuFour)} style={{ cursor: 'pointer' }} >
                        <DropdownToggle tag="a" className={styles.dropdownToggle} >
                            <div className={styles.dropDownValue}>{dropDownValueFour}</div>
                            <div className={styles.dropDownrow}>
                                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={styles.dropBox}>
                            {amountFour.map((type, first) =>
                                <DropdownItem className={styles.value} key={first} onClick={() => changeValueFour(type)}>{type.paymentType} </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>


                    <h2 className={styles.rowname} style={{ marginTop: '3em' }}>Select Bank</h2>

                    <Dropdown isOpen={menuBank} toggle={() => setMenuBank(!menuBank)} style={{ cursor: 'pointer', marginBottom: '3em' }} >
                        <DropdownToggle tag="a" className={styles.dropdownToggle} >
                            <div className={styles.dropDownValue}>{dropDownValueBank}</div>
                            <div className={styles.dropDownrow}>
                                <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                            </div>
                        </DropdownToggle>
                        <DropdownMenu className={styles.dropBox}>
                            {data.map((type, second) =>
                                <DropdownItem className={styles.value} key={second} onClick={() => changeValueBank(type)}>{type.bankName} </DropdownItem>
                            )}
                        </DropdownMenu>
                    </Dropdown>




                    {showThis ? (
                        <>
                            <div className={styles.paymentconfimation}>
                                <div className={styles.confimationcontent}>
                                    <h1>Total amount to pay</h1>
                                    <div className={styles.confimationsplit}>
                                        <div className={styles.confimationamount}>ZAR <span>50,150</span></div>
                                        <img src={copy} alt="" />
                                    </div>

                                    <h1 style={{ marginTop: "2em" }}>Account details</h1>
                                    <div className={styles.colorholder}>
                                        <div className={styles.confimationsplit}>
                                            <div className={styles.confimationbanknamet}>
                                                <h3>Bank name</h3>
                                                <p>Providus Bank</p>
                                            </div>
                                            <img src={blank} alt="" />
                                        </div>
                                        <div >
                                            <h3 className={styles.banknameh3}>Bank account number</h3>
                                            <div className={styles.bankflex}>
                                                <p className={styles.banknamep}>2056742391</p>
                                                <img src={copy} alt="" />
                                            </div>
                                        </div>

                                        <div >
                                            <h3 className={styles.banknameh3}>Bank account name</h3>
                                            <p className={styles.banknamep}>Teku-PVR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    disabled={validate()}
                                    onClick={goToStepSix}
                                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                                >
                                    Confirm payment
                                </button>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className={styles.requestbut}>
                                <button
                                    className={styles.btnrequest}
                                    disabled={validate()}
                                    onClick={() => setShowThis(true)}
                                    style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                                >
                                    Generate account details
                                </button>
                            </div>

                            <div className={styles.paylater}>
                                Pay later (save for later)
                            </div>
                        </>
                    )}
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default SelectCurrencyPairStep5;