import styles from '../TransferMoneyModal/css/selectcurrencypairstep1.module.scss'
import Frame from '../../../../assets/svg/Frame.svg'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
import { MdArrowDropDown, MdArrowForwardIos } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateCurrencyPair, GetCurrencyCode } from "../../../../shared/redux/slices/landing.slices";
import { useAppSelector } from "../../../../shared/redux/reduxHooks";
import { useEffect } from 'react';
import nigeria from '../../../../assets/svg/nigeria.svg'
import usa from '../../../../assets/svg/unitedkingdom.svg'


const SelectCurrencyPairStep1 = ({ setStep, dropDownValue, setDropDownValue, setDropDownValueTwo, dropDownValueTwo }) => {
    const [menuTwo, setMenuTwo] = useState(false)
    const [menu, setMenu] = useState(false)
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const currencyCode = useAppSelector((state) => state.landing.getAllCurrencyCode)
    const [data] = useState(currencyCode)


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

    const addCurrencyPair = () => {
        let body = {
            "recipientCurrency": dropDownValue,
            "senderCurrency": dropDownValueTwo,
        }


        setLoading(true);
        dispatch(CreateCurrencyPair(body))
            .unwrap()
            .then((resp) => {
                if (resp.landing.status === 200) {
                    setLoading(false);
                    toast.success("Succesfully Created");


                }
            })
            .catch((err) => {
                toast.error(err, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                setLoading(false);
            });
    };

    const changeValue = async (e) => {
        setDropDownValue(e)
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e)
    }


    const validate = () => {
        return dropDownValue === null || dropDownValueTwo === null
    }

    const goToStepTwo = () => {
        setStep(2)
    }


    if (data) {
        return (
            <div className={styles.parent}>
                <h1 className={styles.header}>Select currency pair</h1>
                <div className={styles.content}>
                    <div className={styles.descone}>
                        <h2 className={styles.rowname}>Select currency</h2>
                        <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.flagcontent}>
                                    <img src={dropDownValue?.icon} alt="" className={styles.flagstyle} style={{ display: dropDownValue === null ? "none" : "" }} />
                                    <div className={styles.dropDownValue}>{dropDownValue?.code}</div>
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

                        <h2 className={styles.rowname}>Select currency</h2>
                        <Dropdown isOpen={menuTwo} toggle={() => setMenuTwo(!menuTwo)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.flagcontent}>
                                    <img src={dropDownValueTwo?.icon} alt="" className={styles.flagstyle} style={{ display: dropDownValueTwo === null ? "none" : "" }} />
                                    <div className={styles.dropDownValue}>{dropDownValueTwo?.code}</div>
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

                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                                disabled={validate()}
                                onClick={goToStepTwo}
                                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>

                    <div className={styles.desctwo}>
                        <div className={styles.orangecard}>
                            <div className={styles.desctwoh2}>
                                The selected currency is currently unavailable. <br />You can make a custom request.
                            </div>

                            <div className={styles.request}>Make a custom request <span><MdArrowForwardIos /></span></div>
                        </div>

                        <div className={styles.showcard}>
                            <div className={styles.showcardh1}>Currency pair found</div>
                            <div className={styles.flagholder}>
                                <div className={styles.flagcountry}>
                                    <img src={nigeria} alt="" className={styles.flagimg} />
                                    <p className={styles.secondhalfp}>NGN</p>
                                </div>
                                <p className={styles.dash}>-</p>
                                <div className={styles.flagcountry}>
                                    <img src={usa} alt="" className={styles.flagimg} />
                                    <p className={styles.secondhalfp}>USA</p>
                                </div>

                                <span><MdArrowForwardIos /></span>
                            </div>

                            <div className={styles.flagholder}>
                                <div className={styles.flagcountry}>
                                    <img src={nigeria} alt="" className={styles.flagimg} />
                                    <p className={styles.secondhalfp}>NGN</p>
                                </div>
                                <p className={styles.dash}>-</p>
                                <div className={styles.flagcountry}>
                                    <img src={usa} alt="" className={styles.flagimg} />
                                    <p className={styles.secondhalfp}>USA</p>
                                </div>

                                <span><MdArrowForwardIos /></span>
                            </div>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default SelectCurrencyPairStep1;