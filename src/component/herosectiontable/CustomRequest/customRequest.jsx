import { useState } from "react";
import styles from '../CustomRequest/customrequest.module.scss'
import Frame from '../../../assets/svg/Frame.svg'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import { RequestButton } from "../../../shared/utils/button";
import { Link } from "react-router-dom";


const CustomRequest = () => {
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownValueTwo, setDropDownValueTwo] = useState('Select')
    const [dropDownValueThree, setDropDownValueThree] = useState('Select')
    const [dropDownValueFour, setDropDownValueFour] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)
    const [menuThree, setMenuThree] = useState(false)
    const [menuFour, setMenuFour] = useState(false)

    const changeValue = async (e) => {
        setDropDownValue(e.amount)
    }

    const changeValueTwo = async (e) => {
        setDropDownValueTwo(e.amount)
    }

    const changeValueThree = async (e) => {
        setDropDownValueThree(e.amount)
    }
    const changeValueFour = async (e) => {
        setDropDownValueFour(e.amount)
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

    const [amountThree] = useState([
        { id: 1, amount: 'Tution fee' },
        { id: 2, amount: 'Medical' },
        { id: 3, amount: 'Food Bills' },
        { id: 4, amount: 'Traveling' },
        { id: 4, amount: 'House fee' },
        { id: 4, amount: 'Transport' },
    ])

    const [amountFour] = useState([
        { id: 1, amount: 'Cash pickup' },
        { id: 2, amount: 'Mailing' },
        { id: 3, amount: 'Wallet transfer' },
    ])


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

                        <img src={Frame} alt="middle" />

                        <h2 className={styles.rowname}>You pay</h2>
                        <Dropdown isOpen={menuTwo} toggle={() => setMenuTwo(!menuTwo)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.dropDownValue}>{dropDownValueTwo}</div>
                                <div className={styles.dropDownrow}>
                                    <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropBox}>
                                {amountTwo.map((amount,index) =>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValueTwo(amount)}>{amount.amount} </DropdownItem>
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
                                {amountThree.map((amount,index) =>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValueThree(amount)}>{amount.amount} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>

                        <h2 className={styles.rowname}>Enter amount</h2>
                        <input className={styles.calculatorinput} type="number" />

                        <h2 className={styles.rowname}>Select sending method</h2>
                        <Dropdown isOpen={menuFour} toggle={() => setMenuFour(!menuFour)} style={{ cursor: 'pointer' }} >
                            <DropdownToggle tag="a" className={styles.dropdownToggle} >
                                <div className={styles.dropDownValue}>{dropDownValueFour}</div>
                                <div className={styles.dropDownrow}>
                                    <div style={{ color: '#011B6D', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                                </div>
                            </DropdownToggle>
                            <DropdownMenu className={styles.dropBox}>
                                {amountFour.map((amount,index) =>
                                    <DropdownItem className={styles.value} key={index} onClick={() => changeValueFour(amount)}>{amount.amount} </DropdownItem>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <div className={styles.requestbut}>
                            <Link to="/" >
                                <RequestButton buttonText="Send request"></RequestButton>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomRequest;