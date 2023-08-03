import styles from "../ratecalculator/ratecalculator.module.scss"
import middlesvg from "../../assets/svg/middlesvg.svg"
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { useState } from "react";
import { RequestButton } from "../../shared/utils/button";
import { Link } from "react-router-dom";



const RateCalculator = () => {
    const [dropDownValue, setDropDownValue] = useState('USD')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('ZAR')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)

    const changeValue = async (e) => {
        setDropDownValue(e.amount)
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.amount)
    }

    const [amount] = useState([
        { id: 1, amount: 'NGN' },
        { id: 2, amount: 'GBP' },
        { id: 3, amount: 'USD' },
        { id: 4, amount: 'ZAR' },
        { id: 4, amount: 'GHA' },
        { id: 4, amount: 'CAN' },
    ])

    const [amountTwo] = useState([
        { id: 1, amount: 'NGN' },
        { id: 2, amount: 'GBP' },
        { id: 3, amount: 'USD' },
        { id: 4, amount: 'ZAR' },
        { id: 4, amount: 'GHA' },
        { id: 4, amount: 'CAN' },
    ])





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
                                {amount.map((amount,index) => 
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValue(amount)}>{amount.amount} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <input className={styles.calculatorinput} type="number" />
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
                                {amountTwo.map((amount, index)=>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValueTwo(amount)}>{amount.amount} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <input className={styles.calculatorinput} type="number" />
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
        </>
    );
}

export default RateCalculator;