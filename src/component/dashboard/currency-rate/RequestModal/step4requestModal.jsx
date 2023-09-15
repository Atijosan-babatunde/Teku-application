import styles from '../../currency-rate/RequestModal/css/stepfourrequestmodal.module.scss'
import { BsArrowLeft } from 'react-icons/bs'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { useState } from 'react';
import copy from '../../../../assets/png/copy.png'
import blank from '../../../../assets/svg/blank.svg'


const StepFourRequestModal = ({ setStep }) => {
    const [dropDownValueFour, setDropDownValueFour] = useState('Select')
    const [dropDownValueBank, setDropDownValueBank] = useState('Select')
    const [menuFour, setMenuFour] = useState(false)
    const [menuBank, setMenuBank] = useState(false)
    const [showThis, setShowThis] = useState(false)

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
        setDropDownValueBank(e.bankType)
    }

    const goToStepThree = () => {
        setStep(3)
    }

    const goToStepFive = () => {
        setStep(5)
    }
    return (
        <div className={styles.parent}>
            <p className={styles.firsttext} onClick={goToStepThree}><BsArrowLeft className={styles.arrow} />Go back to Payment checkout</p>
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
                        {amountFour.map((type, index) =>
                            <DropdownItem className={styles.value} key={index} onClick={() => changeValueFour(type)}>{type.paymentType} </DropdownItem>
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
                        {bankData.map((type, index) =>
                            <DropdownItem className={styles.value} key={index} onClick={() => changeValueBank(type)}>{type.bankType} </DropdownItem>
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
                                onClick={goToStepFive}
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
        </div>
    );
}

export default StepFourRequestModal;