import styles from '../KYC/CSS/steponebusiness.module.scss'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { MdArrowDropDown } from "react-icons/md";
import steponeimg from '../../../../../assets/png/steponeimg.png'
import { useState } from 'react'

const StepOneBusiness = ({setStep}) => {
    const [rcNumber, setRcNumber] = useState('')
    const [businessNumber, setBusinessNumber] = useState('')
    const [dropDownValue, setDropDownValue] = useState('Select')
    const [dropDownLocalGov, setDropdownLocalGov] = useState('Select')
    const [menu, setMenu] = useState(false)
    const [menuTwo, setMenuTwo] = useState(false)

    const [document] = useState([
        { id: 1, document: 'Sole proprietor' },
        { id: 2, document: 'Police officer' },
        { id: 3, document: 'Drivers' },
    ])

    const [Localgov] = useState([
        {id: 1, Localgov: 'Congo'},
        {id: 2, Localgov: 'Taraba'}
    ])

    const changeBusinessType = async (e) => {
        setDropDownValue(e.document)
    }

    const changeLocalGovType = async (e) => {
        setDropdownLocalGov(e.Localgov)
    }

    const validate =()=> {
        return !rcNumber || !businessNumber || dropDownValue === "Select" || dropDownLocalGov === "Select"
    }

    const goToStepTwo =()=> {
        setStep(2)
    }

    return (
        <div className={styles.parent}>
            <h1 className={styles.stepnumber}>Step 1</h1>
            <div className={styles.disctwocontent}>
                <div className={styles.writeup}>
                    <h2 className={styles.headtwo}>Business details</h2>
                    <p className={styles.paratwo}>Input the necessary information below to verify your business.</p>
                </div>

                <img src={steponeimg} alt="" />
            </div>

            <h2 className={styles.rowname}>RC Number</h2>
            <input className={styles.calculatorinput}
                type="number"
                placeholder='Enter your registration number'
                onChange={e => setRcNumber(e.target.value)}
                onKeyDown={(e) => ["e", "E", "+", "-", "."].includes(e.key) && e.preventDefault()}
            />

            <h2 className={styles.rowname}>Business type</h2>

            <Dropdown isOpen={menu} toggle={() => setMenu(!menu)} style={{ cursor: 'pointer' }} >
                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                    <div>{dropDownValue}</div>
                    <div className={styles.dropDownrow}>
                        <div style={{ color: '#777E90', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                    </div>
                </DropdownToggle>
                <DropdownMenu className={styles.dropBox}>
                    {document.map((document, index) =>
                        <DropdownItem className={styles.value} key={index} onClick={() => changeBusinessType(document)}>{document.document} </DropdownItem>
                    )}
                </DropdownMenu>
            </Dropdown>

            <h2 className={styles.rowname}>Business address</h2>
            <input className={styles.calculatorinput}
                type="text"
                placeholder='Enter your business address'
                onChange={e => setBusinessNumber(e.target.value)}
            />

            <h2 className={styles.rowname}>Local government area/State</h2>

            <Dropdown isOpen={menuTwo} toggle={() => setMenuTwo(!menuTwo)} style={{ cursor: 'pointer' }} >
                <DropdownToggle tag="a" className={styles.dropdownToggle} >
                    <div>{dropDownLocalGov}</div>
                    <div className={styles.dropDownLocalGov}>
                        <div style={{ color: '#777E90', }}><MdArrowDropDown style={{ fontSize: '2em' }} /></div>
                    </div>
                </DropdownToggle>
                <DropdownMenu className={styles.dropBox}>
                    {Localgov.map((Localgov, index) =>
                        <DropdownItem className={styles.value} key={index} onClick={() => changeLocalGovType(Localgov)}>{Localgov.Localgov} </DropdownItem>
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
    );
}

export default StepOneBusiness;