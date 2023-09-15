import styles from '../TransferMoneyModal/css/selectcurrencypairstep1.module.scss'
import Frame from '../../../../assets/svg/Frame.svg'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { useState } from 'react';
import { MdArrowDropDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CreateCurrencyPair, GetCurrencyCode } from "../../../../shared/redux/slices/landing.slices";
import { useAppSelector } from "../../../../shared/redux/reduxHooks";
import { useEffect } from 'react';

const SelectCurrencyPairStep1 = () => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('Select')
    const [dropDownValueTwoImage, setDropDownValueTwoImage] = useState('')
    const [dropDownValueImage, setDropDownValueImage] = useState('')
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
        setDropDownValue(e.code)
        setDropDownValueImage(e.icon)
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.code)
        setDropDownValueTwoImage(e.icon)
    }

    const validate = () => {
        return dropDownValue === "Select" || dropDownValueTwo === "Select"
    }


    if (data) {
        return (
            <div className={styles.parent}>
                <div className={styles.content}>
                    <h1 className={styles.header}>Select currency pair</h1>
                    <div className={styles.descone}>
                        <h2 className={styles.rowname}>Select currency</h2>
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

                        <h2 className={styles.rowname}>Select currency</h2>
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

                        <div className={styles.requestbut}>
                            <button
                                className={styles.btnrequest}
                                disabled={validate()}
                                onClick={addCurrencyPair}
                                style={{ backgroundColor: validate() ? "rgba(1, 27, 109, 0.20)" : " " }}
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        );
    }
}

export default SelectCurrencyPairStep1;